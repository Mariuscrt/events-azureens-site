"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { PRODUCTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

// Le Photo Booth a sa propre section (4 modèles) ; les animations sur mesure passent par le contact.
const FEATURED_IDS = ["videobooth-360", "borne-arcade", "baby-foot", "flipper"];

export default function Showcase() {
  const featured = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section id="details" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-azur-50 via-azur-100/70 to-azur-50" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="En détail"
          title={<>Ce qui est inclus, animation par animation</>}
          subtitle="Matériel, services et formules : tout est annoncé clairement avant votre réservation."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {featured.map((p, i) => {
            const reversed = i % 2 === 1;
            const index = String(i + 1).padStart(2, "0");
            const thumbs = [p.images.detail, p.images.lifestyle].filter(Boolean);
            return (
              <div
                key={p.id}
                id={`detail-${p.id}`}
                className={`grid scroll-mt-28 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visuel : grande image + mini-galerie */}
                <Reveal y={48}>
                  <div className="group relative">
                    <div
                      className={`absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br opacity-50 blur-2xl transition-opacity duration-700 group-hover:opacity-80 ${
                        reversed ? "from-gold-200/50 to-azur-300/40" : "from-azur-300/40 to-gold-200/50"
                      }`}
                      aria-hidden
                    />
                    <figure className="relative overflow-hidden rounded-[2rem] border border-white shadow-[var(--shadow-card-hover)]">
                      <ParallaxImage
                        src={p.images.main.src}
                        alt={p.images.main.alt}
                        strength={7}
                        sizes="(max-width: 1024px) 92vw, 38rem"
                        className="aspect-[4/3]"
                      />
                    </figure>
                    {thumbs.length > 0 ? (
                      <div className="relative mt-4 grid grid-cols-2 gap-4">
                        {thumbs.map((t) => (
                          <motion.figure
                            key={t!.src}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden rounded-2xl border border-white shadow-[var(--shadow-card)]"
                          >
                            <ParallaxImage
                              src={t!.src}
                              alt={t!.alt}
                              strength={4}
                              sizes="(max-width: 1024px) 45vw, 18rem"
                              className="aspect-[16/10]"
                              hoverZoom={false}
                            />
                          </motion.figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>

                {/* Contenu éditorial */}
                <Reveal delay={0.12} y={48}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-gold-500" aria-hidden>
                      {index}
                    </span>
                    <span className="h-px flex-1 max-w-16 bg-gold-400/50" aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                      {p.tagline}
                    </p>
                  </div>
                  <h3 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-navy-800/75">{p.pitch}</p>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-navy-800/55">
                    Ce qui est inclus
                  </p>
                  <ul className="mt-2 grid gap-x-8 sm:grid-cols-2">
                    {p.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 border-t border-navy-900/8 py-3 text-sm leading-snug text-navy-800/75"
                      >
                        <svg className="mt-0.5 shrink-0 text-gold-500" width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-navy-800/55">
                    Formules
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {p.pricing.map((line) => (
                      <div
                        key={line.label}
                        className="min-w-52 flex-1 rounded-2xl border border-navy-900/8 bg-white/90 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur"
                      >
                        <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-navy-800/55">
                          {line.label}
                        </p>
                        <p className="font-display mt-2 text-[1.8rem] font-extrabold leading-none tracking-tight text-navy-900">
                          {line.price}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-navy-800/50">{line.note}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => requestQuoteFor(p.name)}
                    className="btn-gold group/cta mt-8 text-sm"
                  >
                    Réserver le {p.name}
                    <svg
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
