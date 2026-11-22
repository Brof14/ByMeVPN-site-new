type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
  description: string;
};

export function Toggle({ checked, onChange, label, description }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-paper-4 bg-paper-3 px-4 py-3 text-left transition-colors duration-micro ease-out-expo hover:bg-paper-4 active:scale-[0.98]"
    >
      <span className="min-w-0">
        <span className="block text-sm font-medium text-ink">{label}</span>
        <span className="block text-xs text-ink-muted mt-0.5">{description}</span>
      </span>
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-short ease-out-expo ${
          checked ? 'bg-brand-500' : 'bg-paper-4'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-ink shadow-sm transition-transform duration-short ease-out-expo ${
            checked ? 'translate-x-[1.375rem]' : 'translate-x-0.5'
          }`}
        />
      </span>
    </button>
  );
}
