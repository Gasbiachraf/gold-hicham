import type { Localized } from '../i18n/types'

export type GalleryItem = { src: string; srcSet?: string; width: number; height: number; alt: Localized }

/** Photos shown in the gallery (lightbox). Add new photos to public/images and list them here. */
export const gallery: GalleryItem[] = [
  {
    src: '/images/enseigne-1280.webp',
    srcSet: '/images/enseigne-640.webp 640w, /images/enseigne-1280.webp 1280w',
    width: 1280,
    height: 576,
    alt: { fr: "L'enseigne Gold Hicham Bijouterie en lettres dorées dans la boutique", ar: 'لافتة Gold Hicham بحروف ذهبية داخل المحل' },
  },
  {
    src: '/images/logo.webp',
    width: 460,
    height: 300,
    alt: { fr: 'Le logo Gold Hicham Bijouterie, doré sur fond noir', ar: 'شعار Gold Hicham الذهبي على خلفية سوداء' },
  },
]
