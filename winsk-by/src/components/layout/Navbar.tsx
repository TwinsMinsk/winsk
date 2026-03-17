import Link from 'next/link';
import { ScrambleHoverText } from '@/components/animations/ScrambleHoverText';
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-glow)] transition-colors inline-block"
        >
          {'> Winsk'}
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]" style={{ gap: '1.5rem' }}>
          <li>
            <Link href="/#services" className="hover:text-[var(--color-text-primary)] transition-colors">
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/#profile" className="hover:text-[var(--color-text-primary)] transition-colors">
              Профиль
            </Link>
          </li>
          <li>
            <Link href="/#work" className="hover:text-[var(--color-text-primary)] transition-colors">
              Портфолио
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-[var(--color-accent-glow)] transition-colors">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="hidden md:block ml-6">
          <a
            href="/#contact"
            className="group inline-flex h-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 text-sm font-medium transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-glow)]/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-glow)]"
          >
            <ScrambleHoverText text="Обсудить проект" className="font-mono text-xs text-[var(--color-terminal-green)] group-hover:text-[var(--color-accent-glow)] transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
}
