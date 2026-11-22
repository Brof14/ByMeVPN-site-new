import { Check, ArrowLeft, Zap } from 'lucide-react';
import type { DemoServer } from './demoData';

type ServersScreenProps = {
  servers: DemoServer[];
  selectedId: string;
  onSelect: (server: DemoServer) => void;
  onBack: () => void;
};

export function ServersScreen({ servers, selectedId, onSelect, onBack }: ServersScreenProps) {
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
        <h3 className="text-base font-semibold text-ink">Серверы</h3>
      </div>

      <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-paper-3 px-3 py-2 text-xs text-ink-muted">
        <Zap className="h-3.5 w-3.5 text-brand-500" />
        Автоматический выбор — ближайший сервер
      </div>

      <div className="mt-3 flex-1 overflow-y-auto scrollbar-none -mx-1 px-1">
        <div className="flex flex-col gap-1.5">
          {servers.map((server) => {
            const isSelected = server.id === selectedId;
            return (
              <button
                key={server.id}
                type="button"
                onClick={() => onSelect(server)}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-micro ease-out-expo active:scale-[0.98] ${
                  isSelected
                    ? 'border-brand-500/40 bg-brand-500/10'
                    : 'border-paper-4 bg-paper-3 hover:bg-paper-4'
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{server.flag}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-ink truncate">{server.name}</span>
                    <span className="block text-xs text-ink-muted">{server.location}</span>
                  </span>
                </span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className={`text-xs tabular-nums ${server.ping < 50 ? 'text-brand-500' : 'text-ink-muted'}`}>
                    {server.ping} мс
                  </span>
                  {isSelected && <Check className="h-4 w-4 text-brand-500" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
