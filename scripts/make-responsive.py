"""Write a 960px-wide copy of every large image (name-960w.webp) and record its
size in src/data/image-sizes.json, so pages can offer phones the smaller file
through srcset. Safe to re-run: existing copies are kept."""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SIZES = ROOT / 'src' / 'data' / 'image-sizes.json'
MIN_WIDTH = 1300
TARGET = 960

sizes = json.loads(SIZES.read_text(encoding='utf-8'))
made = 0
saved = 0
for src, (w, h) in list(sizes.items()):
    if w < MIN_WIDTH or src.endswith('-960w.webp') or not src.endswith('.webp'):
        continue
    small = src[:-5] + '-960w.webp'
    path = ROOT / 'public' / src.lstrip('/')
    out = ROOT / 'public' / small.lstrip('/')
    if not out.exists():
        im = Image.open(path)
        im = im.resize((TARGET, round(h * TARGET / w)), Image.LANCZOS)
        im.save(out, 'WEBP', quality=80, method=6)
        made += 1
        saved += path.stat().st_size - out.stat().st_size
    with Image.open(out) as im:
        sizes[small] = [im.width, im.height]

SIZES.write_text(json.dumps(dict(sorted(sizes.items())), indent=0), encoding='utf-8')
print(f'made {made} smaller copies; each saves phones {saved // 1024} KB in total versus the originals')
