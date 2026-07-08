"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

export default function Products() {
  return (
    <section id="animations" className="relative scroll-mt-24 py-20 sm:py-28">
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

        <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1} className="h-full">
              <article className="card-premium group flex h-full flex-col overflow-hidden">
                <div className="relative m-2.5 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 26rem"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" aria-hidden />
                  {p.badge ? (
                    <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-navy-950 shadow">
                      {p.badge}
                    </span>
                  ) : null}
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-extrabold text-navy-900 shadow backdrop-blur">
                    {p.fromPrice === "Sur devis" ? "Sur devis" : `À partir de ${p.fromPrice}`}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                  <h3 className="font-display text-xl font-bold text-navy-900">{p.name}</h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-800/70">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {p.services.slice(0, 3).map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[0.83rem] leading-snug text-navy-800/80">
                        <svg className="mt-0.5 shrink-0 text-gold-500" width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
                          <path d="m6.5 10.2 2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => requestQuoteFor(p.name)}
                      className="btn-primary w-full !py-3 text-sm"
                    >
                      Demander ce produit
                    </motion.button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
