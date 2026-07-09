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
          title={<>Quelles animations pouvez-vous louer&nbsp;?</>}
          subtitle="Des animations simples à réserver, faciles à installer et immédiatement appréciées par vos invités."
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
                    src={p.images.main.src}
                    alt={p.images.main.alt}
                    strength={4}
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 26rem"
                    className="aspect-[16/12]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent"
                    aria-hidden
                  />
                  {p.badge ? (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-navy-900 shadow-sm backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                      {p.badge}
                    </span>
                  ) : null}
                </div>

                {/* Contenu scannable */}
                <div className="flex flex-1 flex-col px-8 pb-8 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[1.3rem] font-bold tracking-tight text-navy-900">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-navy-800/70">{p.pitch}</p>
                    </div>
                    <p className="shrink-0 rounded-xl bg-azur-100 px-3 py-2 text-right">
                      <span className="block text-[0.6rem] font-extrabold uppercase tracking-wide text-navy-800/55">
                        {p.fromPrice === "Sur devis" ? "Tarif" : "Dès"}
                      </span>
                      <span className="font-display text-lg font-extrabold leading-none text-navy-900">
                        {p.fromPrice === "Sur devis" ? "Devis" : p.fromPrice}
                      </span>
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-navy-900/6 pt-5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.85rem] leading-snug text-navy-800/75">
                        <svg
                          className="mt-0.5 shrink-0 text-gold-500"
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden
                        >
                          <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
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
                        <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
