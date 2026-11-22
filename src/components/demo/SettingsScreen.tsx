import { ArrowLeft } from 'lucide-react';
import { Toggle } from './Toggle';
import type { DemoToggle } from './demoData';

type SettingsScreenProps = {
  toggles: DemoToggle[];
  onToggle: (id: string) => void;
  onBack: () => void;
};

export function SettingsScreen({ toggles, onToggle, onBack }: SettingsScreenProps) {
  return (
    <div className="flex h-full flex-col px-5 pt-12 pb-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Назад"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper-3 text-ink-2 transition-colors duration-micro hover:bg-paper-4 active:scale-[0.97]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h3 className="text-base font-semibold text-ink">Настройки</h3>
      </div>

      <div className="mt-4 flex-1 overflow-y-auto scrollbar-none -mx-1 px-1">
        <p className="px-1 text-xs text-ink-muted mb-2">Соединение</p>
        <div className="flex flex-col gap-1.5">
          {toggles.map((toggle) => (
            <Toggle
              key={toggle.id}
              checked={toggle.value}
              onChange={() => onToggle(toggle.id)}
              label={toggle.label}
              description={toggle.description}
            />
          ))}
        </div>

        <p className="px-1 text-xs text-ink-muted mt-5 mb-2">О приложении</p>
        <div className="flex items-center justify-between rounded-xl border border-paper-4 bg-paper-3 px-4 py-3">
          <span className="text-sm text-ink-2">Версия</span>
          <span className="text-sm font-medium text-ink">1.0.51</span>
        </div>
      </div>
    </div>
  );
}
