"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";
import { requestQuoteFor } from "@/lib/selectAnimation";

export default function Pricing() {
  const priced = PRODUCTS.filter((p) => p.id !== "animations-personnalisees");

  return (
    <section id="tarifs" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-azur-100/80 via-azur-50 to-azur-50" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tarifs"
          title={<>Combien ça coûte&nbsp;?</>}
          subtitle="Des tarifs lisibles, adaptés à votre format d'événement : journée, soirée, week-end ou forfait horaire."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {priced.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <article
                className={`card-premium relative flex h-full flex-col p-7 ${
                  p.badge === "Best-seller" ? "!border-gold-400/60" : ""
                }`}
              >
                {p.badge === "Best-seller" ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-navy-950 shadow">
                    Best-seller
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-bold text-navy-900">{p.name}</h3>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  {p.tagline}
                </p>

                <div className="mt-5 space-y-4">
                  {p.pricing.map((line) => (
                    <div
                      key={line.label}
                      className="rounded-2xl border border-navy-900/8 bg-azur-50/80 px-5 py-4"
                    >
                      <p className="text-[0.72rem] font-bold uppercase tracking-wide text-navy-800/60">
                        {line.label}
                      </p>
                      <p className="font-display mt-1 text-[1.65rem] font-extrabold leading-none text-navy-900">
                        {line.price}
                      </p>
                      <p className="mt-1.5 text-xs font-semibold text-navy-800/55">{line.note}</p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => requestQuoteFor(p.name)}
                  className="btn-secondary mt-auto w-full !py-3 text-sm"
                  style={{ marginTop: "auto" }}
                >
                  Demander un devis
                </button>
              </article>
            </Reveal>
          ))}

          {/* Carte sur mesure */}
          <Reveal delay={0.24} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 shadow-[var(--shadow-card)]">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-2xl" aria-hidden />
              <h3 className="font-display text-xl font-bold text-white">Animations personnalisées</h3>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
                Sur mesure, selon vos envies
              </p>
              <p className="font-display mt-6 text-[1.65rem] font-extrabold text-white">Sur devis</p>
              <p className="mt-3 text-sm leading-relaxed text-azur-100/75">
                Un thème particulier, plusieurs animations combinées, un format inédit :
                décrivez votre projet, nous composons l&apos;offre idéale.
              </p>
              <button
                type="button"
                onClick={() => requestQuoteFor("Animation personnalisée")}
                className="btn-gold mt-auto w-full !py-3 text-sm"
              >
                Décrire mon projet
              </button>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-2xl rounded-2xl border border-gold-400/30 bg-white/70 px-6 py-4 text-center text-sm font-semibold text-navy-800/70 backdrop-blur">
            Les frais de livraison peuvent varier selon la zone et la prestation.
            Un devis précis est envoyé avant validation, selon la date, le lieu et
            les animations choisies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
