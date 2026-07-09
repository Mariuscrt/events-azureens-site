# Nouvelle bibliothèque visuelle Events Azuréen — direction artistique from scratch

Ce document est la **bible de direction artistique** de la nouvelle bibliothèque
visuelle. Les anciennes images ne servent que de référence produit (quel matériel,
quel usage) — **aucun visuel existant ne doit servir de base créative**. Chaque
image est recréée de zéro à partir des prompts ci-dessous.

---

## 1. Vision de marque

> *Si Events Azuréen était une grande marque premium, comment ses produits
> seraient-ils montrés ?*

Comme des **objets de désir** : héroïsés, isolés du bruit, éclairés comme des
produits de design, ou vécus dans des lieux où l'on rêve d'être — villa moderne,
rooftop au crépuscule, réception élégante sur la Côte d'Azur. Chaque image doit
transmettre : professionnalisme, qualité, plaisir, exclusivité accessible.

**Deux familles d'images, et seulement deux :**

| Famille | Rôle | Codes |
|---|---|---|
| **Studio** | Héroïser le produit (cartes, détails) | Fond épuré uni ou dégradé subtil bleu clair/blanc, sol avec ombre douce, produit parfait, aucun décor parasite |
| **Lifestyle premium** | Vendre le rêve (hero, galerie, sections détaillées) | Lieu haut de gamme réel et crédible, invités élégants, lumière dorée ou heure bleue, produit central et net |

## 2. Règles DA globales (non négociables)

- **Palette** : bleu clair `#E9F1FB`, bleu profond `#122E68`, blanc pur, doré subtil `#D4A838`. Les dominantes chaudes orange/rouge sont interdites.
- **Lumière** : douce et maîtrisée — softbox en studio, golden hour ou heure bleue en lifestyle. Jamais de flash dur, jamais de néon criard.
- **Optique** : rendu plein format, 35/50 mm, profondeur de champ douce, produit toujours net.
- **Composition** : simple, un seul sujet, espace négatif généreux, horizon droit.
- **Interdits absolus** : texte incrusté, watermark, logo, rendu cartoon/3D visible, collage, fond chargé, foule dense, kitsch, sur-saturation, artefacts IA (mains déformées, reflets incohérents).

**Suffixe qualité à coller à la fin de CHAQUE prompt :**

> ultra realistic premium photography, full-frame camera, 50mm lens, soft
> controlled light, gentle shadows, shallow depth of field, clean minimal
> composition, generous negative space, color palette of pale azure blue, deep
> navy, white and subtle gold, French Riviera luxury mood — no text, no
> watermark, no logo, no cartoon or 3D render look, no clutter, no
> oversaturated warm tones, no visible AI artifacts

## 3. Shot list complète

> **Drop-in** : les fichiers marqués ★ remplacent un fichier existant du site —
> même nom, même dossier (`public/assets/events-azureen/`), aucune modification
> de code nécessaire. Les autres sont des ajouts optionnels pour enrichir
> `GALLERY` ou remplacer l'`image` d'un produit dans `lib/data.ts`.

### Produit 1 — Videobooth 360 / Spin Cam 360

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `videobooth-360.jpg` | Hero lifestyle | 4:3 | Carte produit, section détaillée, hero, galerie |
| ★ `videobooth-360-detail.jpg` | Détail studio | 1:1 | Vignette flottante de la section détaillée |
| `videobooth-360-studio.jpg` | Studio | 4:5 | Alternative carte produit |

**Hero lifestyle — `videobooth-360.jpg`**
> A 360 video booth in action at an exclusive evening reception on a modern
> French Riviera rooftop: circular platform with a slowly rotating camera arm
> and glowing LED ring light, one elegant couple in evening wear mid-spin with
> subtle motion blur on the arm, deep blue dusk sky, warm gold string lights
> and Mediterranean sea lights blurred far behind, the machine perfectly sharp
> and centered, spectacular yet clean composition

**Détail studio — `videobooth-360-detail.jpg`**
> Studio close-up of a professional 360 spin camera platform: matte black
> circular deck with brushed metal edge, articulated arm with camera mount and
> LED ring light, photographed on a seamless pale azure-to-white gradient
> background, single soft key light from the upper left, soft grounded shadow,
> product-design catalogue aesthetic

**Studio — `videobooth-360-studio.jpg`**
> Full 360 video booth setup photographed like a premium tech product: black
> spinning platform, camera arm with ring light softly illuminated, two gold
> stanchions with navy velvet ropes framing it symmetrically, seamless white
> studio background with a faint pale-blue floor gradient, soft even lighting,
> perfectly clean, nothing else in frame

### Produit 2 — Photo Booth

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `photobooth-miroir.jpg` | Hero lifestyle | 4:5 | Carte produit, hero, galerie, grille des modèles |
| ★ `photobooth-classique.jpg` | Studio | 4:5 | Grille des 4 modèles |
| ★ `photobooth-woody.jpg` | Lifestyle | 4:5 | Grille des 4 modèles, galerie |
| ★ `photobooth-vintage.jpg` | Studio / détail | 4:5 | Grille des 4 modèles, galerie |

**Hero lifestyle — `photobooth-miroir.jpg`**
> An elegant full-length mirror photo booth with a soft glowing ring of light,
> at a luxury wedding cocktail on a Riviera villa terrace at golden hour, a
> laughing couple in wedding attire posing in front of it, olive trees and warm
> string lights softly blurred behind, the mirror perfectly sharp, refined
> joyful atmosphere, editorial wedding photography style

**Studio — `photobooth-classique.jpg`**
> A modern white photo booth with large front screen on a slim black tripod,
> photographed as a design object on a seamless pale azure-to-white studio
> background, soft even light, gentle floor shadow, screen showing only a soft
> glowing light (no readable interface), Apple-product-page minimalism

**Lifestyle — `photobooth-woody.jpg`**
> A warm light-wood photo booth on a wooden tripod standing on the stone
> terrace of a Mediterranean villa at sunset, sea horizon softly blurred
> behind, no people, golden light on the wood grain, product sharp and
> centered, calm luxurious travel-editorial mood

**Studio / détail — `photobooth-vintage.jpg`**
> Close product photo of a vintage-style white photo booth with chrome lens
> ring on a wooden tripod, a neat small stack of freshly printed photo strips
> on a side table, seamless off-white background with subtle navy-blue accent
> light from one side, refined nostalgic design-object aesthetic

### Produit 3 — Borne Arcade

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `borne-arcade.jpg` | Hero lifestyle | 4:3 | Carte produit, section détaillée, galerie |
| `borne-arcade-studio.jpg` | Studio | 4:5 | Alternative carte produit |
| `borne-arcade-detail.jpg` | Détail | 1:1 | Galerie / futur usage |

**Hero lifestyle — `borne-arcade.jpg`**
> Two elegantly dressed guests playfully competing on a sleek modern arcade
> cabinet at an upscale private party in a bright design villa living room,
> pale blue ambient lighting with warm golden accents, genuine laughter,
> champagne glasses on a marble side table, upscale lifestyle mood — bright
> and refined, absolutely not a dark arcade room

**Studio — `borne-arcade-studio.jpg`**
> A modern arcade cabinet photographed as a premium design object: clean navy
> blue cabinet with illuminated joystick panel and screen glowing with soft
> abstract colors (no readable text), seamless pale azure studio background,
> soft even lighting, gentle grounded shadow, minimalist product photography

**Détail — `borne-arcade-detail.jpg`**
> Macro photo of arcade controls: glossy navy and gold buttons and a chrome
> joystick under soft studio light, extremely shallow focus, clean dark navy
> background, premium build quality feeling

### Produit 4 — Baby-foot

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `baby-foot.jpg` | Hero lifestyle | 4:3 | Carte produit, section détaillée, galerie |
| `baby-foot-studio.jpg` | Studio | 4:3 | Alternative carte produit |
| `baby-foot-detail.jpg` | Détail | 1:1 | Galerie / futur usage |

**Hero lifestyle — `baby-foot.jpg`**
> Four friends in chic summer evening outfits playing an intense foosball match
> at a private garden reception on the Côte d'Azur, golden hour side light,
> genuine laughter as someone scores, white parasols and a turquoise pool
> softly blurred behind, the light-wood foosball table with navy players sharp
> in the foreground, natural elegant lifestyle photography

**Studio — `baby-foot-studio.jpg`**
> A high-end tournament foosball table with light oak finish and hand-painted
> navy and white players, photographed in three-quarter view on a seamless
> white-to-pale-azure studio background, soft even light, gentle floor shadow,
> premium furniture catalogue aesthetic

**Détail — `baby-foot-detail.jpg`**
> Close-up of foosball rods and hand-painted players in navy and white, warm
> soft light raking across the polished wood, extremely shallow depth of
> field, craftsmanship and quality feeling

### Produit 5 — Flipper

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `flipper.jpg` | Hero lifestyle | 4:3 | Carte produit, section détaillée, galerie |
| `flipper-studio.jpg` | Studio | 4:5 | Alternative carte produit |
| `flipper-detail.jpg` | Détail | 1:1 | Galerie / futur usage |

**Hero lifestyle — `flipper.jpg`**
> A stylish couple in evening wear laughing while playing a beautifully
> restored vintage pinball machine at an upscale private lounge party, the
> machine's playfield glowing in blue and gold tones, deep navy ambient
> lighting, marble and brass interior details softly blurred, retro-premium
> mood — elegant, never kitsch

**Studio — `flipper-studio.jpg`**
> A pristine vintage pinball machine photographed as a collector's design
> piece: glossy cabinet, glowing playfield in blue and gold tones (no readable
> brand text), seamless pale azure studio background, soft controlled light,
> gentle reflection on the floor, luxury auction catalogue aesthetic

**Détail — `flipper-detail.jpg`**
> Macro through the glass of a pinball playfield: chrome ball frozen
> mid-action between illuminated blue and gold bumpers, cinematic soft light,
> very shallow focus, premium retro craftsmanship

### Produit 6 — Animations personnalisées / ambiance de marque

| Fichier | Type | Format | Usage dans le site |
|---|---|---|---|
| ★ `ambiance-gala.jpg` | Hero ambiance | 16:9 | Bande immersive, hero, galerie, carte « Animations personnalisées », image OpenGraph |
| `ambiance-rooftop.jpg` | Lifestyle | 16:9 | Bande immersive (alternative), galerie |
| `ambiance-detail.jpg` | Détail décor | 1:1 | Galerie / futur usage |

**Hero ambiance — `ambiance-gala.jpg`**
> Wide editorial photograph of an elegant wedding reception in a Riviera
> venue at blue hour: round tables with white and dusty-blue floral
> centerpieces, golden fairy lights, deep azure uplighting on white drapes,
> a few guests in evening wear softly blurred in motion, luxurious warm
> atmosphere, high-end wedding magazine style

**Lifestyle — `ambiance-rooftop.jpg`**
> A luxury rooftop event space in Monaco at dusk: white lounge seating, subtle
> gold string lights, an azure pool reflecting the last light, sea horizon,
> a few elegant guests mingling with champagne, generous sky negative space,
> premium event-brand campaign aesthetic

**Détail décor — `ambiance-detail.jpg`**
> Close-up of a luxury reception table: white peonies and dusty blue
> hydrangeas, gold-rimmed glassware catching candlelight, navy linen, soft
> bokeh, refined wedding editorial detail shot

## 4. Workflow d'intégration

1. Générer chaque image au format indiqué, **≥ 1600 px de large**.
2. Contrôler avec la checklist DA (§2) : palette, lumière, aucun texte, aucun artefact.
3. Exporter en JPG qualité 85–90 (ou WebP).
4. Déposer dans `public/assets/events-azureen/` — les fichiers ★ écrasent
   l'ancien fichier du même nom et apparaissent immédiatement dans le site.
5. Pour les fichiers additionnels : ajouter une entrée dans `GALLERY`
   (`lib/data.ts`) ou remplacer l'`image` du produit concerné.
6. Purger le cache d'images si besoin en local : `rm -rf .next/cache/images`.
