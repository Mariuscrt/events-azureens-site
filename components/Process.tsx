"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="fonctionnement" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fonctionnement"
          title={
            <>
              Réserver, c&apos;est{" "}
              <span className="font-accent italic text-gradient-gold">simple comme bonjour</span>
            </>
          }
          subtitle="Quatre étapes seulement entre votre idée et un événement inoubliable."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Ligne de connexion */}
          <div
            className="absolute left-1/2 top-7 hidden h-0.5 w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent md:block"
            aria-hidden
          />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative">
              <li className="flex flex-col items-center text-center">
                <span className="font-display relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-xl font-extrabold text-gold-300 shadow-lg ring-4 ring-azur-50">
                  {i + 1}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-navy-800/65">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
