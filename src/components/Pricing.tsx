import { useState } from 'react';
import { Check, ArrowUpRight, Star } from 'lucide-react';
import { PLANS, DEVICE_OPTIONS, TRIAL, rub, TELEGRAM_BOT } from '@/data';

export function Pricing() {
  const [devices, setDevices] = useState(2);

  return (
    <section id="pricing" className="relative py-30 lg:py-38" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
            Тарифы
          </p>
          <h2 id="pricing-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
            Прозрачные цены.<br className="hidden sm:block" /> Больше срок — меньше ставка.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-ink-2">
            Стоимость за месяц снижается при выборе более долгого срока. Итог к оплате виден сразу.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center gap-3">
          <span className="text-sm text-ink-3">Количество устройств</span>
          <div className="flex gap-1.5 rounded-pill border border-rule bg-paper-2 p-1">
            {DEVICE_OPTIONS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDevices(d)}
                aria-pressed={d === devices}
                aria-label={`${d} устройств`}
                className={`min-w-[3.5rem] rounded-pill px-4 py-2 text-sm font-semibold transition-all duration-micro ease-out-expo ${
                  d === devices
                    ? 'bg-brand-500 text-brand-ink'
                    : 'text-ink-2 hover:bg-paper-3 hover:text-ink'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
          {PLANS.map((plan, i) => {
            const option = plan.deviceOptions.find((o) => o.devices === devices) ?? plan.deviceOptions[0];
            const monthly = option.monthly;
            const total = option.total;
            const delayClass = `reveal-delay-${Math.min(i + 1, 4)}`;

            return (
              <article
                key={plan.code}
                className={`reveal ${delayClass} relative flex flex-col rounded-card border p-6 transition-all duration-short ease-out-expo ${
                  plan.isPopular
                    ? 'border-brand-500/40 bg-gradient-to-b from-brand-500/5 to-transparent shadow-glow-brand'
                    : 'border-rule bg-paper-2 hover:border-paper-4 hover:bg-paper-3'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-brand-ink">
                    <Star className="h-3 w-3 fill-current" />
                    Популярный
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                  {plan.discountPercent > 0 && (
                    <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2 py-0.5 text-xs font-semibold text-brand-500">
                      −{plan.discountPercent}%
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-ink-muted">{plan.days} дней доступа</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-ink tabular-nums">{rub.format(monthly)}</span>
                  <span className="text-sm text-ink-3">₽ / мес</span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-rule pt-4">
                  <span className="text-sm text-ink-3">К оплате</span>
                  <span className="text-lg font-bold text-ink tabular-nums">{rub.format(total)} ₽</span>
                </div>

                {plan.bonusMonths > 0 && (
                  <p className="mt-2 text-xs font-medium text-brand-500">
                    +{plan.bonusMonths} {bonusMonthWord(plan.bonusMonths)} в подарок
                  </p>
                )}

                <a
                  href={TELEGRAM_BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-pill px-5 py-2.5 text-sm font-semibold transition-all duration-micro ease-out-expo active:scale-[0.97] ${
                    plan.isPopular
                      ? 'bg-brand-500 text-brand-ink hover:bg-brand-400'
                      : 'border border-rule bg-paper-3 text-ink hover:bg-paper-4'
                  }`}
                >
                  Выбрать <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4 rounded-card border border-rule bg-paper-2 p-5 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-500">
              <Check className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{TRIAL.name}</p>
              <p className="text-xs text-ink-muted">{TRIAL.devices} устройства, без привязки карты</p>
            </div>
          </div>
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill border border-brand-500/30 bg-brand-500/10 px-5 py-2.5 text-sm font-semibold text-brand-500 transition-colors hover:bg-brand-500/20"
          >
            Активировать пробный период
          </a>
        </div>

        <p className="reveal mt-6 text-center text-xs text-ink-muted max-w-3xl mx-auto">
          Цены актуальны на 22 ноября 2026 года и получены из публичного API сервиса. Дополнительные месяцы также оплачиваются. Итоговые условия, доступность тарифов и автопродление проверяйте в Telegram-боте перед оплатой.
        </p>
      </div>
    </section>
  );
}

function bonusMonthWord(n: number): string {
  if (n === 1) return 'месяц';
  if (n >= 2 && n <= 4) return 'месяца';
  return 'месяцев';
}
