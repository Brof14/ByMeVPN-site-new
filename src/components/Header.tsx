import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { TELEGRAM_BOT } from '@/data';

const NAV_LINKS = [
  { href: '#product', label: 'Продукт' },
  { href: '#features', label: 'Возможности' },
  { href: '#platforms', label: 'Платформы' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#support', label: 'Поддержка' },
];

export function Header() {
  const scrolled = useScrolled(8);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-short ease-out-expo ${
        scrolled ? 'glass border-b border-rule' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0" aria-label="ByMeVPN — наверх">
          <img src="/assets/brand/bymevpn-shield.png" alt="" className="h-8 w-8 rounded-lg" width="32" height="32" />
          <span className="text-lg font-bold tracking-tight">
            ByMe<span className="text-brand-500">VPN</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-2 transition-colors duration-micro hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#platforms"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-pill bg-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-ink transition-all duration-micro ease-out-expo hover:bg-brand-400 active:scale-[0.97]"
          >
            Выбрать платформу
          </a>
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Telegram <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-rule bg-paper-2 text-ink transition-colors hover:bg-paper-3"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-long ease-out-expo ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-2 transition-colors hover:bg-paper-3 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#platforms"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center rounded-pill bg-brand-500 px-5 py-3 text-base font-semibold text-brand-ink"
          >
            Выбрать платформу
          </a>
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-1.5 rounded-pill border border-rule px-5 py-3 text-base font-medium text-ink"
          >
            Открыть Telegram <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
