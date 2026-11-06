# Gold Hicham – Bijouterie

Site vitrine de la bijouterie de M. Hicham ANBI, Kissariat Sidi Moumen N° 285, Casablanca.
Bilingue français / arabe (RTL), routes `/fr` et `/ar`.

Stack : React 19 · Vite · TypeScript · Tailwind CSS 4 · react-router.

## Lancer

```bash
npm install
npm run dev      # développement
npm test         # tests (numéro / liens WhatsApp)
npm run build    # build de production dans dist/
```

Déploiement : Vercel (le `vercel.json` gère le routage SPA) ou Netlify.

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Téléphone, adresse, horaires, réseaux sociaux | `src/data/store.ts` |
| Familles de bijoux (+ photo via `image`) | `src/data/collections.ts` |
| Photos de la galerie | `src/data/gallery.ts` |
| Avis clients (section masquée tant que la liste est vide) | `src/data/reviews.ts` |
| Textes FR / AR | `src/i18n/fr.ts`, `src/i18n/ar.ts` |

## Photos

Les photos sources sont dans `assets-src/`. `npm run images` les convertit en WebP dans `public/images/`
(voir `scripts/images.mjs` pour ajouter une photo ou changer un recadrage).

> La carte de visite d'origine (`assets-src/carte-logo.jpg`) affiche un ancien numéro à 11 chiffres :
> seul le logo en est extrait. Le bon numéro est **06 40 21 66 16**.

## À compléter

- [ ] Horaires d'ouverture (`store.ts`)
- [ ] Liens Instagram / Facebook / TikTok (`store.ts`)
- [ ] Vraies photos des bijoux, par famille (`collections.ts` → `image`) et dans la galerie
- [ ] Avis clients réels (`reviews.ts`)
# gold-hicham
