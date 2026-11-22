import { useState } from 'react';
import { APP_SCREENS } from '@/data';

export function ProductDemo() {
  const [active, setActive] = useState(0);
  const screen = APP_SCREENS[active];

  return (
    <section id="product" className="relative py-30 lg:py-38" aria-labelledby="product-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col">
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
              Продукт
            </p>
            <h2 id="product-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
              Всё важное —<br className="hidden sm:block" /> на одном экране.
            </h2>
            <p className="reveal reveal-delay-2 mt-5 max-w-[42ch] text-ink-2">
              Выберите сервер, посмотрите срок подписки и настройте приложение. Переключайте экраны, чтобы увидеть, как устроен ByMeVPN.
            </p>

            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-2">
              {APP_SCREENS.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`rounded-pill border px-4 py-2 text-sm font-medium transition-all duration-micro ease-out-expo ${
                    i === active
                      ? 'border-transparent bg-brand-500 text-brand-ink'
                      : 'border-rule bg-paper-2 text-ink-2 hover:bg-paper-3 hover:text-ink'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className="reveal reveal-delay-4 mt-5 text-sm text-ink-2 transition-opacity duration-short">
              {screen.description}
            </p>
            <p className="mt-3 text-xs text-ink-muted">
              Дизайн-макеты Android-приложения V2. Статусы, серверы и сроки — примеры. Сайт не подключает VPN.
            </p>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-[60px]"
                style={{ background: 'linear-gradient(135deg, oklch(72% 0.19 150 / 0.2) 0%, oklch(58% 0.17 240 / 0.1) 100%)' }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-rule bg-paper-3 shadow-lift aspect-[9/19.5]">
                <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-paper-4" aria-hidden="true" />
                <img
                  key={screen.key}
                  src={screen.src}
                  alt={screen.alt}
                  width={600}
                  height={1300}
                  className="h-full w-full object-cover object-top animate-fade-in"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-rule bg-paper-2/90 px-4 py-1.5 text-xs font-medium text-ink-3 backdrop-blur-sm whitespace-nowrap">
                {screen.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
