import { Smartphone, Download, KeyRound, Power } from 'lucide-react';
import { TELEGRAM_BOT } from '@/data';

const STEPS = [
  {
    icon: Smartphone,
    title: 'Выберите платформу',
    description: 'Откройте раздел «Платформы» и выберите свою операционную систему. Для Android доступна прямая установка APK.',
  },
  {
    icon: Download,
    title: 'Установите приложение',
    description: 'Скачайте приложение или следуйте инструкции для вашей платформы. Для Android разрешите установку из неизвестных источников.',
  },
  {
    icon: KeyRound,
    title: 'Авторизуйтесь',
    description: 'Войдите через email, Telegram-аккаунт или активируйте 3 дня пробного доступа, если он доступен для вашего аккаунта.',
  },
  {
    icon: Power,
    title: 'Подключитесь',
    description: 'Выберите сервер из списка и нажмите кнопку подключения. Приложение использует VpnService и поддерживает VLESS Reality и Hysteria 2.',
  },
];

export function HowToStart() {
  return (
    <section id="how" className="relative py-30 lg:py-38" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
            Как начать
          </p>
          <h2 id="how-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
            Четыре шага до подключения.
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative rounded-card border border-rule bg-paper-2 p-6 transition-colors duration-short hover:bg-paper-3`}
              >
                <span className="absolute right-5 top-5 text-5xl font-bold text-paper-4 tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rule bg-paper-3 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-2 leading-relaxed">{step.description}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 z-10 h-px w-4 bg-rule" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#platforms"
            className="inline-flex items-center justify-center rounded-pill bg-brand-500 px-6 py-3 text-sm font-semibold text-brand-ink transition-all duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
          >
            Выбрать платформу
          </a>
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill border border-rule bg-paper-2 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-3"
          >
            Открыть Telegram-бот
          </a>
        </div>
      </div>
    </section>
  );
}
