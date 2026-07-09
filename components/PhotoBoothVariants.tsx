"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PHOTOBOOTH_VARIANTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

export default function PhotoBoothVariants() {
  return (
    <section id="photobooth" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-azur-50 via-white to-azur-50" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Photo Booth — 4 styles"
          title={<>Choisissez le style de Photo Booth qui correspond à votre événement</>}
          subtitle="Quatre modèles, quatre ambiances — chacun avec son style, ses points forts et les événements où il fait merveille."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {PHOTOBOOTH_VARIANTS.map((v, i) => (
            <Reveal key={v.id} delay={(i % 4) * 0.09} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[var(--shadow-card)] transition-shadow duration-500 hover:shadow-[var(--shadow-card-hover)]"
              >
                {/* Visuel : studio → lifestyle au survol */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={v.images.main.src}
                    alt={v.images.main.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 20rem"
                    className="object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
                  />
                  {v.images.lifestyle ? (
                    <Image
                      src={v.images.lifestyle.src}
                      alt={v.images.lifestyle.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 20rem"
                      className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                    />
                  ) : null}
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-navy-950/80 px-3.5 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {v.name}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-gold-600">
                    {v.style}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{v.description}</p>

                  <p className="mt-4 flex items-start gap-2 text-[0.8rem] font-semibold leading-snug text-navy-900">
                    <svg className="mt-0.5 shrink-0 text-gold-500" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 3.5 14 8l4.8.5-3.6 3.2 1 4.8L12 14l-4.2 2.5 1-4.8L5.2 8.5 10 8l2-4.5Z" />
                    </svg>
                    {v.strong}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {v.bestFor.map((b) => (
                      <li
                        key={b}
                        className="rounded-full bg-azur-100 px-2.5 py-1 text-[0.68rem] font-bold text-navy-800/75"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => requestQuoteFor(`Photo Booth — ${v.name}`)}
                      className="btn-secondary w-full !py-2.5 text-[0.82rem]"
                    >
                      Demander ce modèle
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-2xl text-center text-sm font-semibold text-navy-800/60">
            Mêmes formules pour les 4 modèles : forfait classique 3h dès 390 €, forfait
            premium avec hôtesse dès 490 € — livraison incluse (06 / Monaco).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
