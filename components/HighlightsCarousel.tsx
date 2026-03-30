'use client'

import Image from 'next/image'

interface Item {
  name: string
  price: string
  desc: string
  img: string
}

export default function HighlightsCarousel({ items }: { items: Item[] }) {
  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items, ...items]

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Fade edges */}
      <div aria-hidden style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '120px',
        background: 'linear-gradient(to right, var(--cream-bg, #F5F0E6), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '120px',
        background: 'linear-gradient(to left, var(--cream-bg, #F5F0E6), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div
        className="carousel-track"
        style={{
          display: 'flex',
          gap: '0',
          width: 'max-content',
          animation: 'carousel-scroll 32s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            style={{
              width: 'clamp(260px, 28vw, 380px)',
              flexShrink: 0,
              background: 'var(--cream-bg, #F5F0E6)',
              borderRight: '1px solid rgba(10,10,10,0.06)',
              overflow: 'hidden',
            }}
          >
            {/* Image */}
            <div style={{
              position: 'relative',
              aspectRatio: '4/3',
              overflow: 'hidden',
            }}>
              <Image
                src={item.img}
                alt={item.name}
                fill
                unoptimized
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '1.1rem 1.35rem 1.5rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '0.2rem 0.75rem',
                marginBottom: '0.4rem',
              }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  color: '#0a0a0a',
                }}>
                  {item.name}
                </span>
                <span style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  color: 'var(--caramel, #C9943A)',
                }}>
                  {item.price}
                </span>
              </div>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: 'rgba(10,10,10,0.55)',
                lineHeight: 1.55,
              }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
