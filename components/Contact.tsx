"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ANIMATION_OPTIONS, CONTACT, EVENT_OPTIONS } from "@/lib/data";
import { SELECT_ANIMATION_EVENT } from "@/lib/selectAnimation";

const initialForm = {
  nom: "",
  telephone: "",
  email: "",
  date: "",
  lieu: "",
  typeEvenement: "",
  animation: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const wanted = (e as CustomEvent<string>).detail;
      const match =
        ANIMATION_OPTIONS.find((o) => wanted.toLowerCase().includes(o.toLowerCase())) ??
        ANIMATION_OPTIONS.find((o) => o.toLowerCase().includes(wanted.toLowerCase()));
      setForm((f) => ({ ...f, animation: match ?? "Animation personnalisée" }));
    };
    window.addEventListener(SELECT_ANIMATION_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_ANIMATION_EVENT, onSelect);
  }, []);

  const set = (key: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Demande de devis — ${form.animation || "animation"}${
      form.date ? ` (${form.date})` : ""
    }`;
    const body = [
      `Bonjour Events Azuréen,`,
      ``,
      `Je souhaite un devis pour une animation.`,
      ``,
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      `Email : ${form.email}`,
      `Date de l'événement : ${form.date}`,
      `Lieu : ${form.lieu}`,
      `Type d'événement : ${form.typeEvenement}`,
      `Animation souhaitée : ${form.animation}`,
      ``,
      `Message :`,
      form.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-azur-50 via-azur-100 to-azur-200/70" />
        <div className="absolute -left-24 top-32 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-azur-300/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact & devis"
          title={<>Parlez-nous de votre événement</>}
          subtitle="Devis gratuit et réponse rapide, par téléphone, WhatsApp ou email."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Coordonnées directes */}
          <Reveal>
            <div className="space-y-5">
              <div className="card-premium flex items-center gap-5 p-6">
                <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-gold-400/60 ring-offset-2 ring-offset-white">
                  <Image
                    src="/assets/events-azureen/benjamin-lamothe.jpg"
                    alt="Benjamin Lamothe, fondateur d'Events Azuréen"
                    fill
                    sizes="5rem"
                    className="object-cover"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Benjamin Lamothe
                  </h3>
                  <p className="text-sm font-semibold text-gold-600">
                    Fondateur d&apos;Events Azuréen
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-800/70">
                    « Passionné par l&apos;événementiel, j&apos;ai créé Events Azuréen avec une
                    idée simple : des animations originales qui rendent chaque événement
                    unique. »
                  </p>
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <a
                  href={`tel:${CONTACT.phoneIntl}`}
                  className="card-premium group flex items-center gap-3.5 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-950 text-gold-300 transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-navy-800/55">Téléphone</span>
                    <span className="font-display text-sm font-bold text-navy-900">{CONTACT.phoneDisplay}</span>
                  </span>
                </a>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium group flex items-center gap-3.5 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.4-.5c.1-.1.1-.3.2-.4v-.4L9.7 7.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.4Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-navy-800/55">WhatsApp</span>
                    <span className="font-display text-sm font-bold text-navy-900">Réponse rapide</span>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="card-premium group flex items-center gap-3.5 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950 transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wide text-navy-800/55">Email</span>
                    <span className="font-display block truncate text-sm font-bold text-navy-900">{CONTACT.email}</span>
                  </span>
                </a>

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium group flex items-center gap-3.5 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition-transform group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-navy-800/55">Instagram</span>
                    <span className="font-display text-sm font-bold text-navy-900">{CONTACT.instagramHandle}</span>
                  </span>
                </a>
              </div>

              <p className="rounded-2xl border border-navy-900/8 bg-white/70 px-5 py-4 text-sm leading-relaxed text-navy-800/70 backdrop-blur">
                <span className="font-bold text-navy-900">Zones desservies :</span>{" "}
                {CONTACT.zones.join(" · ")}. Déplacement sur toute la Côte d&apos;Azur.
              </p>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="card-premium space-y-5 p-7 sm:p-9"
              aria-label="Formulaire de demande de devis"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Nom *</span>
                  <input required value={form.nom} onChange={set("nom")} className="field" placeholder="Votre nom" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Téléphone *</span>
                  <input required type="tel" value={form.telephone} onChange={set("telephone")} className="field" placeholder="06 12 34 56 78" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Email *</span>
                  <input required type="email" value={form.email} onChange={set("email")} className="field" placeholder="vous@exemple.fr" autoComplete="email" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Date de l&apos;événement</span>
                  <input type="date" value={form.date} onChange={set("date")} className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Lieu</span>
                  <input value={form.lieu} onChange={set("lieu")} className="field" placeholder="Ville / salle (06, 83, Monaco)" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Type d&apos;événement</span>
                  <select value={form.typeEvenement} onChange={set("typeEvenement")} className="field">
                    <option value="">Sélectionner…</option>
                    {EVENT_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Animation souhaitée</span>
                <select value={form.animation} onChange={set("animation")} className="field" id="animation-select">
                  <option value="">Sélectionner…</option>
                  {ANIMATION_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy-800/70">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  className="field resize-none"
                  placeholder="Parlez-nous de votre événement : nombre d'invités, horaires, ambiance souhaitée…"
                />
              </label>

              <button type="submit" className="btn-primary w-full text-base">
                Envoyer ma demande de devis
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="m2.5 10 15-6.5-4 13-3.5-4.5L5.5 14l-3-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="text-center text-xs font-semibold text-navy-800/50">
                L&apos;envoi ouvre votre messagerie avec le récapitulatif pré-rempli — aucune
                donnée n&apos;est stockée sur ce site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
