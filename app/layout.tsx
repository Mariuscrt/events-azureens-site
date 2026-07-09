import type { Metadata } from "next";
import { Manrope, Playfair_Display, Sora } from "next/font/google";
import { CONTACT } from "@/lib/data";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://events-azureen.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Events Azuréen | Location d'animations événementielles Côte d'Azur",
  description:
    "Location de Photo Booth, Videobooth 360, borne arcade, baby-foot, flipper et animations personnalisées pour événements dans les Alpes-Maritimes, le Var et Monaco.",
  keywords: [
    "location animation événementielle",
    "videobooth 360",
    "photo booth",
    "borne arcade",
    "baby-foot",
    "flipper",
    "mariage Côte d'Azur",
    "Alpes-Maritimes",
    "Var",
    "Monaco",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Events Azuréen",
    title: "Events Azuréen | Location d'animations événementielles Côte d'Azur",
    description:
      "Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper et animations personnalisées. Livraison dans les Alpes-Maritimes, le Var et Monaco.",
    images: [
      {
        url: "/assets/events-azureen/premium/ambiance-reception.jpg",
        width: 1122,
        height: 631,
        alt: "Réception de mariage élégante avec le Videobooth 360 d'Events Azuréen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Azuréen | Location d'animations événementielles Côte d'Azur",
    description:
      "Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper et animations personnalisées sur la Côte d'Azur.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: CONTACT.name,
  description:
    "Location d'animations événementielles : Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper et animations personnalisées pour mariages, anniversaires, soirées privées et événements d'entreprise.",
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phoneIntl,
  founder: { "@type": "Person", name: CONTACT.founder },
  sameAs: [CONTACT.instagram],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Alpes-Maritimes (06)" },
    { "@type": "AdministrativeArea", name: "Var (83)" },
    { "@type": "Country", name: "Monaco" },
  ],
  makesOffer: [
    { "@type": "Offer", name: "Location Videobooth 360 / Spin Cam 360" },
    { "@type": "Offer", name: "Location Photo Booth" },
    { "@type": "Offer", name: "Location Borne Arcade" },
    { "@type": "Offer", name: "Location Baby-foot" },
    { "@type": "Offer", name: "Location Flipper" },
    { "@type": "Offer", name: "Animations événementielles personnalisées" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${sora.variable} ${manrope.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
