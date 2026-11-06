import { useId, type ReactNode } from 'react'

export type JewelKind = 'ring' | 'wedding' | 'necklace' | 'bracelet' | 'earrings' | 'tiara' | 'chain'

const PATHS: Record<JewelKind, ReactNode> = {
  ring: (
    <>
      <circle cx="60" cy="76" r="28" />
      <circle cx="60" cy="76" r="23" opacity=".45" />
      <path d="M44 38 50 30h20l6 8-16 16Z M44 38h32 M50 30l4 8 6-8 6 8 4-8 M54 38l6 16 6-16" />
    </>
  ),
  wedding: (
    <>
      <circle cx="47" cy="64" r="25" />
      <circle cx="47" cy="64" r="20" opacity=".45" />
      <circle cx="73" cy="64" r="25" />
      <circle cx="73" cy="64" r="20" opacity=".45" />
      <path d="M60 30v-8 M54 26h12" opacity=".7" />
    </>
  ),
  necklace: (
    <>
      <path d="M18 22c8 30 24 42 42 42s34-12 42-42" />
      <path d="M22 22c8 26 22 36 38 36s30-10 38-36" opacity=".35" strokeDasharray="2 5" />
      <path d="M60 64v6 M50 76l4-6h12l4 6-10 16Z M50 76h20 M56 76l4 16 4-16" />
    </>
  ),
  bracelet: (
    <>
      <ellipse cx="60" cy="62" rx="42" ry="24" />
      <ellipse cx="60" cy="62" rx="34" ry="17" opacity=".45" />
      <circle cx="60" cy="86" r="3.5" />
      <circle cx="38" cy="82" r="2.5" />
      <circle cx="82" cy="82" r="2.5" />
    </>
  ),
  earrings: (
    <>
      <path d="M34 20c6-6 14-2 12 6-1 4-4 6-4 10" />
      <path d="M42 36v8 M34 52l3-8h10l3 8-8 14Z M34 52h16" />
      <path d="M74 20c6-6 14-2 12 6-1 4-4 6-4 10" />
      <path d="M82 36v8 M74 52l3-8h10l3 8-8 14Z M74 52h16" />
      <circle cx="42" cy="80" r="5" opacity=".5" />
      <circle cx="82" cy="80" r="5" opacity=".5" />
    </>
  ),
  tiara: (
    <>
      <path d="M18 78c10-8 26-12 42-12s32 4 42 12" />
      <path d="M22 74 30 44l14 22 16-38 16 38 14-22 8 30" />
      <circle cx="30" cy="40" r="3.5" />
      <circle cx="60" cy="24" r="4.5" />
      <circle cx="90" cy="40" r="3.5" />
      <path d="M54 58l6-8 6 8-6 8Z" />
      <path d="M26 90c10-6 22-8 34-8s24 2 34 8" opacity=".45" />
    </>
  ),
  chain: (
    <>
      <rect x="10" y="50" width="30" height="18" rx="9" transform="rotate(-20 25 59)" />
      <rect x="34" y="46" width="30" height="18" rx="9" transform="rotate(20 49 55)" />
      <rect x="58" y="50" width="30" height="18" rx="9" transform="rotate(-20 73 59)" />
      <rect x="82" y="46" width="28" height="18" rx="9" transform="rotate(20 96 55)" />
      <path d="M60 70v10 M52 86l3-6h10l3 6-8 12Z" />
    </>
  ),
}

/** Line-art jewel illustration, used until real product photos are added. */
export function JewelIllustration({ kind, metal = 'gold', className }: { kind: JewelKind; metal?: 'gold' | 'silver'; className?: string }) {
  const id = useId()
  const stops = metal === 'gold' ? ['#f5d77a', '#d4af37', '#a8841f'] : ['#f4f6f8', '#c9ced6', '#8c939c']
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset=".5" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {PATHS[kind]}
      </g>
    </svg>
  )
}
