"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
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
    <section id="details" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
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

        <div className="mt-20 space-y-24 lg:space-y-32">
          {featured.map((p, i) => {
            const reversed = i % 2 === 1;
            const index = String(i + 1).padStart(2, "0");
            return (
              <div
                key={p.id}
                id={`detail-${p.id}`}
                className={`grid scroll-mt-28 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visuel immersif */}
                <Reveal y={48}>
                  <div className="group relative">
                    <div
                      className={`absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90 ${
                        reversed ? "from-gold-200/50 to-azur-300/40" : "from-azur-300/40 to-gold-200/50"
                      }`}
                      aria-hidden
                    />
                    {p.id === "photo-booth" ? (
                      <div className="relative grid grid-cols-2 gap-4">
                        {PHOTOBOOTH_MODELS.map((m, j) => (
                          <motion.figure
                            key={m.label}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="group/model relative overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[var(--shadow-card)]"
                          >
                            <ParallaxImage
                              src={m.src}
                              alt={m.alt}
                              strength={3 + j}
                              sizes="(max-width: 1024px) 45vw, 18rem"
                              className="aspect-[4/5]"
                              hoverZoom={false}
                            />
                            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-navy-900 shadow-sm backdrop-blur">
                              {m.label}
                            </figcaption>
                          </motion.figure>
                        ))}
                      </div>
                    ) : (
                      <figure className="relative overflow-hidden rounded-[2rem] border border-white shadow-[var(--shadow-card-hover)]">
                        <ParallaxImage
                          src={p.image}
                          alt={p.imageAlt}
                          strength={8}
                          sizes="(max-width: 1024px) 92vw, 38rem"
                          className="aspect-[4/3] lg:aspect-[5/4]"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent"
                          aria-hidden
                        />
                      </figure>
                    )}

                    {/* Carte détail flottante — Videobooth uniquement */}
                    {p.id === "videobooth-360" ? (
                      <motion.figure
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute -bottom-8 -right-3 hidden w-44 animate-float-slow overflow-hidden rounded-2xl border-4 border-white shadow-[var(--shadow-card-hover)] sm:block lg:-right-8"
                      >
                        <div className="relative aspect-square">
                          <Image
                            src="/assets/events-azureen/videobooth-360-detail.jpg"
                            alt="Détail du plateau tournant de la Spin Cam 360, tapis rouge et cordons dorés"
                            fill
                            sizes="11rem"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="bg-white px-3 py-2 text-[0.64rem] font-extrabold uppercase tracking-[0.12em] text-navy-800/70">
                          Plateau pro · 3 à 4 invités
                        </figcaption>
                      </motion.figure>
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
                  <p className="font-accent mt-4 text-lg italic leading-relaxed text-navy-700">
                    « {p.pitch} »
                  </p>

                  <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
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

                  <div className="mt-8 flex flex-wrap gap-4">
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
                    className="btn-gold group/cta mt-9 text-sm"
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
