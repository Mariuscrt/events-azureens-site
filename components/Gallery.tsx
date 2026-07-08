"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galerie" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-azur-50 to-azur-100" />
        <div className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-azur-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title={
            <>
              L&apos;ambiance <span className="font-accent italic text-gradient-gold">Events Azuréen</span>,
              en images
            </>
          }
          subtitle="Un aperçu de nos animations en situation réelle, du bord de mer aux salles de réception azuréennes."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.src + g.caption}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: g.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className={`group relative rounded-2xl border border-white bg-white p-2.5 pb-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-3 sm:pb-5 ${
                i % 2 === 1 ? "lg:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 20rem"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-white/10 opacity-80 transition-opacity group-hover:opacity-40"
                  aria-hidden
                />
              </div>
              <figcaption className="font-accent mt-3 px-1 text-center text-[0.8rem] italic leading-snug text-navy-800/80 sm:text-sm">
                {g.caption}
              </figcaption>
              <span
                className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-gold-200/70 shadow-sm backdrop-blur-[1px]"
                aria-hidden
              />
            </motion.figure>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-semibold text-navy-800/60">
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
