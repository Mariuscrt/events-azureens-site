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

const IMG = "/assets/events-azureen/premium";

export type ProductImage = { src: string; alt: string };

export type PricingLine = {
  label: string;
  price: string;
  note: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  /** Phrase commerciale courte affichée sur la carte produit */
  pitch: string;
  fromPrice: string;
  badge?: string;
  images: {
    main: ProductImage;
    secondary?: ProductImage;
    detail?: ProductImage;
    lifestyle?: ProductImage;
  };
  /** 2-3 bénéfices scannables (cartes produits) */
  benefits: string[];
  /** Services inclus (fiches détaillées) */
  services: string[];
  pricing: PricingLine[];
};

export const PRODUCTS: Product[] = [
  {
    id: "videobooth-360",
    name: "Videobooth 360",
    tagline: "Spin Cam 360 professionnelle",
    pitch: "L'animation signature pour créer des vidéos spectaculaires.",
    fromPrice: "420 €",
    badge: "Best-seller",
    images: {
      main: {
        src: `${IMG}/videobooth-main.jpg`,
        alt: "Plateforme Videobooth 360 avec bras caméra et ring light, présentée sur fond studio clair",
      },
      secondary: {
        src: `${IMG}/videobooth-secondary.jpg`,
        alt: "Setup complet de la Spin Cam 360 vu de profil sur fond studio",
      },
      detail: {
        src: `${IMG}/videobooth-detail.jpg`,
        alt: "Détail du ring light et du support smartphone de la Spin Cam 360",
      },
      lifestyle: {
        src: `${IMG}/videobooth-lifestyle.jpg`,
        alt: "Couple de mariés posant sur le Videobooth 360 pendant leur réception",
      },
    },
    benefits: [
      "Animateur dédié pendant tout l'événement",
      "Vidéos partagées immédiatement par QR code ou AirDrop",
      "Livraison incluse (06 / Monaco)",
    ],
    services: [
      "Spin Cam 360 professionnelle",
      "Animateur dédié : accueil, placement et sécurité des invités",
      "Vidéos 360 personnalisées à votre événement",
      "Partage instantané par QR code / AirDrop",
      "Installation et récupération sur site",
    ],
    pricing: [
      { label: "Forfait 3h", price: "420 €", note: "Location + animateur · Livraison 06 / Monaco incluse" },
      { label: "Forfait 5h", price: "600 €", note: "Location + animateur · Livraison 06 / Monaco incluse" },
    ],
  },
  {
    id: "photo-booth",
    name: "Photo Booth",
    tagline: "4 styles : Woody · Classique · Vintage · Miroir",
    pitch: "Des souvenirs imprimés, élégants et instantanés.",
    fromPrice: "390 €",
    badge: "4 modèles",
    images: {
      main: {
        src: `${IMG}/photobooth-woody-lifestyle.jpg`,
        alt: "Invités utilisant le Photo Booth Woody en bois lors d'une réception élégante",
      },
      secondary: {
        src: `${IMG}/photobooth-classique-main.jpg`,
        alt: "Photo Booth Classique blanc présenté sur fond studio clair",
      },
      detail: {
        src: `${IMG}/photobooth-woody-detail.jpg`,
        alt: "Détail de la caméra, de l'anneau lumineux et de l'imprimante du Photo Booth Woody",
      },
      lifestyle: {
        src: `${IMG}/photobooth-classique-lifestyle.jpg`,
        alt: "Invités souriants devant le Photo Booth Classique lors d'une soirée sur rooftop",
      },
    },
    benefits: [
      "4 styles au choix, du bois chaleureux au miroir lumineux",
      "Photos imprimées sur place pour vos invités",
      "Livraison incluse (06 / Monaco)",
    ],
    services: [
      "Photo Booth moderne et simple à utiliser",
      "Accessoires fun pour des photos originales",
      "Impressions instantanées pendant l'événement",
      "Installation et récupération sur site",
      "Formule premium avec hôtesse disponible",
    ],
    pricing: [
      { label: "Forfait classique — 3h autonome / 200 impressions", price: "à partir de 390 €", note: "Livraison 06 / Monaco incluse" },
      { label: "Forfait premium — 3h avec hôtesse / impressions illimitées", price: "à partir de 490 €", note: "Livraison 06 / Monaco incluse" },
    ],
  },
  {
    id: "borne-arcade",
    name: "Borne Arcade",
    tagline: "Rétrogaming élégant",
    pitch: "Le rétrogaming en version événement premium.",
    fromPrice: "100 €",
    images: {
      main: {
        src: `${IMG}/arcade-main.jpg`,
        alt: "Borne arcade en bois noyer et métal noir présentée sur fond studio clair",
      },
      detail: {
        src: `${IMG}/arcade-detail.jpg`,
        alt: "Détail des joysticks en bois et des boutons de la borne arcade",
      },
      lifestyle: {
        src: `${IMG}/arcade-lifestyle.jpg`,
        alt: "Invités en tenue de soirée jouant sur la borne arcade dans un salon élégant",
      },
    },
    benefits: [
      "Jeux accessibles à tous les âges",
      "Installée puis récupérée sur votre lieu d'événement",
      "Format journée, soirée ou week-end",
    ],
    services: [
      "Borne arcade professionnelle",
      "Jeux faciles d'accès pour tous les âges",
      "Livraison directement sur site",
      "Installation et mise en place comprises",
      "Récupération du matériel en fin d'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "100 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
      { label: "Forfait week-end", price: "180 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
    ],
  },
  {
    id: "baby-foot",
    name: "Baby-foot",
    tagline: "Convivialité garantie",
    pitch: "Le classique qui rassemble toutes les générations.",
    fromPrice: "100 €",
    images: {
      main: {
        src: `${IMG}/babyfoot-main.jpg`,
        alt: "Baby-foot professionnel en bois clair présenté sur fond studio neutre",
      },
      detail: {
        src: `${IMG}/babyfoot-detail.jpg`,
        alt: "Détail des barres, poignées et joueurs peints du baby-foot",
      },
      lifestyle: {
        src: `${IMG}/babyfoot-lifestyle.jpg`,
        alt: "Quatre invités en tenue de soirée disputant une partie de baby-foot sur une terrasse au crépuscule",
      },
    },
    benefits: [
      "Qualité professionnelle, jeu fluide",
      "Défis et bonne humeur assurés à tout âge",
      "Format journée, soirée ou week-end",
    ],
    services: [
      "Baby-foot de qualité professionnelle",
      "Jeu convivial et accessible à tous",
      "Livraison et installation sur site",
      "Idéal pour créer des défis entre invités",
      "Récupération du matériel en fin d'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "100 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
      { label: "Forfait week-end", price: "180 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
    ],
  },
  {
    id: "flipper",
    name: "Flipper",
    tagline: "L'icône rétro",
    pitch: "Une touche rétro chic qui attire tous les regards.",
    fromPrice: "125 €",
    images: {
      main: {
        src: `${IMG}/flipper-main.jpg`,
        alt: "Flipper vintage au décor spatial bleu et blanc présenté sur fond studio clair",
      },
      detail: {
        src: `${IMG}/flipper-detail.jpg`,
        alt: "Détail du plateau lumineux du flipper avec bumpers illuminés",
      },
      lifestyle: {
        src: `${IMG}/flipper-lifestyle.jpg`,
        alt: "Couple élégant jouant au flipper lors d'une soirée dans un salon feutré",
      },
    },
    benefits: [
      "Un vrai bel objet, restauré et entretenu",
      "Divertissant pour toutes les générations",
      "Format journée, soirée ou week-end",
    ],
    services: [
      "Flipper professionnel, rétro et divertissant",
      "Livraison et installation sur site",
      "Une touche originale et nostalgique",
      "Adapté à tous les âges",
      "Récupération du matériel en fin d'événement",
    ],
    pricing: [
      { label: "Forfait journée / soirée", price: "125 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
      { label: "Forfait week-end", price: "230 €", note: "Livraison en supplément selon le lieu (06 / Monaco)" },
    ],
  },
  {
    id: "animations-personnalisees",
    name: "Animations personnalisées",
    tagline: "Sur mesure",
    pitch: "Une animation imaginée spécialement pour votre événement.",
    fromPrice: "Sur devis",
    images: {
      main: {
        src: `${IMG}/babyfoot-lifestyle.jpg`,
        alt: "Soirée privée élégante sur une terrasse de villa au crépuscule, invités autour d'une animation",
      },
      lifestyle: {
        src: `${IMG}/ambiance-reception.jpg`,
        alt: "Réception de mariage haut de gamme avec lustres et invités en tenue de soirée",
      },
    },
    benefits: [
      "Étude personnalisée de votre projet",
      "Une ou plusieurs animations combinées",
      "Accompagnement jusqu'au jour J",
    ],
    services: [
      "Étude personnalisée de votre projet",
      "Animation conçue selon votre thème et votre lieu",
      "Coordination avec votre planning",
      "Matériel professionnel installé sur site",
      "Accompagnement de la demande au jour J",
    ],
    pricing: [{ label: "Projet sur mesure", price: "Sur devis", note: "Tarif selon la prestation et la zone" }],
  },
];

export type PhotoBoothVariant = {
  id: string;
  name: string;
  style: string;
  description: string;
  strong: string;
  bestFor: string[];
  images: {
    main: ProductImage;
    secondary?: ProductImage;
    detail?: ProductImage;
    lifestyle?: ProductImage;
  };
};

export const PHOTOBOOTH_VARIANTS: PhotoBoothVariant[] = [
  {
    id: "woody",
    name: "Woody",
    style: "Chaleureux & naturel",
    description: "Le charme du bois pour une ambiance chaleureuse et élégante.",
    strong: "Finition bois clair et rendu élégant",
    bestFor: ["Mariages", "Réceptions", "Ambiances naturelles"],
    images: {
      main: {
        src: `${IMG}/photobooth-woody-main.jpg`,
        alt: "Photo Booth Woody en bois clair sur trépied, présenté sur fond studio beige",
      },
      secondary: {
        src: `${IMG}/photobooth-woody-secondary.jpg`,
        alt: "Photo Booth Woody vu de dos avec son câble, sur fond studio",
      },
      detail: {
        src: `${IMG}/photobooth-woody-detail.jpg`,
        alt: "Détail de la caméra, de l'anneau lumineux et de l'imprimante du Photo Booth Woody",
      },
      lifestyle: {
        src: `${IMG}/photobooth-woody-lifestyle.jpg`,
        alt: "Invités utilisant le Photo Booth Woody lors d'une réception élégante aux chandelles",
      },
    },
  },
  {
    id: "classique",
    name: "Classique",
    style: "Sobre & moderne",
    description: "Un design blanc, sobre et moderne, facile à intégrer à tous les événements.",
    strong: "Design blanc minimaliste",
    bestFor: ["Entreprises", "Anniversaires", "Soirées privées"],
    images: {
      main: {
        src: `${IMG}/photobooth-classique-main.jpg`,
        alt: "Photo Booth Classique blanc avec anneau lumineux, présenté sur fond studio clair",
      },
      secondary: {
        src: `${IMG}/photobooth-classique-secondary.jpg`,
        alt: "Photo Booth Classique blanc vu de trois quarts sur fond studio",
      },
      detail: {
        src: `${IMG}/photobooth-classique-detail.jpg`,
        alt: "Détail de l'anneau lumineux et de l'écran tactile du Photo Booth Classique",
      },
      lifestyle: {
        src: `${IMG}/photobooth-classique-lifestyle.jpg`,
        alt: "Trois invités en tenue de soirée utilisant le Photo Booth Classique sur un rooftop",
      },
    },
  },
  {
    id: "vintage",
    name: "Vintage",
    style: "Rétro & élégant",
    description: "Une esthétique rétro chic pour des souvenirs au caractère unique.",
    strong: "Charme authentique, bois foncé et laiton",
    bestFor: ["Mariages", "Soirées rétro", "Réceptions chaleureuses"],
    images: {
      main: {
        src: `${IMG}/photobooth-vintage-main.jpg`,
        alt: "Photo Booth Vintage en bois foncé sur trépied, présenté sur fond studio",
      },
      secondary: {
        src: `${IMG}/photobooth-vintage-secondary.jpg`,
        alt: "Photo Booth Vintage vu de dos sur fond studio",
      },
      detail: {
        src: `${IMG}/photobooth-vintage-detail.jpg`,
        alt: "Détail de l'objectif laiton et de la plaque gravée du Photo Booth Vintage",
      },
      lifestyle: {
        src: `${IMG}/photobooth-vintage-lifestyle.jpg`,
        alt: "Invitées en robes de soirée posant devant le Photo Booth Vintage sous des guirlandes",
      },
    },
  },
  {
    id: "miroir",
    name: "Miroir",
    style: "Lumineux & spectaculaire",
    description: "Un miroir lumineux qui transforme la photo en expérience premium.",
    strong: "Grand miroir tactile à contour lumineux",
    bestFor: ["Galas", "Soirées premium", "Événements élégants"],
    images: {
      main: {
        src: `${IMG}/photobooth-miroir-main.jpg`,
        alt: "Photo Booth Miroir à contour lumineux doré, présenté sur fond studio clair",
      },
      secondary: {
        src: `${IMG}/photobooth-miroir-secondary.jpg`,
        alt: "Structure arrière du Photo Booth Miroir sur fond studio",
      },
      detail: {
        src: `${IMG}/photobooth-miroir-detail.jpg`,
        alt: "Détail de la caméra et du contour lumineux du Photo Booth Miroir",
      },
      lifestyle: {
        src: `${IMG}/photobooth-miroir-lifestyle.jpg`,
        alt: "Invités en tenue de gala utilisant le Photo Booth Miroir derrière un tapis rouge",
      },
    },
  },
];

export const EVENT_TYPES = [
  {
    title: "Mariages",
    text: "Le Videobooth 360 et le Photo Booth signent les souvenirs de votre plus beau jour.",
    emoji: "💍",
  },
  {
    title: "Anniversaires",
    text: "Des animations qui rassemblent toutes les générations autour du jeu.",
    emoji: "🎂",
  },
  {
    title: "Soirées privées",
    text: "Une ambiance de club privé, chez vous ou dans votre lieu de réception.",
    emoji: "🥂",
  },
  {
    title: "Séminaires & entreprises",
    text: "Team building, soirée annuelle, lancement : fédérez vos équipes avec style.",
    emoji: "🏢",
  },
  {
    title: "Baptêmes & communions",
    text: "Des animations douces et conviviales, des enfants aux grands-parents.",
    emoji: "🕊️",
  },
  {
    title: "Festivals & événements publics",
    text: "Du matériel robuste et encadré pour divertir le public en toute sérénité.",
    emoji: "🎪",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Choisissez votre animation",
    text: "Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper… ou une idée sur mesure.",
  },
  {
    title: "Recevez votre devis",
    text: "Réponse rapide par téléphone, WhatsApp ou email, avec une offre claire.",
  },
  {
    title: "Livraison & installation",
    text: "Nous livrons et installons le matériel directement sur votre lieu d'événement.",
  },
  {
    title: "Profitez, on s'occupe du reste",
    text: "Vivez votre événement : Events Azuréen récupère le matériel à la fin.",
  },
] as const;

export const GALLERY = [
  {
    src: `${IMG}/videobooth-lifestyle.jpg`,
    alt: "Couple de mariés posant sur le Videobooth 360 au centre de la piste de danse",
    caption: "Videobooth 360 · mariage",
  },
  {
    src: `${IMG}/babyfoot-lifestyle.jpg`,
    alt: "Invités disputant une partie de baby-foot sur une terrasse de villa au crépuscule",
    caption: "Baby-foot · soirée privée",
  },
  {
    src: `${IMG}/photobooth-woody-lifestyle.jpg`,
    alt: "Invités récupérant leurs photos imprimées sur le Photo Booth Woody",
    caption: "Photo Booth Woody · réception",
  },
  {
    src: `${IMG}/flipper-detail.jpg`,
    alt: "Plateau lumineux du flipper vintage en gros plan",
    caption: "Flipper · détail du plateau",
  },
  {
    src: `${IMG}/arcade-lifestyle.jpg`,
    alt: "Invités jouant sur la borne arcade lors d'une soirée dans un salon design",
    caption: "Borne arcade · soirée lounge",
  },
  {
    src: `${IMG}/photobooth-miroir-lifestyle.jpg`,
    alt: "Invités en tenue de gala devant le Photo Booth Miroir",
    caption: "Photo Booth Miroir · gala",
  },
  {
    src: `${IMG}/flipper-lifestyle.jpg`,
    alt: "Couple souriant devant le flipper lors d'une soirée élégante",
    caption: "Flipper · soirée privée",
  },
  {
    src: `${IMG}/videobooth-detail.jpg`,
    alt: "Ring light et support smartphone de la Spin Cam 360 en gros plan",
    caption: "Videobooth 360 · le setup",
  },
] as const;

export const ANIMATION_OPTIONS = [
  "Videobooth 360",
  "Photo Booth (modèle à définir)",
  "Photo Booth — Woody",
  "Photo Booth — Classique",
  "Photo Booth — Vintage",
  "Photo Booth — Miroir",
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
