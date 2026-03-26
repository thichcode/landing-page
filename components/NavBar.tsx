'use client';

import Link from 'next/link';
import { LocaleSwitcher } from './LocaleSwitcher';

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Solutions', href: '/solution' },
  { label: 'Service', href: '/service' },
  { label: 'News', href: '#news-feed' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 rounded-[48px] border border-white/40 bg-white/80 px-4 py-3 shadow-[0_15px_60px_rgba(15,23,42,0.12)] backdrop-blur-lg transition-all duration-300 lg:px-6 lg:py-4">
      <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.45em] text-dark-blue">
        <span className="h-10 w-10 rounded-full bg-dark-blue/90" />
        <span>Anta Access</span>
      </div>
      <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-dark-blue focus-visible:text-dark-blue focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/50"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="lg:hidden">
          <LocaleSwitcher />
        </div>
        <div className="hidden lg:block">
          <LocaleSwitcher />
        </div>
        <Link
          href="#contact"
          className="rounded-full bg-dark-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#0a1731] focus-visible:outline-none focus-visible:ring focus-visible:ring-white/60"
        >
          Request quote
        </Link>
      </div>
    </nav>
  );
}
