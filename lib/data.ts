export const CONTACT = {
  name: "Events Azuréen",
  founder: "Benjamin Lamothe",
  email: "eventsazureen@gmail.com",
  phone: "0783221383",
  phoneIntl: "+33783221383",
  phoneDisplay: "07 83 22 13 83",
  whatsapp: "https://wa.me/33783221383",
  instagram: "https://www.instagram.com/events_azureen/",
  instagramHandle: "@events_azureen",
  zones: ["Alpes-Maritimes (06)", "Var (83)", "Monaco"],
} as const;

export type PricingLine = {
  label: string;
  price: string;
  note: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pitch: string;
  image: string;
  imageAlt: string;
  services: string[];
  pricing: PricingLine[];
  fromPrice: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "videobooth-360",
    name: "Videobooth 360",
    tagline: "Spin Cam 360 professionnelle",
    description:
      "La star des événements : vos invités montent sur la plateforme, la caméra tourne, et repartent avec une vidéo 360 spectaculaire à partager instantanément.",
    pitch:
      "L'animation signature qui transforme chaque invité en vedette de votre soirée.",
    image: "/assets/events-azureen/videobooth-360.jpg",
    imageAlt:
      "Spin Cam 360 professionnelle installée en terrasse avec ring light et cordons dorés, face aux collines de la Côte d'Azur",
    services: [
      "Mise à disposition d'une Spin Cam 360 professionnelle",
      "Assistance aux invités : placement, animation, sécurité",
      "Création de vidéos 360 personnalisées",
      "Animateur dédié pendant toute la durée de l'événement",
      "Partage instantané des vidéos via QR code / AirDrop",
    ],
    pricing: [
      { label: "Forfait 3h", price: "420 €", note: "Location + animateur · Livraison 06 / Monaco incluse" },
      { label: "Forfait 5h", price: "600 €", note: "Location + animateur · Livraison 06 / Monaco incluse" },
    ],
    fromPrice: "420 €",
    badge: "Best-seller",
  },
  {
    id: "photo-booth",
    name: "Photo Booth",
    tagline: "Woody · Classique · Vintage · Miroir",
    description:
      "Un Photo Booth moderne et élégant, avec accessoires fun et impressions instantanées : le souvenir que vos invités emportent chez eux.",
    pitch:
      "Des souvenirs imprimés sur le moment, une file d'invités qui ne désemplit pas.",
    image: "/assets/events-azureen/photobooth-miroir.jpg",
    imageAlt:
      "Photo Booth miroir lumineux « Touch to Start » lors d'une garden party sous les guirlandes lumineuses",
    services: [
      "Mise à disposition d'un Photo Booth moderne et facile à utiliser",
      "Livraison et installation sur le lieu de l'événement",
      "Accessoires amusants pour des photos originales",
      "Animation possible",
      "Photos souvenirs instantanées pour les invités",
      "Récupération du matériel à la fin de l'événement",
    ],
    pricing: [
      { label: "Forfait classique — 3h autonome / 200 impressions", price: "à partir de 390 €", note: "Livraison 06 / Monaco incluse" },
      { label: "Forfait premium — 3h avec hôtesse / impressions illimitées", price: "à partir de 490 €", note: "Livraison 06 / Monaco incluse" },
    ],
    fromPrice: "390 €",
    badge: "4 modèles",
  },
  {
    id: "borne-arcade",
    name: "Borne Arcade",
    tagline: "Le rétrogaming qui rassemble",
    description:
      "Une borne arcade professionnelle avec des jeux accessibles à tous les âges, livrée et installée directement sur le lieu de votre événement.",
    pitch:
      "L'aimant à invités : petits et grands se retrouvent autour des classiques de l'arcade.",
    image: "/assets/events-azureen/borne-arcade.jpg",
    imageAlt: "Invités souriants jouant ensemble sur une borne arcade lors d'une soirée",
    services: [
      "Mise à disposition d'une borne arcade professionnelle",
      "Installation et mise en place sur le lieu de l'événement",
      "Livraison directement sur site",
      "Jeux faciles d'accès pour tous les âges",
      "Récupération du matériel à la fin de l'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "100 €", note: "Hors frais de livraison 06 / Monaco" },
      { label: "Forfait week-end", price: "180 €", note: "Hors frais de livraison 06 / Monaco" },
    ],
    fromPrice: "100 €",
  },
  {
    id: "baby-foot",
    name: "Baby-foot",
    tagline: "Convivialité garantie",
    description:
      "Un baby-foot de qualité professionnelle pour créer des défis, des rires et une ambiance dynamique à votre événement.",
    pitch:
      "Le grand classique qui déclenche des tournois improvisés à chaque événement.",
    image: "/assets/events-azureen/baby-foot.jpg",
    imageAlt: "Groupe d'amis riant autour d'un baby-foot lors d'un événement privé",
    services: [
      "Mise à disposition d'un baby-foot de qualité professionnelle",
      "Livraison et installation sur le lieu de l'événement",
      "Jeu convivial et accessible à tous les âges",
      "Idéal pour créer des défis et une ambiance dynamique",
      "Récupération du matériel à la fin de l'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "100 €", note: "Hors frais de livraison 06 / Monaco" },
      { label: "Forfait week-end", price: "180 €", note: "Hors frais de livraison 06 / Monaco" },
    ],
    fromPrice: "100 €",
  },
  {
    id: "flipper",
    name: "Flipper",
    tagline: "La touche rétro chic",
    description:
      "Un flipper professionnel, rétro et divertissant, pour apporter une touche originale et nostalgique à votre réception.",
    pitch:
      "L'icône vintage qui fait briller les yeux de toutes les générations.",
    image: "/assets/events-azureen/flipper.jpg",
    imageAlt: "Couple riant devant un flipper rétro aux couleurs éclatantes",
    services: [
      "Mise à disposition d'un flipper professionnel",
      "Livraison et installation sur le lieu de l'événement",
      "Jeu rétro et divertissant pour tous les âges",
      "Idéal pour apporter une touche originale et nostalgique",
      "Récupération du matériel à la fin de l'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "125 €", note: "Hors frais de livraison 06 / Monaco" },
      { label: "Forfait week-end", price: "230 €", note: "Hors frais de livraison 06 / Monaco" },
    ],
    fromPrice: "125 €",
  },
  {
    id: "animations-personnalisees",
    name: "Animations personnalisées",
    tagline: "Sur mesure, selon vos envies",
    description:
      "Un thème, une idée, un format particulier ? Nous concevons avec vous une animation sur mesure, adaptée à votre événement et à vos invités.",
    pitch:
      "Votre événement est unique : composons ensemble l'animation qui lui ressemble.",
    image: "/assets/events-azureen/ambiance-gala.jpg",
    imageAlt:
      "Salle de réception élégante aux lumières bleues avec compositions florales blanches et bleues",
    services: [
      "Étude personnalisée de votre projet",
      "Animation conçue selon votre thème et votre lieu",
      "Coordination avec votre planning d'événement",
      "Matériel professionnel et installation clé en main",
      "Accompagnement de la demande jusqu'au jour J",
    ],
    pricing: [{ label: "Projet sur mesure", price: "Sur devis", note: "Tarif selon la prestation et la zone" }],
    fromPrice: "Sur devis",
  },
];

export const EVENT_TYPES = [
  {
    title: "Mariages",
    text: "Le Videobooth 360 et le Photo Booth signent les souvenirs inoubliables de votre plus beau jour.",
    emoji: "💍",
  },
  {
    title: "Anniversaires",
    text: "Des animations fun qui rassemblent toutes les générations autour du jeu et du souvenir.",
    emoji: "🎂",
  },
  {
    title: "Soirées privées",
    text: "Transformez votre soirée en expérience mémorable avec des animations dignes des clubs azuréens.",
    emoji: "🥂",
  },
  {
    title: "Séminaires & entreprises",
    text: "Team building, soirée de fin d'année, lancement produit : fédérez vos équipes avec style.",
    emoji: "🏢",
  },
  {
    title: "Baptêmes & communions",
    text: "Des animations douces et conviviales, accessibles aux enfants comme aux grands-parents.",
    emoji: "🕊️",
  },
  {
    title: "Festivals & événements publics",
    text: "Attirez et divertissez le public avec des animations robustes, encadrées par des professionnels.",
    emoji: "🎪",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Choisissez votre animation",
    text: "Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper… ou une idée sur mesure.",
  },
  {
    title: "Demandez un devis",
    text: "Réponse rapide par téléphone, WhatsApp ou email, avec une offre claire et sans surprise.",
  },
  {
    title: "Livraison & installation sur site",
    text: "Nous livrons et installons le matériel directement sur le lieu de votre événement.",
  },
  {
    title: "Profitez, on s'occupe du reste",
    text: "Vivez votre événement pleinement : Events Azuréen récupère le matériel à la fin.",
  },
] as const;

export const GALLERY = [
  {
    src: "/assets/events-azureen/ambiance-gala.jpg",
    alt: "Réception élégante aux lumières bleues et fleurs blanches",
    caption: "Réception privée · ambiance bleu azur",
  },
  {
    src: "/assets/events-azureen/videobooth-360.jpg",
    alt: "Spin Cam 360 installée en terrasse face aux collines azuréennes, tapis rouge et cordons dorés",
    caption: "Videobooth 360 · terrasse azuréenne",
  },
  {
    src: "/assets/events-azureen/photobooth-miroir.jpg",
    alt: "Photo Booth miroir lumineux lors d'une garden party sous guirlandes",
    caption: "Photo Booth miroir · garden party",
  },
  {
    src: "/assets/events-azureen/photobooth-woody.jpg",
    alt: "Photo Booth Woody en bois sur trépied face à la mer au coucher du soleil",
    caption: "Photo Booth Woody · bord de mer",
  },
  {
    src: "/assets/events-azureen/borne-arcade.jpg",
    alt: "Invités jouant sur la borne arcade pendant une soirée",
    caption: "Borne arcade · esprit rétrogaming",
  },
  {
    src: "/assets/events-azureen/photobooth-vintage.jpg",
    alt: "Photo Booth vintage blanc sur trépied en bois devant un mur végétal",
    caption: "Photo Booth vintage · touche rétro",
  },
  {
    src: "/assets/events-azureen/baby-foot.jpg",
    alt: "Amis célébrant un but au baby-foot lors d'un événement privé",
    caption: "Baby-foot · l'esprit d'équipe",
  },
  {
    src: "/assets/events-azureen/flipper.jpg",
    alt: "Invités s'amusant sur un flipper rétro aux couleurs vives",
    caption: "Flipper · la magie du rétro",
  },
] as const;

export const ANIMATION_OPTIONS = [
  "Videobooth 360",
  "Photo Booth",
  "Borne Arcade",
  "Baby-foot",
  "Flipper",
  "Animation personnalisée",
  "Plusieurs animations",
] as const;

export const EVENT_OPTIONS = [
  "Mariage",
  "Anniversaire",
  "Soirée privée",
  "Séminaire / Entreprise",
  "Baptême / Communion",
  "Festival / Événement public",
  "Autre",
] as const;
