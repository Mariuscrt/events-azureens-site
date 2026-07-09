# Events Azuréen — Site vitrine

Site vitrine premium pour **Events Azuréen**, location d'animations événementielles
(Videobooth 360, Photo Booth, borne arcade, baby-foot, flipper, animations
personnalisées) dans les **Alpes-Maritimes (06)**, le **Var (83)** et à **Monaco**.

Stack : **Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion**.

---

## 1. Installation

Prérequis : [Node.js](https://nodejs.org) 18.18 ou plus récent (Node 20+ recommandé).

```bash
npm install
```

## 2. Lancer le site

### En développement (rechargement à chaud)

```bash
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

### En production

```bash
npm run build
npm run start
```

### Vérifier le code

```bash
npm run lint
```

## 3. Modifier les produits, tarifs et contenus

**Tout le contenu est centralisé dans un seul fichier : [`lib/data.ts`](lib/data.ts).**

| Constante | Contenu |
|---|---|
| `CONTACT` | Nom, email, téléphone, WhatsApp, Instagram, zones |
| `PRODUCTS` | Les 6 animations : nom, pitch, bénéfices, services inclus, **tarifs**, images (main/secondary/detail/lifestyle) |
| `PHOTOBOOTH_VARIANTS` | Les 4 modèles de Photo Booth (Woody, Classique, Vintage, Miroir) avec style, points forts et images |
| `EVENT_TYPES` | Les cartes « Mariages, Anniversaires, … » |
| `PROCESS_STEPS` | Les 4 étapes de la section Fonctionnement |
| `GALLERY` | Les photos de la galerie (image, légende, rotation) |
| `ANIMATION_OPTIONS` / `EVENT_OPTIONS` | Les listes déroulantes du formulaire de devis |

Exemple — changer un tarif du Videobooth 360 : ouvrir `lib/data.ts`, chercher
`videobooth-360`, modifier la valeur dans `pricing` :

```ts
pricing: [
  { label: "Forfait 3h", price: "420 €", note: "Location + animateur · Livraison 06 / Monaco incluse" },
  ...
],
fromPrice: "420 €", // prix affiché sur la carte produit
```

Les sections elles-mêmes sont dans [`components/`](components/) (une section = un
fichier : `Hero.tsx`, `Products.tsx`, `Pricing.tsx`, `Contact.tsx`, …) et sont
assemblées dans [`app/page.tsx`](app/page.tsx).

Le SEO (title, description, OpenGraph, données structurées LocalBusiness) est dans
[`app/layout.tsx`](app/layout.tsx). Pensez à y remplacer `SITE_URL` par votre vrai
nom de domaine lors de la mise en ligne.

## 4. Remplacer les images

La bibliothèque visuelle du site est dans
[`public/assets/events-azureen/premium/`](public/assets/events-azureen/premium/),
avec une convention claire : `produit-{main|secondary|detail|lifestyle}.jpg`
(ex. `babyfoot-main.jpg`, `photobooth-miroir-lifestyle.jpg`).

Le détail complet (fichier original → produit → rôle → usage) est documenté dans
[`IMAGE_MAPPING.md`](IMAGE_MAPPING.md).

Pour remplacer une image : déposer le nouveau fichier **avec le même nom** dans ce
dossier (format JPG ou WebP, au moins 1100 px de large pour éviter la pixelisation).
Les rôles sont référencés dans `lib/data.ts` (`PRODUCTS[].images` et
`PHOTOBOOTH_VARIANTS[].images`). Pour ajouter une photo à la galerie : ajouter une
entrée dans `GALLERY` avec `src`, `alt` (accessibilité) et `caption`.

Le fichier [`IMAGE_PROMPTS.md`](IMAGE_PROMPTS.md) est la **bible de direction
artistique de la nouvelle bibliothèque visuelle** : vision de marque, règles DA
(palette, lumière, interdits), et une shot list complète par produit
(hero lifestyle, studio, détail) avec prompts prêts à copier. Les fichiers
marqués ★ portent le même nom que ceux du site : générer l'image, la déposer
dans le dossier, et elle remplace l'ancienne sans toucher au code.

## 5. Formulaire de devis

Le formulaire n'a pas besoin de backend : à l'envoi, il ouvre la messagerie du
visiteur (`mailto:eventsazureen@gmail.com`) avec un récapitulatif pré-rempli
(nom, téléphone, date, lieu, type d'événement, animation souhaitée, message).
Pour brancher un vrai backend plus tard (Formspree, Resend, API route…), modifier
la fonction `onSubmit` dans [`components/Contact.tsx`](components/Contact.tsx).

## 6. Déploiement

Le site est 100 % statique après build : il se déploie en quelques minutes sur
[Vercel](https://vercel.com) (recommandé pour Next.js), Netlify ou tout hébergeur
Node. Sur Vercel : importer le dépôt, aucun réglage nécessaire.
