"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const PROMISES = [
  {
    title: "Livraison & installation",
    text: "Livraison, installation et récupération incluses selon les formules.",
    icon: (
      <path d="M3 17V7a1 1 0 0 1 1-1h9v11M13 9h4l3 3v5h-2M3 17h2m4 0h6m-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Clé en main",
    text: "Des animations prêtes à l'emploi : vous profitez, on gère tout.",
    icon: (
      <path d="M14 7a4 4 0 1 1-3.3 6.26L4 20l-1-1m4-2 2 2m3-13.5L14.5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Matériel professionnel",
    text: "Spin Cam, bornes et jeux de qualité professionnelle, entretenus avec soin.",
    icon: (
      <path d="M12 3.5 14 8l4.8.5-3.6 3.2 1 4.8L12 14l-4.2 2.5 1-4.8L5.2 8.5 10 8l2-4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Fun & mémorable",
    text: "Des expériences qui rassemblent les invités et créent de vrais souvenirs.",
    icon: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3.5-10.5h.01m6.99 0h.01M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    title: "Particuliers & pros",
    text: "Du mariage intime au séminaire d'entreprise, chaque format est le bienvenu.",
    icon: (
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19m16 0v-1.5a3.5 3.5 0 0 0-2.5-3.35M14.5 4.15a3.5 3.5 0 0 1 0 6.7M13 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 sm:py-20" aria-label="Nos engagements">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full rounded-2xl border border-white bg-white/80 p-5 shadow-[var(--shadow-card)] backdrop-blur transition-colors hover:border-gold-400/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 text-gold-300 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                    {p.icon}
                  </svg>
                </span>
                <h3 className="font-display mt-4 text-[0.95rem] font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-800/65">
                  {p.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
