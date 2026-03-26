import Image from 'next/image';

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

const gallery: GalleryItem[] = [
  {
    src: '/images/gallery-1.svg',
    alt: 'Abstract scaffolding study',
    label: 'Global access',
    caption: 'Modular bays shipped worldwide with pre-assembled kits.',
  },
  {
    src: '/images/gallery-2.svg',
    alt: 'Abstract airflow overlay',
    label: 'Safety patrols',
    caption: 'Daily checklists captured with AR-ready tools.',
  },
  {
    src: '/images/gallery-3.svg',
    alt: 'Abstract grid and timeline',
    label: 'Dialed in',
    caption: 'Live dashboards keep every stakeholder aligned.',
  },
];

export function ImageGallery() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Field visuals</p>
        <h2 className="text-3xl font-semibold text-dark-blue">Scenes from the scaffolding floor</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {gallery.map((item) => (
          <article
            key={item.label}
            className="group overflow-hidden rounded-3xl border border-white/80 bg-white/70 shadow-[0_15px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,23,42,0.2)]"
          >
            <div className="relative h-60 w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-1 border-t border-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">{item.label}</p>
              <p className="text-sm text-slate-600">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
