"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

const PHOTOBOOTH_MODELS = [
  { src: "/assets/events-azureen/photobooth-woody.jpg", label: "Woody", alt: "Photo Booth Woody en bois face à la mer" },
  { src: "/assets/events-azureen/photobooth-classique.jpg", label: "Classique", alt: "Photo Booth classique dans un intérieur élégant" },
  { src: "/assets/events-azureen/photobooth-vintage.jpg", label: "Vintage", alt: "Photo Booth vintage devant un mur végétal" },
  { src: "/assets/events-azureen/photobooth-miroir.jpg", label: "Miroir", alt: "Photo Booth miroir lumineux en extérieur" },
];

export default function Showcase() {
  const featured = PRODUCTS.filter((p) => p.id !== "animations-personnalisees");

  return (
    <section id="details" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-azur-50 via-azur-100/70 to-azur-50" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="En détail"
          title={
            <>
              Chaque animation, <span className="font-accent italic text-gradient-gold">à la loupe</span>
            </>
          }
          subtitle="Formats, services inclus et tarifs transparents : tout ce qu'il faut savoir avant de réserver."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {featured.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={p.id}
                id={`detail-${p.id}`}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visuel */}
                <Reveal y={40}>
                  <div className="group relative">
                    <div
                      className={`absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                        reversed ? "from-gold-200/60 to-azur-300/50" : "from-azur-300/50 to-gold-200/60"
                      }`}
                      aria-hidden
                    />
                    {p.id === "photo-booth" ? (
                      <div className="relative grid grid-cols-2 gap-3">
                        {PHOTOBOOTH_MODELS.map((m, j) => (
                          <motion.figure
                            key={m.label}
                            whileHover={{ y: -5, rotate: j % 2 === 0 ? -1 : 1 }}
                            className="card-premium overflow-hidden !rounded-2xl p-1.5"
                          >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                              <Image
                                src={m.src}
                                alt={m.alt}
                                fill
                                sizes="(max-width: 1024px) 45vw, 18rem"
                                className="object-cover"
                              />
                              <figcaption className="absolute bottom-2 left-2 rounded-full bg-navy-950/70 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-gold-200 backdrop-blur">
                                {m.label}
                              </figcaption>
                            </div>
                          </motion.figure>
                        ))}
                      </div>
                    ) : (
                      <figure className="card-premium relative overflow-hidden !rounded-[1.75rem] p-2.5">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                          <Image
                            src={p.image}
                            alt={p.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 92vw, 36rem"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" aria-hidden />
                        </div>
                      </figure>
                    )}
                  </div>
                </Reveal>

                {/* Contenu */}
                <Reveal delay={0.12} y={40}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                    {p.tagline}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="font-accent mt-4 text-lg italic leading-relaxed text-navy-700">
                    « {p.pitch} »
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm leading-snug text-navy-800/80">
                        <svg className="mt-0.5 shrink-0 text-gold-500" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
                          <path d="m6.5 10.2 2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {p.pricing.map((line) => (
                      <div
                        key={line.label}
                        className="gold-ring rounded-2xl bg-white/85 px-5 py-4 shadow-sm backdrop-blur"
                      >
                        <p className="text-[0.7rem] font-bold uppercase tracking-wider text-navy-800/60">
                          {line.label}
                        </p>
                        <p className="font-display mt-1 text-2xl font-extrabold text-navy-900">
                          {line.price}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-navy-800/55">{line.note}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => requestQuoteFor(p.name)}
                    className="btn-gold mt-8 text-sm"
                  >
                    Réserver le {p.name}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
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
