import { ArrowUpRight, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { TELEGRAM_BOT } from '@/data';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, oklch(72% 0.19 150 / 0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="flex flex-col items-start">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-rule bg-paper-2/60 px-3.5 py-1.5 text-xs font-medium text-ink-2 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 text-brand-500" />
              Экосистема VPN для всех устройств
            </div>

            <h1
              id="hero-title"
              className="reveal reveal-delay-1 mt-6 text-display text-ink"
            >
              Приватность —<br />
              <span className="text-gradient-brand">без компромиссов.</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-[44ch] text-lead text-ink-2">
              ByMeVPN — экосистема приложений для Android, Windows, Linux и iOS. Подключение, выбор сервера и управление подпиской в одном месте.
            </p>

            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#platforms"
                className="group inline-flex items-center justify-center gap-2 rounded-pill bg-brand-500 px-7 py-3.5 text-base font-semibold text-brand-ink shadow-glow-brand transition-all duration-short ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
              >
                Выбрать платформу
                <ArrowRight className="h-4 w-4 transition-transform duration-short group-hover:translate-x-0.5" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-pill border border-rule bg-paper-2/60 px-6 py-3.5 text-base font-medium text-ink backdrop-blur-sm transition-all duration-short hover:bg-paper-3"
              >
                Посмотреть продукт
              </a>
            </div>

            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-4 mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-3 transition-colors hover:text-brand-500"
            >
              Попробовать 3 дня через Telegram
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <div className="reveal reveal-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-3">
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-brand-500" />
                Быстрый старт
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-brand-500" />
                2, 5 или 10 устройств
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-brand-500" />
                VLESS Reality и Hysteria 2
              </span>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <HeroProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroProductVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div
        className="absolute inset-0 -z-10 rounded-[2rem] opacity-50 blur-[80px]"
        style={{ background: 'linear-gradient(135deg, oklch(72% 0.19 150 / 0.25) 0%, oklch(58% 0.17 240 / 0.15) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-3 items-center gap-2 sm:gap-4">
        <div className="hidden min-[440px]:block translate-y-6 rotate-[-6deg] transition-transform duration-long ease-out-expo hover:rotate-0">
          <PhoneFrame src="/assets/app/servers.png" alt="Экран выбора сервера ByMeVPN" small />
        </div>

        <div className="col-span-3 min-[440px]:col-span-1 relative z-10 transition-transform duration-long ease-out-expo hover:scale-[1.02]">
          <div className="absolute -inset-3 -z-10 rounded-[1.5rem] bg-gradient-to-b from-brand-500/20 to-transparent blur-xl" aria-hidden="true" />
          <PhoneFrame src="/assets/app/home-on.png" alt="Экран подключённого VPN в ByMeVPN" featured />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-rule bg-paper-2/90 px-3 py-1 text-[10px] font-medium text-ink-3 backdrop-blur-sm whitespace-nowrap">
            Главный экран
          </div>
        </div>

        <div className="hidden min-[440px]:block translate-y-6 rotate-[6deg] transition-transform duration-long ease-out-expo hover:rotate-0">
          <PhoneFrame src="/assets/app/account.png" alt="Экран аккаунта ByMeVPN со сроком подписки" small />
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-muted">
        Дизайн-макеты Android-приложения V2. Данные на экранах примерные.
      </p>
    </div>
  );
}

function PhoneFrame({ src, alt, small, featured }: { src: string; alt: string; small?: boolean; featured?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] border border-rule bg-paper-3 shadow-lift ${
        featured ? 'aspect-[9/19.5]' : 'aspect-[9/19.5]'
      }`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-paper-4" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        width={small ? 400 : 600}
        height={small ? 866 : 1300}
        className="h-full w-full object-cover object-top"
        fetchPriority={featured ? 'high' : undefined}
        loading={featured ? undefined : 'eager'}
      />
    </div>
  );
}
