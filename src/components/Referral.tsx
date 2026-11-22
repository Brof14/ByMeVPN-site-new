import { Gift, ArrowUpRight } from 'lucide-react';
import { TELEGRAM_BOT } from '@/data';

export function Referral() {
  return (
    <section className="relative py-20 lg:py-24" aria-labelledby="referral-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-card border border-rule bg-paper-2 p-8 sm:p-12">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-[80px]"
            style={{ background: 'radial-gradient(circle, oklch(72% 0.19 150 / 0.5) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-500">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <h2 id="referral-title" className="text-title text-ink">
                  Пригласите друга — получите 15 дней
                </h2>
                <p className="mt-2 max-w-[52ch] text-sm text-ink-2 leading-relaxed">
                  Когда друг впервые запустит ByMeVPN по вашей персональной ссылке, вам добавят 15 дней доступа. Условия и реферальную ссылку найдёте в Telegram-боте.
                </p>
              </div>
            </div>
            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-pill bg-brand-500 px-6 py-3 text-sm font-semibold text-brand-ink transition-all duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
            >
              Открыть бота <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
