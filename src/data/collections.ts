import type { Localized } from '../i18n/types'
import type { JewelKind } from '../components/JewelIcons'

export type Collection = {
  id: string
  icon: JewelKind
  metal: 'gold' | 'silver'
  title: Localized
  purity: Localized
  text: Localized
  /** Optional real photo in public/images (e.g. '/images/bagues.webp'). Falls back to the illustration. */
  image?: string
}

/** Jewellery families shown in the "Collections" section. Add a photo with `image` once available. */
export const collections: Collection[] = [
  {
    id: 'bagues',
    icon: 'ring',
    metal: 'gold',
    title: { fr: 'Bagues', ar: 'الخواتم' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Solitaires, bagues fines et modèles serti pierres.', ar: 'خواتم بفص واحد، خواتم رقيقة وموديلات مرصعة بالأحجار.' },
  },
  {
    id: 'alliances',
    icon: 'wedding',
    metal: 'gold',
    title: { fr: 'Alliances', ar: 'خواتم الزواج' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Alliances classiques ou ciselées, gravure possible.', ar: 'خواتم كلاسيكية أو منقوشة، مع إمكانية النقش.' },
  },
  {
    id: 'colliers',
    icon: 'necklace',
    metal: 'gold',
    title: { fr: 'Colliers & pendentifs', ar: 'القلائد والسلاسل' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Chaînes, colliers et pendentifs pour tous les jours.', ar: 'سلاسل وقلائد ودلايات للاستعمال اليومي.' },
  },
  {
    id: 'bracelets',
    icon: 'bracelet',
    metal: 'gold',
    title: { fr: 'Bracelets', ar: 'الأساور' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Joncs, gourmettes et bracelets fins.', ar: 'دمالج، أساور مجدولة وأساور رقيقة.' },
  },
  {
    id: 'boucles',
    icon: 'earrings',
    metal: 'gold',
    title: { fr: "Boucles d'oreilles", ar: 'الأقراط' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Puces, créoles et pendantes, pour femmes et enfants.', ar: 'أقراط صغيرة، حلقات ومتدلية، للنساء والأطفال.' },
  },
  {
    id: 'parures',
    icon: 'tiara',
    metal: 'gold',
    title: { fr: 'Parures de mariage', ar: 'أطقم العروس' },
    purity: { fr: 'Or 18 carats', ar: 'ذهب عيار 18' },
    text: { fr: 'Ensembles complets pour la mariée et les fiançailles.', ar: 'أطقم كاملة للعروس والخطوبة.' },
  },
  {
    id: 'argent',
    icon: 'chain',
    metal: 'silver',
    title: { fr: 'Argent', ar: 'الفضة' },
    purity: { fr: 'Argent 925', ar: 'فضة 925' },
    text: { fr: 'Bijoux en argent massif, à petits prix.', ar: 'مجوهرات من الفضة الخالصة بأثمنة مناسبة.' },
  },
]
