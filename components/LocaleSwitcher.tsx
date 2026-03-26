'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supportedLocales } from '../lib/locale';

export function LocaleSwitcher() {
  const pathname = usePathname() ?? '/';
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.slice(1).join('/');
  return (
    <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
      {supportedLocales.map((locale) => {
        const href = `/${locale}${rest ? `/${rest}` : ''}`;
        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full px-3 py-1 transition ${segments[0] === locale ? 'bg-dark-blue/90 text-white' : 'hover:bg-dark-blue/10'}`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
