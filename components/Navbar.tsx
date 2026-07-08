"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#animations", label: "Animations" },
  { href: "#galerie", label: "Galerie" },
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#zones", label: "Zones" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-[0_8px_30px_-12px_rgb(11_31_75/0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#" className="group flex items-center gap-2.5" aria-label="Events Azuréen — retour en haut">
          <span className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 text-sm font-extrabold text-white shadow-lg">
            E<span className="text-gradient-gold">A</span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy-900">
            Events <span className="text-gradient-gold">Azuréen</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-navy-800/80 transition-colors hover:text-navy-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-gold !px-6 !py-2.5 text-sm">
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-900/10 bg-white/70 text-navy-900 backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-navy-900/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-azur-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full text-sm"
                >
                  Demander un devis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
