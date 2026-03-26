import { LocaleSwitcher } from './LocaleSwitcher';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'News', href: '#news-feed' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between rounded-[48px] border border-white/40 bg-white/70 px-6 py-4 shadow-[0_15px_60px_rgba(15,23,42,0.12)] backdrop-blur-lg">
      <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.45em] text-dark-blue">
        <span className="h-10 w-10 rounded-full bg-dark-blue/90" />
        <span>Anta Access</span>
      </div>
      <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 lg:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-dark-blue">
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <a
          href="#contact"
          className="rounded-full bg-dark-blue px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#0a1731]"
        >
          Request quote
        </a>
      </div>
    </nav>
  );
}
