import { Smartphone, Clock, CreditCard, ChevronRight } from 'lucide-react';

type AccountScreenProps = {
  onBack: () => void;
};

export function AccountScreen({ onBack }: AccountScreenProps) {
  return (
    <div className="flex h-full flex-col px-5 pt-12 pb-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Назад"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper-3 text-ink-2 transition-colors duration-micro hover:bg-paper-4 active:scale-[0.97]"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>
        <h3 className="text-base font-semibold text-ink">Аккаунт</h3>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-paper-4 bg-paper-3 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
          <span className="text-base font-bold">A</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink truncate">user@example.com</p>
          <p className="text-xs text-ink-muted">Основной аккаунт</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <div className="flex items-center justify-between rounded-xl border border-paper-4 bg-paper-3 px-4 py-3">
          <span className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-ink-muted" />
            <span className="text-sm text-ink-2">Осталось дней</span>
          </span>
          <span className="text-sm font-semibold text-ink tabular-nums">42 дня</span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-paper-4 bg-paper-3 px-4 py-3">
          <span className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-ink-muted" />
            <span className="text-sm text-ink-2">Тариф</span>
          </span>
          <span className="text-sm font-semibold text-ink">4 месяца (3+1)</span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-paper-4 bg-paper-3 px-4 py-3">
          <span className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-ink-muted" />
            <span className="text-sm text-ink-2">Устройства</span>
          </span>
          <span className="text-sm font-semibold text-ink">2 / 2</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-brand-ink transition-colors duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.98]"
      >
        Продлить подписку
      </button>

      <div className="mt-3 flex flex-col gap-1.5">
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-ink-2 transition-colors duration-micro hover:bg-paper-3">
          <span>Устройства</span>
          <ChevronRight className="h-4 w-4 text-ink-muted" />
        </button>
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-ink-2 transition-colors duration-micro hover:bg-paper-3">
          <span>Настройки аккаунта</span>
          <ChevronRight className="h-4 w-4 text-ink-muted" />
        </button>
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-error transition-colors duration-micro hover:bg-paper-3">
          <span>Выйти</span>
        </button>
      </div>

      <p className="mt-auto pt-4 text-center text-xs text-ink-muted">
        Демонстрационные данные
      </p>
    </div>
  );
}
