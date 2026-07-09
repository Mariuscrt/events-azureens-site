"use client";

import { motion } from "framer-motion";
import ParallaxImage from "@/components/ParallaxImage";

/**
 * Bande de marque immersive pleine largeur : une grande image d'ambiance en
 * parallaxe, un voile navy et une déclaration de marque. Conçue pour accueillir
 * le visuel `ambiance-gala.jpg` (ou `ambiance-rooftop.jpg`) de la nouvelle
 * bibliothèque visuelle — voir IMAGE_PROMPTS.md.
 */
export default function BrandBand() {
  return (
    <section aria-label="Events Azuréen, la marque" className="relative">
      <div className="relative h-[26rem] overflow-hidden sm:h-[32rem]">
        <ParallaxImage
          src="/assets/events-azureen/premium/ambiance-reception.jpg"
          alt="Réception de mariage haut de gamme, mariés sur le Videobooth 360 sous les lustres"
          strength={12}
          hoverZoom={false}
          sizes="100vw"
          className="h-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/70"
          aria-hidden
        />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold-300">
              Events Azuréen
            </p>
            <p className="font-display mt-5 text-2xl font-bold leading-snug text-white sm:text-4xl">
              Chaque événement mérite un moment que vos invités{" "}
              <span className="font-accent italic text-gradient-gold">
                n&apos;oublieront jamais
              </span>
            </p>
            <div className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-azur-100/80 sm:gap-x-6">
              <span>Élégance</span>
              <span className="text-gold-400" aria-hidden>✦</span>
              <span>Convivialité</span>
              <span className="text-gold-400" aria-hidden>✦</span>
              <span>Côte d&apos;Azur</span>
            </div>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
