import { ArrowUpRight, Download, Github, Check, FlaskConical, Wrench, Clock } from 'lucide-react';
import { PLATFORMS, type PlatformStatus } from '@/data';

const STATUS_STYLES: Record<PlatformStatus, { icon: typeof Check; dot: string; badge: string; label: string }> = {
  available: { icon: Check, dot: 'bg-brand-500', badge: 'border-brand-500/30 bg-brand-500/10 text-brand-500', label: 'Доступно' },
  experimental: { icon: FlaskConical, dot: 'bg-warning', badge: 'border-warning/30 bg-warning/10 text-warning', label: 'Экспериментальная' },
  development: { icon: Wrench, dot: 'bg-brand-300', badge: 'border-brand-300/30 bg-brand-300/10 text-brand-300', label: 'В разработке' },
  planned: { icon: Clock, dot: 'bg-ink-3', badge: 'border-rule bg-paper-3 text-ink-3', label: 'Скоро' },
};

export function Platforms() {
  return (
    <section id="platforms" className="relative py-30 lg:py-38" aria-labelledby="platforms-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
            Платформы
          </p>
          <h2 id="platforms-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
            Единая экосистема.<br className="hidden sm:block" /> Пять платформ.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-ink-2">
            Каждое приложение — часть общей экосистемы ByMeVPN. Выберите свою платформу и получите приложение или инструкцию по установке. Статусы отражают реальную готовность.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((platform, i) => {
            const style = STATUS_STYLES[platform.status];
            const StatusIcon = style.icon;
            const delayClass = `reveal-delay-${Math.min(i + 1, 5)}`;

            return (
              <article
                key={platform.id}
                className={`reveal ${delayClass} group relative flex flex-col rounded-card border border-rule bg-paper-2 p-6 transition-all duration-short ease-out-expo hover:border-paper-4 hover:bg-paper-3 ${
                  platform.id === 'android' ? 'lg:row-span-1 ring-1 ring-brand-500/20' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <PlatformIcon id={platform.id} />
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${style.badge}`}>
                    <StatusIcon className="h-3 w-3" />
                    {platform.statusLabel}
                  </span>
                </div>

                <h3 className="mt-5 text-title text-ink">{platform.name}</h3>
                <p className="mt-1 text-sm text-ink-3">{platform.device}</p>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed">{platform.description}</p>

                <p className="mt-4 flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                  <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
                  {platform.statusNote}
                </p>

                <div className="mt-6 flex flex-col gap-2 pt-2">
                  {platform.action ? (
                    <a
                      href={platform.action.href}
                      target={platform.action.external ? '_blank' : undefined}
                      rel={platform.action.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-ink transition-all duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
                    >
                      {platform.action.label === 'Скачать APK' ? (
                        <Download className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                      {platform.action.label}
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 rounded-pill border border-rule bg-paper-3 px-5 py-2.5 text-sm font-medium text-ink-muted cursor-not-allowed">
                      <Clock className="h-4 w-4" />
                      Скоро
                    </span>
                  )}
                  <a
                    href={platform.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-ink-3 transition-colors hover:text-brand-500"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Исходный код
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformIcon({ id }: { id: string }) {
  const icons: Record<string, string> = {
    android: 'M5 14l1.5-3.5C6.8 9.6 7.6 9 8.5 9h7c.9 0 1.7.6 2 1.5L19 14v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-4zM7 11h10M7.5 16.5h.01M16.5 16.5h.01M4 13v3M20 13v3M9 5l-1.5 2M15 5l1.5 2"',
    windows: 'M3 5l8-1v8H3V5zM3 13h8v7l-8-1v-6zM12 4l9-1.5V12H12V4zM12 13h9v8.5L12 20v-7z"',
    linux: 'M12 2c-3 0-5 2-5 5 0 2 1 3 1 5 0 1-1 2-1 4 0 2 2 4 5 4s5-2 5-4c0-2-1-3-1-4 0-2 1-3 1-5 0-3-2-5-5-5zM9 10h.01M15 10h.01M10 14h4"',
    ios: 'M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zM11 18h2"',
    macos: 'M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3A6 6 0 006 11v3.2c0 .5-.2 1-.6 1.4L4 17h5M9 17a3 3 0 006 0"',
  };

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule bg-paper-3 text-ink-2 transition-colors duration-short group-hover:text-brand-500">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d={icons[id]} />
      </svg>
    </div>
  );
}
