@import "tailwindcss";

@theme {
  /* ——— Palette Events Azuréen ——— */
  --color-azur-50: #f4f8fd;
  --color-azur-100: #e9f1fb;
  --color-azur-200: #d6e5f8;
  --color-azur-300: #b3cff2;
  --color-azur-400: #7eaee8;
  --color-azur-500: #4f8bd9;

  --color-navy-500: #2457b8;
  --color-navy-600: #1d4a9f;
  --color-navy-700: #163a82;
  --color-navy-800: #122e68;
  --color-navy-900: #0b1f4b;
  --color-navy-950: #071433;

  --color-gold-100: #faf3d7;
  --color-gold-200: #f5e7ae;
  --color-gold-300: #eed685;
  --color-gold-400: #e3c05c;
  --color-gold-500: #d4a838;
  --color-gold-600: #b8892a;

  --font-display: var(--font-sora), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;
  --font-accent: var(--font-playfair), ui-serif, Georgia, serif;

  --shadow-card: 0 1px 2px rgb(11 31 75 / 0.04), 0 12px 32px -12px rgb(11 31 75 / 0.18);
  --shadow-card-hover: 0 2px 4px rgb(11 31 75 / 0.06), 0 24px 48px -16px rgb(11 31 75 / 0.28);
  --shadow-gold: 0 8px 32px -8px rgb(212 168 56 / 0.45);

  --animate-float-slow: float 7s ease-in-out infinite;
  --animate-float-slower: float 9s ease-in-out infinite 1.2s;
  --animate-marquee: marquee 32s linear infinite;
  --animate-shimmer: shimmer 2.6s linear infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes shimmer {
    from { background-position: 200% center; }
    to { background-position: -200% center; }
  }
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-azur-50);
  color: var(--color-navy-900);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

::selection {
  background-color: var(--color-gold-200);
  color: var(--color-navy-900);
}

/* ——— Utilitaires premium ——— */
@utility font-display {
  font-family: var(--font-display);
}
@utility font-accent {
  font-family: var(--font-accent);
}

@utility text-gradient-gold {
  background: linear-gradient(100deg, #b8892a 0%, #e3c05c 35%, #f5e7ae 55%, #d4a838 75%, #b8892a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility text-gradient-navy {
  background: linear-gradient(115deg, var(--color-navy-900) 20%, var(--color-navy-500) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility bg-dots {
  background-image: radial-gradient(rgb(18 46 104 / 0.10) 1px, transparent 1px);
  background-size: 22px 22px;
}

@utility gold-ring {
  box-shadow: inset 0 0 0 1px rgb(212 168 56 / 0.35);
}

/* Ligne dorée décorative sous les titres */
.gold-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold-400) 30%, var(--color-gold-400) 70%, transparent);
}

/* Boutons */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--color-navy-700), var(--color-navy-900));
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 1.9rem;
  box-shadow: 0 10px 30px -10px rgb(11 31 75 / 0.55);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}
.btn-primary::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 30%, rgb(245 231 174 / 0.35) 50%, transparent 70%);
  background-size: 200% 100%;
  animation: shimmer 3.2s linear infinite;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px -12px rgb(11 31 75 / 0.65), 0 0 0 1px rgb(212 168 56 / 0.5);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.75);
  backdrop-filter: blur(8px);
  color: var(--color-navy-800);
  font-weight: 700;
  padding: 0.9rem 1.9rem;
  border: 1px solid rgb(18 46 104 / 0.14);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: rgb(212 168 56 / 0.6);
  box-shadow: var(--shadow-gold);
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--color-gold-300), var(--color-gold-500));
  color: var(--color-navy-950);
  font-weight: 800;
  padding: 0.9rem 1.9rem;
  box-shadow: var(--shadow-gold);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}
.btn-gold:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
  box-shadow: 0 14px 44px -10px rgb(212 168 56 / 0.6);
}

/* Carte premium */
.card-premium {
  background: rgb(255 255 255 / 0.9);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgb(255 255 255 / 0.9);
  box-shadow: var(--shadow-card);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}
.card-premium:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgb(212 168 56 / 0.45);
}

/* Champ de formulaire */
.field {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid rgb(18 46 104 / 0.14);
  background: #fff;
  padding: 0.8rem 1rem;
  font-size: 0.95rem;
  color: var(--color-navy-900);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field::placeholder {
  color: rgb(18 46 104 / 0.38);
}
.field:focus {
  border-color: var(--color-gold-500);
  box-shadow: 0 0 0 4px rgb(212 168 56 / 0.15);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .btn-primary::after {
    animation: none;
  }
}
