import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '@/data';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-30 lg:py-38" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="reveal text-sm font-semibold uppercase tracking-wider text-brand-500">
              FAQ
            </p>
            <h2 id="faq-title" className="reveal reveal-delay-1 mt-4 text-section text-ink">
              Частые вопросы.
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-ink-2">
              Не нашли ответ? Напишите в поддержку через Telegram.
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col gap-2">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-card border bg-paper-2 transition-colors duration-short ${
                    isOpen ? 'border-paper-4' : 'border-rule'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-base font-semibold text-ink">{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule text-ink-2 transition-transform duration-short ease-out-expo ${
                        isOpen ? 'rotate-45 bg-brand-500 text-brand-ink border-transparent' : ''
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-long ease-out-expo ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ink-2 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
