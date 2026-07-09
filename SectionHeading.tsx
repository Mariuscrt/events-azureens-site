"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { EVENT_TYPES } from "@/lib/data";

export default function EventTypes() {
  return (
    <section id="evenements" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      {/* Bloc navy immersif */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" aria-hidden>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-azur-500/15 blur-3xl" />
        <div className="bg-dots absolute inset-0 opacity-[0.15]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
            Pour chaque occasion
          </p>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Un événement, une expérience <span className="text-gradient-gold">sur mesure</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-azur-100/75 sm:text-lg">
            Des grandes célébrations aux moments intimes, nos animations s&apos;adaptent à
            l&apos;esprit de votre événement.
          </p>
          <div className="gold-divider mx-auto mt-6 w-24" aria-hidden />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPES.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/10"
              >
                <span
                  className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300/90 to-gold-500/90 text-2xl shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ width: "3.25rem", height: "3.25rem" }}
                  aria-hidden
                >
                  {e.emoji}
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-white">{e.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-azur-100/70">{e.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#contact" className="btn-gold text-sm">
            Parlons de votre événement
          </a>
        </Reveal>
      </div>
    </section>
  );
}
