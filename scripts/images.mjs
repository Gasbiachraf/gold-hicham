// Converts the source photos in assets-src/ into optimised WebP files in public/images/.
// Run with: npm run images
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const SRC = 'assets-src'
const OUT = 'public/images'
await mkdir(OUT, { recursive: true })

const jobs = [
  // Wall sign of the shop: hero / gallery photo.
  { src: 'enseigne.jpg', out: 'enseigne', widths: [640, 1280] },
  // Owner portrait (already cropped on M. Hicham ANBI).
  { src: 'hicham-anbi.jpg', out: 'hicham-anbi', widths: [465] },
  // Business card: logo only (the card itself prints an outdated phone number).
  { src: 'carte-logo.jpg', out: 'logo', crop: { left: 40, top: 378, width: 460, height: 300 }, widths: [460] },
]

for (const job of jobs) {
  for (const width of job.widths) {
    let img = sharp(`${SRC}/${job.src}`)
    if (job.crop) img = img.extract(job.crop)
    const file = job.widths.length > 1 ? `${OUT}/${job.out}-${width}.webp` : `${OUT}/${job.out}.webp`
    await img.resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(file)
    console.log('✓', file)
  }
}

// Open Graph image (1200×630): the shop sign on black.
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0b0b0b' } })
  .composite([{ input: await sharp(`${SRC}/enseigne.jpg`).resize(1200, 630, { fit: 'cover' }).toBuffer() }])
  .jpeg({ quality: 82 })
  .toFile(`${OUT}/og.jpg`)
console.log('✓', `${OUT}/og.jpg`)
