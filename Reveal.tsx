"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { GALLERY } from "@/lib/data";

/**
 * Composition éditoriale : une image d'ambiance en vedette (Ken Burns lent),
 * un rythme de formats variés, des légendes discrètes type magazine.
 * Chaque visuel a son propre parallaxe pour une galerie « vivante ».
 */
const LAYOUT: { span: string; aspect: string; strength: number; kenBurns?: boolean }[] = [
  { span: "col-span-2 lg:col-span-7", aspect: "aspect-[16/9]", strength: 5, kenBurns: true },
  { span: "col-span-2 sm:col-span-1 lg:col-span-5", aspect: "aspect-[16/9] lg:aspect-[5/4]", strength: 7 },
  { span: "col-span-1 lg:col-span-3", aspect: "aspect-[3/4]", strength: 6 },
  { span: "col-span-1 lg:col-span-3", aspect: "aspect-[3/4]", strength: 9 },
  { span: "col-span-1 lg:col-span-3", aspect: "aspect-[3/4]", strength: 7 },
  { span: "col-span-1 lg:col-span-3", aspect: "aspect-[3/4]", strength: 10 },
  { span: "col-span-2 lg:col-span-7", aspect: "aspect-[16/9]", strength: 6 },
  { span: "col-span-2 sm:col-span-1 lg:col-span-5", aspect: "aspect-[16/9] lg:aspect-[5/4]", strength: 8 },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-azur-50 to-azur-100" />
        <div className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-azur-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title={<>Nos animations, en situation</>}
          subtitle="Produits, détails et vrais moments d'événement : un aperçu fidèle de ce que vos invités vivront."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12">
          {GALLERY.map((g, i) => {
            const l = LAYOUT[i % LAYOUT.length];
            return (
              <Reveal key={g.src} delay={(i % 4) * 0.08} y={36} className={l.span}>
                <figure className="group">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white shadow-[var(--shadow-card)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-card-hover)] sm:rounded-[1.75rem]">
                    <ParallaxImage
                      src={g.src}
                      alt={g.alt}
                      strength={l.strength}
                      kenBurns={l.kenBurns}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 38rem"
                      className={l.aspect}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
                      aria-hidden
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-3 px-1">
                    <span className="h-px w-6 bg-gold-500/70 transition-all duration-500 group-hover:w-10" aria-hidden />
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-navy-800/55 transition-colors duration-300 group-hover:text-navy-900 sm:text-xs">
                      {g.caption}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-14 text-center text-sm font-semibold text-navy-800/60">
          Envie de voir plus de moments en vidéo ?{" "}
          <a
            href="https://www.instagram.com/events_azureen/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-navy-800 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-navy-950"
          >
            Suivez @events_azureen sur Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
