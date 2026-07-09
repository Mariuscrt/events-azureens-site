"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  /** Classes du conteneur — doit définir le ratio ou la hauteur (ex: aspect-[4/3]) */
  className?: string;
  /** Amplitude du parallaxe en % de la hauteur (0 = désactivé) */
  strength?: number;
  /** Micro-zoom au survol (nécessite `group` sur un parent) */
  hoverZoom?: boolean;
  /** Zoom lent perpétuel type Ken Burns */
  kenBurns?: boolean;
  priority?: boolean;
};

/**
 * Image immersive : léger parallaxe au scroll, micro-zoom au survol,
 * option Ken Burns. L'image est surdimensionnée verticalement pour que
 * le déplacement ne révèle jamais les bords.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  strength = 7,
  hoverZoom = true,
  kenBurns = false,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const amplitude = reduced ? 0 : strength;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amplitude}%`, `${amplitude}%`]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -inset-y-[10%]"
        animate={
          kenBurns && !reduced
            ? { scale: [1, 1.08, 1] }
            : undefined
        }
        transition={
          kenBurns && !reduced
            ? { duration: 22, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${
            hoverZoom
              ? "transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
