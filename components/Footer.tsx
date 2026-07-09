import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-azur-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" aria-hidden />
      <div className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-[100%] bg-navy-700/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-extrabold">
                E<span className="text-gradient-gold">A</span>
              </span>
              Events <span className="text-gradient-gold">Azuréen</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-azur-100/65">
              Location d&apos;animations événementielles premium : Videobooth 360, Photo
              Booth, borne arcade, baby-foot, flipper et animations sur mesure.
            </p>
            <p className="mt-3 text-sm font-semibold text-gold-300">
              Alpes-Maritimes · Var · Monaco
            </p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneIntl}`} className="transition-colors hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram — {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-300">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {[
                ["#animations", "Animations"],
                ["#galerie", "Galerie"],
                ["#fonctionnement", "Fonctionnement"],
                ["#tarifs", "Tarifs"],
                ["#zones", "Zones"],
                ["#contact", "Devis"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-azur-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {CONTACT.name} — {CONTACT.founder}. Tous droits
            réservés.
          </p>
          <p>Site vitrine — location d&apos;animations événementielles sur la Côte d&apos;Azur.</p>
        </div>
      </div>
    </footer>
  );
}
