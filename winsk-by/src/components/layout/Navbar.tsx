'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ScrambleHoverText } from '@/components/animations/ScrambleHoverText';

const navLinks = [
  { name: 'Услуги', href: '/#services', id: 'services' },
  { name: 'Профиль', href: '/#profile', id: 'profile' },
  { name: 'Портфолио', href: '/#work', id: 'work' },
  { name: 'Контакты', href: '/#contact', id: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is roughly in the middle
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
        observers.set(link.id, element);
      }
    });

    // Special case for Hero (top of page)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href} className="relative py-2">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-[var(--color-accent-glow)]' : 'hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent-glow)] shadow-[0_0_8px_var(--color-accent-glow)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            );
          })}
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium p-2 rounded-lg transition-colors duration-300 ${
                      isActive 
                        ? 'text-[var(--color-accent-glow)] bg-white/5' 
                        : 'text-[var(--color-text-secondary)] hover:bg-white/5'
                    }`}
                  >
                    <span className={`mr-2 font-mono transition-colors ${isActive ? 'text-[var(--color-accent-glow)]' : 'text-emerald-400'}`}>
                      {'>'}
                    </span>
                    {link.name}
                  </Link>
                );
              })}
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
