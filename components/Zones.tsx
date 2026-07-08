"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const ZONES = [
  {
    name: "Alpes-Maritimes",
    code: "06",
    text: "Nice, Cannes, Antibes, Grasse, Menton et tout le département.",
    note: "Livraison incluse sur de nombreuses formules",
  },
  {
    name: "Var",
    code: "83",
    text: "Toulon, Saint-Tropez, Fréjus, Saint-Raphaël et alentours.",
    note: "Frais de livraison sur devis",
  },
  {
    name: "Monaco",
    code: "MC",
    text: "Principauté de Monaco et Monte-Carlo.",
    note: "Livraison incluse sur de nombreuses formules",
  },
];

// positions décoratives des épingles sur le "radar"
const PINS = [
  { left: "62%", top: "38%", delay: 0 },
  { left: "28%", top: "58%", delay: 0.6 },
  { left: "78%", top: "52%", delay: 1.2 },
];

export default function Zones() {
  return (
    <section id="zones" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Zones d'intervention"
          title={
            <>
              Toute la <span className="font-accent italic text-gradient-gold">Côte d&apos;Azur</span>,
              de Saint-Tropez à Menton
            </>
          }
          subtitle="Events Azuréen se déplace dans les Alpes-Maritimes, le Var et à Monaco pour livrer et installer vos animations."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Radar décoratif */}
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full border border-navy-700/15 bg-gradient-to-br from-azur-100 to-white shadow-inner" aria-hidden />
              <div className="absolute inset-[14%] rounded-full border border-navy-700/12" aria-hidden />
              <div className="absolute inset-[28%] rounded-full border border-navy-700/10" aria-hidden />
              <div className="absolute inset-[42%] rounded-full border border-gold-400/40 bg-gold-100/40" aria-hidden />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgb(212 168 56 / 0.22), transparent 22%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
              <p className="font-display absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-950 px-5 py-2.5 text-center text-xs font-extrabold uppercase tracking-widest text-gold-200 shadow-lg">
                Côte d&apos;Azur
              </p>
              {PINS.map((pin, i) => (
                <span
                  key={i}
                  className="absolute z-10"
                  style={{ left: pin.left, top: pin.top }}
                  aria-hidden
                >
                  <motion.span
                    className="absolute -inset-2 rounded-full bg-gold-400/40"
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: pin.delay }}
                  />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative text-navy-800 drop-shadow">
                    <path
                      d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
                      fill="currentColor"
                    />
                    <circle cx="12" cy="10" r="2.6" fill="#e3c05c" />
                  </svg>
                </span>
              ))}
            </div>
          </Reveal>

          {/* Cartes zones */}
          <div className="space-y-5">
            {ZONES.map((z, i) => (
              <Reveal key={z.code} delay={i * 0.1}>
                <motion.article
                  whileHover={{ x: 6 }}
                  className="card-premium flex items-center gap-5 p-6"
                >
                  <span className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-xl font-extrabold text-gold-300 shadow-md">
                    {z.code}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{z.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-800/70">{z.text}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold text-gold-600">
                      <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="m6.5 10.2 2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {z.note}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
