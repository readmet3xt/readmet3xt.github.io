interface PrefSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/** A labelled on/off switch for visitor preferences (theme, animations). */
export const PrefSwitch = ({ label, checked, onChange }: PrefSwitchProps) => (
  <label className="flex items-center justify-between gap-4 py-1.5 cursor-pointer select-none">
    <span className="text-sm text-text-secondary">{label}</span>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="pref-switch relative h-[26px] w-[46px] shrink-0 rounded-full border border-border bg-bg-secondary"
    >
      <span
        aria-hidden="true"
        className="absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-text-primary transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: checked ? 'translateX(20px)' : 'none' }}
      />
    </button>
  </label>
);
