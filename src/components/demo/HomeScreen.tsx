import { Power, ChevronRight, Wifi } from 'lucide-react';
import type { DemoServer } from './demoData';

type HomeScreenProps = {
  status: 'disconnected' | 'connecting' | 'connected';
  selectedServer: DemoServer;
  onToggleConnect: () => void;
  onOpenServers: () => void;
};

export function HomeScreen({ status, selectedServer, onToggleConnect, onOpenServers }: HomeScreenProps) {
  const isConnected = status === 'connected';
  const isConnecting = status === 'connecting';

  return (
    <div className="flex h-full flex-col items-center px-5 pt-12 pb-4">
      <div className="text-center">
        <p className="text-xs text-ink-muted mb-1">Статус</p>
        <p className={`text-sm font-medium ${isConnected ? 'text-brand-500' : 'text-ink-2'}`}>
          {isConnected ? 'Подключено' : isConnecting ? 'Подключение...' : 'Отключено'}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggleConnect}
        disabled={isConnecting}
        aria-label={isConnected ? 'Отключить VPN' : 'Подключить VPN'}
        className="group relative mt-8 flex h-32 w-32 items-center justify-center rounded-full transition-transform duration-short ease-out-expo active:scale-[0.97]"
      >
        <span
          className={`absolute inset-0 rounded-full transition-colors duration-long ease-out-expo ${
            isConnecting
              ? 'bg-brand-500/20 animate-pulse'
              : isConnected
              ? 'bg-brand-500/15'
              : 'bg-paper-4'
          }`}
        />
        <span
          className={`absolute inset-2 rounded-full border-2 transition-colors duration-long ease-out-expo ${
            isConnected ? 'border-brand-500/30' : 'border-paper-4'
          }`}
        />
        <span
          className={`absolute inset-4 rounded-full border-2 transition-colors duration-long ease-out-expo ${
            isConnected ? 'border-brand-500/20' : 'border-paper-4/50'
          }`}
        />
        <span
          className={`relative flex items-center justify-center h-16 w-16 rounded-full transition-colors duration-short ease-out-expo ${
            isConnecting
              ? 'bg-brand-500/30'
              : isConnected
              ? 'bg-brand-500 text-brand-ink'
              : 'bg-paper-3 text-ink-2 group-hover:bg-paper-4'
          }`}
        >
          <Power className="h-7 w-7" strokeWidth={2.5} />
        </span>
      </button>

      {isConnected && (
        <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-500">
          <Wifi className="h-3.5 w-3.5" />
          <span>Защищённое соединение</span>
        </div>
      )}

      <button
        type="button"
        onClick={onOpenServers}
        className="mt-8 flex w-full items-center justify-between rounded-xl border border-paper-4 bg-paper-3 px-4 py-3 transition-colors duration-micro ease-out-expo hover:bg-paper-4 active:scale-[0.98]"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">{selectedServer.flag}</span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-ink truncate">{selectedServer.name}</span>
            <span className="block text-xs text-ink-muted">{selectedServer.location} · {selectedServer.ping} мс</span>
          </span>
        </span>
        <ChevronRight className="h-4 w-4 text-ink-muted shrink-0" />
      </button>

      <div className="mt-3 grid grid-cols-2 gap-2 w-full">
        <div className="rounded-xl border border-paper-4 bg-paper-3 px-3 py-2.5">
          <p className="text-xs text-ink-muted">IP-адрес</p>
          <p className="text-sm font-medium text-ink mt-0.5">
            {isConnected ? '185.12.44.x' : 'Не определён'}
          </p>
        </div>
        <div className="rounded-xl border border-paper-4 bg-paper-3 px-3 py-2.5">
          <p className="text-xs text-ink-muted">Протокол</p>
          <p className="text-sm font-medium text-ink mt-0.5">
            {isConnected ? 'VLESS Reality' : '—'}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <p className="text-center text-xs text-ink-muted">
          Демонстрация интерфейса
        </p>
      </div>
    </div>
  );
}
