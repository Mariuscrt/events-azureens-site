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

const BADGES = [
  "Alpes-Maritimes",
  "Var",
  "Monaco",
  "Livraison & installation",
  "Devis rapide",
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
      {/* Fond : dégradés azur + halo discret */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-azur-100 via-azur-50 to-azur-50" />
        <div className="bg-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
        <motion.div
          className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gold-200/40 blur-3xl"
          animate={reduced ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-azur-300/50 blur-3xl"
          animate={reduced ? undefined : { scale: [1.08, 1, 1.08], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-32 lg:pt-20">
        {/* Colonne texte */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-navy-900/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-navy-800 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            Location d&apos;animations événementielles
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-navy-900 sm:text-5xl xl:text-[3.4rem]"
          >
            Des animations <span className="text-gradient-gold">premium</span> pour
            des événements qui marquent.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-800/75"
          >
            Videobooth 360, Photo Booth, borne arcade, baby-foot et flipper,
            livrés et installés sur la Côte d&apos;Azur.
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

          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-2.5">
            {BADGES.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-bold text-navy-800/80 backdrop-blur"
              >
                <svg className="text-gold-500" width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Colonne visuelle : composition produit */}
        <div className="relative mx-auto h-[30rem] w-full max-w-[30rem] sm:h-[34rem] lg:h-[37rem]">
          <motion.div
            style={{ y: parallaxSlow }}
            initial={{ opacity: 0, y: 60, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 w-[56%] animate-float-slow"
          >
            <figure className="card-premium relative overflow-hidden !rounded-3xl p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/premium/videobooth-lifestyle.jpg"
                  alt="Couple de mariés posant sur le Videobooth 360 pendant leur réception"
                  fill
                  priority
                  sizes="(max-width: 1024px) 55vw, 18rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 px-3 py-2 text-sm font-bold text-navy-900 shadow-sm backdrop-blur">
                Videobooth 360
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  L&apos;animation signature
                </span>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            style={{ y: parallaxFast }}
            initial={{ opacity: 0, y: 80, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[16%] z-10 w-[44%] animate-float-slower"
          >
            <figure className="card-premium relative overflow-hidden !rounded-3xl p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/premium/photobooth-classique-main.jpg"
                  alt="Photo Booth Classique blanc présenté sur fond studio clair"
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 15rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 px-3 py-2 text-sm font-bold text-navy-900 shadow-sm backdrop-blur">
                Photo Booth
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  4 styles au choix
                </span>
              </figcaption>
            </figure>
          </motion.div>

          <motion.div
            style={{ y: parallaxSlow }}
            initial={{ opacity: 0, y: 90, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-[4%] w-[48%]"
          >
            <figure className="card-premium relative overflow-hidden !rounded-3xl p-2.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/events-azureen/premium/babyfoot-lifestyle.jpg"
                  alt="Invités disputant une partie de baby-foot sur une terrasse au crépuscule"
                  fill
                  sizes="(max-width: 1024px) 50vw, 16rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 px-3 py-2 text-sm font-bold text-navy-900 shadow-sm backdrop-blur">
                Baby-foot &amp; jeux
                <span className="mt-0.5 block text-xs font-semibold text-navy-800/55">
                  Convivialité garantie
                </span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Pastille partage instantané */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute right-0 top-[74%] z-20 rounded-2xl border border-gold-400/40 bg-white/95 px-4 py-3 shadow-lg backdrop-blur"
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
