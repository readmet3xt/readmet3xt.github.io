"""One-off image pipeline for public/ (kept in the repo so it can be re-run).

  python scripts/optimize-images.py            # dry run: print the plan and estimated savings
  python scripts/optimize-images.py --apply    # encode, rewrite references, move originals

What --apply does:
  1. Finds every image path quoted in src/**/*.ts(x) and index.html.
  2. Maps it to a slugified WebP path. Folders named like routes (/otagon, /versus,
     /screenshot) move under /images/casestudies/ so GitHub Pages doesn't redirect them.
  3. Encodes with Pillow: max 2000px wide, q80 for photos (JPEG sources), q88 for UI
     (PNG sources); keeps the original bytes if WebP would be larger. Byte-identical
     sources share one output.
  4. Writes 960px-wide thumbnails for the home cards (projectData thumbnails).
  5. Replaces each exact quoted literal in the source files and fails if any old path remains.
  6. Moves originals and every unreferenced image under the managed folders to
     Pic/_public-originals/ (gitignored), keeping relative paths.
  7. Writes scripts/image-map.json (old -> new) and src/data/image-sizes.json ({src: [w, h]}).
"""
import hashlib
import json
import os
import re
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
ORIGINALS = ROOT / "Pic" / "_public-originals"
SOURCE_GLOBS = ["src/**/*.ts", "src/**/*.tsx"]
EXTRA_SOURCES = [ROOT / "index.html"]
IMAGE_RE = re.compile(r"""(['"`])(/[^'"`\n]+?\.(?:png|jpe?g|webp|gif))\1""", re.IGNORECASE)
MANAGED_DIRS = ["images", "media", "otagon", "versus", "screenshot", "softwire", "koinbasket"]
SKIP = {"/favicon.png", "/social-card.png"}
ROUTE_DIRS = {"otagon", "versus", "screenshot"}
RENAMES = {
    "/media/22366376-40f2-492f-989a-067de0fdb01f.png": "/images/amaan-portrait.webp",
    "/images/casestudies/ivi/Screenshot 2026-03-08 081421.png": "/images/casestudies/ivi/core77-student-notable-listing.webp",
}
MAX_W = 2000
THUMB_W = 960


def source_files():
    files = [p for g in SOURCE_GLOBS for p in ROOT.glob(g)]
    return [p for p in files + EXTRA_SOURCES if p.is_file()]


def slug(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "image"


def target_path(old: str) -> str:
    if old in RENAMES:
        return RENAMES[old]
    parts = old.lstrip("/").split("/")
    if parts[0] in ROUTE_DIRS:
        parts = ["images", "casestudies"] + parts
    stem, _ext = os.path.splitext(parts[-1])
    parts[-1] = slug(stem) + (".gif" if old.lower().endswith(".gif") else ".webp")
    parts[:-1] = [slug(p) for p in parts[:-1]]
    return "/" + "/".join(parts)


def thumb_path(new: str) -> str:
    base, ext = os.path.splitext(new)
    return f"{base}-{THUMB_W}w{ext}"


def md5(path: Path) -> str:
    return hashlib.md5(path.read_bytes()).hexdigest()


def encode(src: Path, dest: Path, max_w: int) -> tuple[int, int, int]:
    """Encode src to dest as WebP. Returns (width, height, bytes)."""
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
            im = im.convert("RGBA")
            if im.getchannel("A").getextrema()[0] == 255:
                im = im.convert("RGB")
        else:
            im = im.convert("RGB")
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        quality = 80 if src.suffix.lower() in (".jpg", ".jpeg") else 88
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "WEBP", quality=quality, method=6)
        return im.width, im.height, dest.stat().st_size


def main(apply: bool):
    files = source_files()
    refs: dict[str, set[Path]] = {}
    for f in files:
        for _q, path in IMAGE_RE.findall(f.read_text(encoding="utf-8")):
            if path not in SKIP:
                refs.setdefault(path, set()).add(f)

    missing = [p for p in refs if not (PUBLIC / p.lstrip("/")).is_file()]
    if missing:
        print("Referenced but missing on disk:", *missing, sep="\n  ")
        sys.exit(1)

    thumbs = set(re.findall(r"thumbnail: '([^']+)'", (ROOT / "src/data/projectData.ts").read_text(encoding="utf-8")))

    plan, by_hash, before = {}, {}, 0
    for old in sorted(refs):
        src = PUBLIC / old.lstrip("/")
        before += src.stat().st_size
        h = md5(src)
        plan[old] = by_hash.setdefault(h, target_path(old))

    collisions = {}
    for old, new in plan.items():
        collisions.setdefault(new, set()).add(md5(PUBLIC / old.lstrip("/")))
    clash = [n for n, hs in collisions.items() if len(hs) > 1]
    if clash:
        print("Different images map to the same new path:", *clash, sep="\n  ")
        sys.exit(1)

    referenced_abs = {(PUBLIC / o.lstrip("/")).resolve() for o in refs}
    unreferenced = [
        p for d in MANAGED_DIRS if (PUBLIC / d).exists()
        for p in (PUBLIC / d).rglob("*")
        if p.is_file() and p.resolve() not in referenced_abs
    ]
    unref_bytes = sum(p.stat().st_size for p in unreferenced)
    print(f"Referenced images: {len(refs)} ({before/1e6:.1f} MB), unique outputs: {len(set(plan.values()))}")
    print(f"Unreferenced files to move out: {len(unreferenced)} ({unref_bytes/1e6:.1f} MB)")
    print(f"Thumbnails: {len(thumbs)}")
    if not apply:
        for old, new in list(plan.items())[:12]:
            print(f"  {old}  ->  {new}")
        print("Dry run only. Re-run with --apply.")
        return

    # 1. Encode into a staging dir first, so sources stay readable while we work.
    staging = ROOT / "Pic" / "_staging"
    if staging.exists():
        shutil.rmtree(staging)
    sizes, after, kept_original = {}, 0, 0
    done = {}
    for old, new in plan.items():
        if new in done:
            continue
        src = PUBLIC / old.lstrip("/")
        dest = staging / new.lstrip("/")
        if src.suffix.lower() == ".gif":
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)
            with Image.open(src) as im:
                w, h = im.size
            n = dest.stat().st_size
        else:
            w, h, n = encode(src, dest, MAX_W)
            if n >= src.stat().st_size and src.suffix.lower() in (".webp", ".jpg", ".jpeg"):
                # Re-encoding didn't help: keep the original bytes under the new name.
                dest.unlink()
                new_kept = os.path.splitext(new)[0] + src.suffix.lower()
                for o in [k for k, v in plan.items() if v == new]:
                    plan[o] = new_kept
                new = new_kept
                dest = staging / new.lstrip("/")
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src, dest)
                with Image.open(src) as im:
                    w, h = im.size
                n = dest.stat().st_size
                kept_original += 1
        sizes[new] = [w, h]
        after += n
        done[new] = True
        if old in thumbs:
            tdest = staging / thumb_path(new).lstrip("/")
            tw, th, tn = encode(src, tdest.with_suffix(".webp"), THUMB_W)
            sizes[thumb_path(os.path.splitext(new)[0] + ".webp")] = [tw, th]
            after += tn

    # 2. Rewrite exact quoted literals.
    thumb_targets = {old: thumb_path(os.path.splitext(plan[old])[0] + ".webp") for old in thumbs if old in plan}
    for f in files:
        text = f.read_text(encoding="utf-8")
        orig = text
        for old, new in plan.items():
            target = thumb_targets.get(old, new) if f.name == "projectData.ts" else new
            for q in ("'", '"', "`"):
                text = text.replace(f"{q}{old}{q}", f"{q}{target}{q}")
        if text != orig:
            f.write_text(text, encoding="utf-8", newline="")
    # An already-WebP file whose slug is unchanged maps to itself; that's not a leftover.
    leftover = [(o, str(f.relative_to(ROOT))) for f in files for o in plan
                if plan[o] != o and any(f"{q}{o}{q}" in f.read_text(encoding="utf-8") for q in "'\"`")]
    if leftover:
        print("Old paths still referenced:", *leftover[:20], sep="\n  ")
        sys.exit(1)

    # 3. Move originals + unreferenced out of public/, then put the new files in place.
    for p in sorted(referenced_abs | {u.resolve() for u in unreferenced}):
        rel = p.relative_to(PUBLIC.resolve())
        dest = ORIGINALS / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(p), str(dest))
    for p in staging.rglob("*"):
        if p.is_file():
            rel = p.relative_to(staging)
            dest = PUBLIC / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(p), str(dest))
    shutil.rmtree(staging)
    for d in MANAGED_DIRS:
        for sub in sorted((PUBLIC / d).rglob("*"), reverse=True) if (PUBLIC / d).exists() else []:
            if sub.is_dir() and not any(sub.iterdir()):
                sub.rmdir()
        if (PUBLIC / d).exists() and not any((PUBLIC / d).iterdir()):
            (PUBLIC / d).rmdir()

    (ROOT / "scripts" / "image-map.json").write_text(json.dumps({**plan, **{f"{k} (thumb)": v for k, v in thumb_targets.items()}}, indent=1), encoding="utf-8")
    (ROOT / "src" / "data" / "image-sizes.json").write_text(json.dumps(dict(sorted(sizes.items())), indent=0), encoding="utf-8")
    print(f"Done. Referenced images {before/1e6:.1f} MB -> {after/1e6:.1f} MB "
          f"(kept {kept_original} originals that WebP didn't shrink). Moved {len(unreferenced)} unreferenced files to Pic/_public-originals/.")


if __name__ == "__main__":
    main("--apply" in sys.argv)
