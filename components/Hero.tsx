"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MARQUEE_ITEMS = [
  "Mariages",
  "Anniversaires",
  "Soirées privées",
  "Entreprises & séminaires",
  "Baptêmes & communions",
  "Festivals",
  "Alpes-Maritimes",
  "Var",
  "Monaco",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-[4.5rem]">
      {/* Fond : dégradés azur + halos or */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-azur-100 via-azur-50 to-azur-50" />
        <div className="bg-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
        <motion.div
          className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gold-200/50 blur-3xl"
          animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-azur-300/50 blur-3xl"
          animate={reduced ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.5, 0.65, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[60rem] -translate-x-1/2 rounded-[100%] bg-navy-700/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-20">
        {/* Colonne texte */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/50 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-navy-800 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            Alpes-Maritimes · Var · Monaco
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl xl:text-6xl"
          >
            Donnez <span className="font-accent italic text-gradient-gold">vie</span> à vos
            événements avec{" "}
            <span className="whitespace-nowrap">
              Events <span className="text-gradient-gold">Azuréen</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-800/75"
          >
            Location d&apos;animations premium pour mariages, anniversaires, soirées
            privées, entreprises et événements sur la Côte d&apos;Azur — livraison,
            installation et bonne humeur comprises.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary text-base">
              Demander un devis
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#animations" className="btn-secondary text-base">
              Voir les animations
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-navy-900/10 pt-7"
          >
            {[
              ["6", "animations premium"],
              ["3", "zones d'intervention"],
              ["Clé en main", "livraison & installation"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">
                  {value}
                </dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                  {label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Colonne visuelle : cartes flottantes */}
        <div className="relative mx-auto h-[30rem] w-full max-w-[30rem] sm:h-[34rem] lg:h-[36rem]">
          <motion.div
            style={{ y: parallaxSlow }}
            initial={{ opacity: 0, y: 60, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-6 w-[62%] animate-float-slow"
          >
            <figure className="card-premium overflow-hidden !rounded-3xl p-2.5 pb-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/videobooth-360.jpg"
                  alt="Videobooth 360 professionnelle installée en terrasse sur la Côte d'Azur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 20rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pt-3 text-sm font-bold text-navy-900">
                Videobooth 360
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  L&apos;animation signature
                </span>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            style={{ y: parallaxFast }}
            initial={{ opacity: 0, y: 80, rotate: 7 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[30%] z-10 w-[56%] animate-float-slower"
          >
            <figure className="card-premium overflow-hidden !rounded-3xl p-2.5 pb-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/photobooth-miroir.jpg"
                  alt="Photo Booth miroir lumineux lors d'une garden party"
                  fill
                  priority
                  sizes="(max-width: 1024px) 55vw, 18rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pt-3 text-sm font-bold text-navy-900">
                Photo Booth miroir
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  Souvenirs instantanés
                </span>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            style={{ y: parallaxSlow }}
            initial={{ opacity: 0, y: 90, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-[48%]"
          >
            <figure className="card-premium overflow-hidden !rounded-3xl p-2.5 pb-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/ambiance-gala.jpg"
                  alt="Réception élégante aux lumières bleu azur avec fleurs blanches"
                  fill
                  sizes="(max-width: 1024px) 50vw, 16rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pt-3 text-sm font-bold text-navy-900">
                Ambiance Côte d&apos;Azur
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  Bleu azur &amp; touches dorées
                </span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Pastille partage instantané */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute right-[4%] top-[8%] rounded-2xl border border-gold-400/50 bg-white/90 px-4 py-3 shadow-lg backdrop-blur"
          >
            <p className="flex items-center gap-2 text-xs font-bold text-navy-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v9m0-9L6.5 6.5M10 3l3.5 3.5M4 13v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Partage instantané
              <span className="block font-semibold text-navy-800/55">QR code · AirDrop</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bandeau défilant */}
      <div className="relative border-y border-gold-400/25 bg-navy-950 py-4">
        <div
          className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none"
          aria-hidden
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.22em] text-azur-100/90">
              {t}
              <span className="text-gold-400">✦</span>
            </span>
          ))}
        </div>
        <span className="sr-only">
          Mariages, anniversaires, soirées privées, entreprises et séminaires, baptêmes et
          communions, festivals — Alpes-Maritimes, Var, Monaco
        </span>
      </div>
    </section>
  );
}
