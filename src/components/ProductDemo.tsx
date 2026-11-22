import { useState, useCallback } from 'react';
import { Home, Server, User, Settings as SettingsIcon } from 'lucide-react';
import { HomeScreen } from './demo/HomeScreen';
import { ServersScreen } from './demo/ServersScreen';
import { AccountScreen } from './demo/AccountScreen';
import { SettingsScreen } from './demo/SettingsScreen';
import { DEMO_SERVERS, type DemoTab, type DemoToggle } from './demoData';

const INITIAL_TOGGLES: DemoToggle[] = [
  { id: 'kill-switch', label: 'Kill Switch', description: 'Блокировать трафик вне VPN', value: true },
  { id: 'ru-bypass', label: 'Обход .ru', description: 'Не маршрутизировать российские домены', value: true },
  { id: 'dns', label: 'Собственный DNS', description: 'Использовать VPN-DNS', value: false },
  { id: 'auto-connect', label: 'Автоподключение', description: 'Подключаться при запуске', value: false },
];

type ConnectStatus = 'disconnected' | 'connecting' | 'connected';

export function ProductDemo() {
  const [tab, setTab] = useState<DemoTab>('home');
  const [status, setStatus] = useState<ConnectStatus>('disconnected');
  const [selectedServer, setSelectedServer] = useState(DEMO_SERVERS[0]);
  const [toggles, setToggles] = useState(INITIAL_TOGGLES);

  const handleToggleConnect = useCallback(() => {
    setStatus((prev) => {
      if (prev === 'disconnected') {
        return 'connecting';
      }
      if (prev === 'connecting') {
        return 'disconnected';
      }
      return 'disconnected';
    });
  }, []);

  const handleConnectingComplete = useCallback(() => {
    setStatus('connected');
  }, []);

  if (status === 'connecting') {
    const timer = setTimeout(handleConnectingComplete, 2000);
    void timer;
  }

  const handleSelectServer = useCallback((server: typeof DEMO_SERVERS[0]) => {
    setSelectedServer(server);
    setTab('home');
  }, []);

  const handleToggle = useCallback((id: string) => {
    setToggles((prev) => prev.map((t) => (t.id === id ? { ...t, value: !t.value } : t)));
  }, []);

  const TABS: { id: DemoTab; label: string; icon: typeof Home }[] = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'servers', label: 'Серверы', icon: Server },
    { id: 'account', label: 'Аккаунт', icon: User },
    { id: 'settings', label: 'Настройки', icon: SettingsIcon },
  ];

  return (
    <section id="product" className="relative py-24 lg:py-32" aria-labelledby="product-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <h2 id="product-title" className="text-section text-ink">
              Попробуйте интерфейс прямо сейчас.
            </h2>
            <p className="mt-5 max-w-[42ch] text-ink-2">
              Это интерактивная демонстрация приложения ByMeVPN. Нажмите кнопку подключения, выберите сервер, переключите настройки — всё работает прямо в браузере.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-3">
              <span>Кнопка подключения с состояниями</span>
              <span>Выбор сервера</span>
              <span>Работающие переключатели</span>
            </div>

            <p className="mt-4 text-xs text-ink-muted max-w-[42ch]">
              Демонстрация интерфейса. Нажатие кнопки не устанавливает реальное VPN-соединение.
            </p>
          </div>

          <div className="flex justify-center">
            <PhoneFrame>
              <div className="flex h-full flex-col bg-paper-2">
                <div className="flex-1 overflow-hidden">
                  {tab === 'home' && (
                    <HomeScreen
                      status={status}
                      selectedServer={selectedServer}
                      onToggleConnect={handleToggleConnect}
                      onOpenServers={() => setTab('servers')}
                    />
                  )}
                  {tab === 'servers' && (
                    <ServersScreen
                      servers={DEMO_SERVERS}
                      selectedId={selectedServer.id}
                      onSelect={handleSelectServer}
                      onBack={() => setTab('home')}
                    />
                  )}
                  {tab === 'account' && (
                    <AccountScreen onBack={() => setTab('home')} />
                  )}
                  {tab === 'settings' && (
                    <SettingsScreen
                      toggles={toggles}
                      onToggle={handleToggle}
                      onBack={() => setTab('home')}
                    />
                  )}
                </div>

                <nav className="flex border-t border-paper-4 bg-paper-2 px-2 py-1.5" aria-label="Навигация приложения">
                  {TABS.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTab(id)}
                      aria-pressed={tab === id}
                      className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 transition-colors duration-micro ease-out-expo active:scale-[0.97] ${
                        tab === id ? 'text-brand-500' : 'text-ink-muted hover:text-ink-2'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-[10px] font-medium">{label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px] sm:w-[320px]">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-brand-500/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-paper-4 bg-paper-2 shadow-lift">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-paper-4" aria-hidden="true" />
        <div className="relative h-[580px] sm:h-[620px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
