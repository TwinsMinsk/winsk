import Link from 'next/link';

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
            <Link href="#work" className="hover:text-[var(--color-text-primary)] transition-colors">
              Work
            </Link>
          </li>
          <li>
            <Link href="#stack" className="hover:text-[var(--color-text-primary)] transition-colors">
              Stack
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[var(--color-text-primary)] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[var(--color-accent-glow)] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
