'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ScrambleHoverText } from '@/components/animations/ScrambleHoverText';

const navLinks = [
  { name: 'Услуги', href: '/#services' },
  { name: 'Профиль', href: '/#profile' },
  { name: 'Портфолио', href: '/#work' },
  { name: 'Контакты', href: '/#contact', highlight: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo and Mobile controls container */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-glow)] transition-colors inline-block"
          >
            {'> Winsk'}
          </Link>
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-[var(--color-text-primary)] transition-colors ${
                  link.highlight ? 'text-[var(--color-accent-glow)]' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Call to Action */}
        <div className="hidden md:block ml-6">
          <a
            href="/#contact"
            className="group inline-flex h-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 text-sm font-medium transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-glow)]/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent-glow)]"
          >
            <ScrambleHoverText text="Обсудить проект" className="font-mono text-xs text-[var(--color-terminal-green)] group-hover:text-[var(--color-accent-glow)] transition-colors" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium p-2 rounded-lg hover:bg-white/5 transition-colors ${
                    link.highlight ? 'text-[var(--color-accent-glow)]' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  <span className="text-emerald-400 mr-2 font-mono">{'>'}</span>
                  {link.name}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 group flex h-12 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-4 text-sm font-medium transition-colors hover:bg-emerald-400/10"
              >
                <ScrambleHoverText text="Обсудить проект" className="font-mono text-xs text-emerald-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
