export function Footer() {
  const services = ['Access planning', 'Prefabrication', 'Safety monitoring', 'Field logistics', 'Support & dismantle'];
  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'News', href: '#news-feed' },
    { label: 'Documents', href: '#documents' },
    { label: 'Admin', href: '/admin' },
  ];

  return (
    <footer className="border-t border-white/70 bg-[#020617] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Contact</p>
          <p className="text-lg font-semibold">Anta Access</p>
          <p className="text-sm text-white/70">contact@antascaffolding.com</p>
          <p className="text-sm text-white/70">+1 877 309 1456</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Services</p>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Quick links</p>
          <ul className="space-y-2 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.label}>
                <a className="transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Follow</p>
          <div className="flex gap-3 text-sm">
            <span className="rounded-full border border-white/40 px-3 py-1 uppercase tracking-[0.4em]">LI</span>
            <span className="rounded-full border border-white/40 px-3 py-1 uppercase tracking-[0.4em]">YT</span>
            <span className="rounded-full border border-white/40 px-3 py-1 uppercase tracking-[0.4em]">IN</span>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-white/40">© {new Date().getFullYear()} Anta Access · Engineered scaffolding + safety systems</p>
    </footer>
  );
}
