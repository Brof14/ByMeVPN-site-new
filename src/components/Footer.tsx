import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { TELEGRAM_BOT, TELEGRAM_SUPPORT } from '@/data';

export function Footer() {
  return (
    <>
      <section className="relative py-30 lg:py-38" aria-labelledby="cta-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-card border border-rule bg-paper-2 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="absolute inset-0 -z-10 opacity-30"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, oklch(72% 0.19 150 / 0.15) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <h2 id="cta-title" className="text-display-s text-ink">
              Выберите свою платформу.
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-lead text-ink-2">
              Получите приложение или инструкцию по установке для вашего устройства. 3 дня пробного доступа через Telegram — без привязки карты.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#platforms"
                className="group inline-flex items-center justify-center gap-2 rounded-pill bg-brand-500 px-7 py-3.5 text-base font-semibold text-brand-ink shadow-glow-brand transition-all duration-short ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
              >
                Выбрать платформу
                <ArrowRight className="h-4 w-4 transition-transform duration-short group-hover:translate-x-0.5" />
              </a>
              <a
                href={TELEGRAM_BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-pill border border-rule bg-paper-3 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-paper-4"
              >
                Открыть Telegram <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="support" className="border-t border-rule py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#top" className="flex items-center gap-2.5" aria-label="ByMeVPN — наверх">
                <img src="/assets/brand/bymevpn-shield.png" alt="" className="h-8 w-8 rounded-lg" width="32" height="32" />
                <span className="text-lg font-bold tracking-tight">
                  ByMe<span className="text-brand-500">VPN</span>
                </span>
              </a>
              <p className="mt-4 max-w-[36ch] text-sm text-ink-3 leading-relaxed">
                Экосистема VPN-приложений для Android, Windows, Linux и iOS. Подключение, серверы и подписка в одном месте.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink">Платформы</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li><a href="#platforms" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Android</a></li>
                <li><a href="#platforms" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Windows</a></li>
                <li><a href="#platforms" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Linux</a></li>
                <li><a href="#platforms" className="text-sm text-ink-3 transition-colors hover:text-brand-500">iOS</a></li>
                <li><a href="#platforms" className="text-sm text-ink-3 transition-colors hover:text-brand-500">macOS</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink">Продукт</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li><a href="#product" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Приложение</a></li>
                <li><a href="#features" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Возможности</a></li>
                <li><a href="#pricing" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Тарифы</a></li>
                <li><a href="#how" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Как начать</a></li>
                <li><a href="#faq" className="text-sm text-ink-3 transition-colors hover:text-brand-500">Вопросы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink">Связь</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a href={TELEGRAM_BOT} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-3 transition-colors hover:text-brand-500">
                    Telegram-бот
                  </a>
                </li>
                <li>
                  <a href={TELEGRAM_SUPPORT} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-3 transition-colors hover:text-brand-500">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-ink-muted">© {new Date().getFullYear()} ByMeVPN</span>
            <span className="text-xs text-ink-muted">Дизайн-макеты приложения не показывают действующее VPN-подключение.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
