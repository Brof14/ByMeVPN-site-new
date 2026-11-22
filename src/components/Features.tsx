import { Server, CreditCard, Smartphone, MessageCircle, ShieldCheck } from 'lucide-react';
import { TELEGRAM_BOT } from '@/data';

const FEATURES = [
  {
    icon: Server,
    title: 'Выбор сервера',
    description: 'Автоматический выбор ближайшего сервера с измерением задержки. Поддержка протоколов VLESS Reality, Hysteria 2 и XHTTP.',
    visual: '/assets/app/servers.png',
    span: 'lg:col-span-2',
  },
  {
    icon: CreditCard,
    title: 'Управление подпиской',
    description: 'Срок, тариф и количество устройств — в приложении и через Telegram-бота. Оплата через ЮKassa.',
    span: '',
  },
  {
    icon: Smartphone,
    title: 'Несколько устройств',
    description: 'Одна подписка — до 10 устройств. Тарифы на 2, 5 и 10 устройств.',
    span: '',
  },
  {
    icon: MessageCircle,
    title: 'Telegram-бот',
    description: 'Активация пробного периода, оплата, поддержка и управление подпиской — без отдельного кабинета.',
    span: 'lg:col-span-2',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-30 lg:py-38" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
            Возможности
          </p>
          <h2 id="features-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
            Что умеет экосистема.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-ink-2">
            Каждая возможность подтверждена существующей функциональностью приложений и бота.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const delayClass = `reveal-delay-${Math.min(i + 1, 5)}`;
            return (
              <article
                key={feature.title}
                className={`reveal ${delayClass} group relative overflow-hidden rounded-card border border-rule bg-paper-2 p-6 transition-all duration-short ease-out-expo hover:border-paper-4 hover:bg-paper-3 ${feature.span}`}
              >
                {feature.visual && (
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 transition-opacity duration-long group-hover:opacity-20">
                    <img src={feature.visual} alt="" className="h-full w-full object-cover object-top" loading="lazy" aria-hidden="true" />
                  </div>
                )}
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rule bg-paper-3 text-brand-500 transition-colors duration-short">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-title text-ink">{feature.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-2 leading-relaxed max-w-[42ch]">{feature.description}</p>
                </div>
              </article>
            );
          })}

          <div className="reveal reveal-delay-3 relative overflow-hidden rounded-card border border-brand-500/20 bg-gradient-to-br from-brand-500/5 to-transparent p-6">
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-title text-ink">Поддержка и безопасность</h3>
                <p className="mt-2.5 text-sm text-ink-2 leading-relaxed max-w-[40ch]">
                  Обход российских доменов по умолчанию, настройка DNS и kill-switch. Поддержка через Telegram-бота.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={TELEGRAM_BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-ink transition-all duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
                >
                  Открыть бота
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
