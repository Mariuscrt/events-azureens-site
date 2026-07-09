"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { PRODUCTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

export default function Products() {
  return (
    <section id="animations" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-[100%] bg-azur-200/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nos animations"
          title={
            <>
              Des animations <span className="font-accent italic text-gradient-gold">premium</span>,
              livrées clé en main
            </>
          }
          subtitle="Six expériences pensées pour faire vibrer vos invités, du cocktail élégant à la soirée endiablée."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
              >
                {/* Visuel plein cadre */}
                <div className="relative">
                  <ParallaxImage
                    src={p.image}
                    alt={p.imageAlt}
                    strength={4}
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 26rem"
                    className="aspect-[16/11]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
                    aria-hidden
                  />
                  {p.badge ? (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-navy-900 shadow-sm backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                      {p.badge}
                    </span>
                  ) : null}
                </div>

                {/* Contenu épuré */}
                <div className="flex flex-1 flex-col px-8 pb-8 pt-7">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-gold-600">
                    {p.tagline}
                  </p>
                  <h3 className="font-display mt-1.5 text-[1.35rem] font-bold tracking-tight text-navy-900">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-800/65">
                    {p.description}
                  </p>

                  <ul className="mt-5 divide-y divide-navy-900/6 border-y border-navy-900/6">
                    {p.services.slice(0, 3).map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 py-2.5 text-[0.82rem] leading-snug text-navy-800/70"
                      >
                        <svg
                          className="mt-0.5 shrink-0 text-gold-500"
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="m4.5 10.5 3.5 3.5 7.5-8"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-800/50">
                        {p.fromPrice === "Sur devis" ? "Tarif" : "À partir de"}
                      </p>
                      <p className="font-display text-[1.7rem] font-extrabold leading-none tracking-tight text-navy-900">
                        {p.fromPrice}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => requestQuoteFor(p.name)}
                      className="btn-primary group/btn w-full !py-3.5 text-sm"
                    >
                      Demander ce produit
                      <svg
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
