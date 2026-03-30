'use client'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const highlights = [
  {
    name: 'Shakshuka Royale',
    price: '$22',
    desc: 'Slow-braised tomato, harissa, poached eggs, sourdough',
    img: '/images/IMG_5788.jpeg',
  },
  {
    name: 'Levantine Platter',
    price: '$28',
    desc: 'Hummus, baba ghanoush, falafel, warm pita',
    img: '/images/IMG_5792.jpeg',
  },
  {
    name: 'Mi Casa Brunch Board',
    price: '$26',
    desc: 'Seasonal greens, labneh, dukkah, soft eggs',
    img: '/images/IMG_5797.jpeg',
  },
  {
    name: 'Mushroom Fatteh',
    price: '$21',
    desc: 'Crispy pita, yoghurt, sumac, toasted pine nuts',
    img: '/images/IMG_5799.jpeg',
  },
]

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ─── HERO ─── */}
      <section style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '600px',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Cafe feast"
          fill
          unoptimized
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 55%, rgba(10,10,10,0.0) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '4rem',
          left: '2.5rem',
          right: '2.5rem',
          maxWidth: '700px',
        }}>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--caramel)',
            marginBottom: '1rem',
          }}>
            South Brisbane · Halal Certified
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(80px, 14vw, 160px)',
            lineHeight: 0.88,
            color: 'var(--cream)',
            marginBottom: '1.25rem',
          }}>
            Mi Casa
          </h1>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            color: 'var(--muted)',
            marginBottom: '2.25rem',
            maxWidth: '380px',
          }}>
            Where every table feels like home.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/menu" style={{
              display: 'inline-block',
              background: 'var(--caramel)',
              borderRadius: '9999px',
              padding: '0.8rem 2rem',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Menu
            </Link>
            <Link href="/find-us" style={{
              display: 'inline-block',
              border: '1px solid var(--border2)',
              borderRadius: '9999px',
              padding: '0.8rem 2rem',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--caramel)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATEMENT ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(6rem,12vw,10rem) 2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeUp>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              lineHeight: 1.15,
              color: 'var(--cream)',
              marginBottom: '1.5rem',
            }}>
              Food is how we say{' '}
              <span style={{ color: 'var(--caramel)' }}>welcome.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--muted)',
              lineHeight: 1.85,
              maxWidth: '52ch',
              margin: '0 auto',
            }}>
              Born in South Brisbane, shaped by the warmth of the Mediterranean
              and the spice of the Middle East. Every dish 100% Halal.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── PHOTO FULL-BLEED ─── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/IMG_5793.jpeg"
          alt="Mi Casa Cafe atmosphere"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      {/* ─── SPLIT 50/50 ─── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        minHeight: '70vh',
      }}>
        {/* Image left */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '500px',
        }}>
          <Image
            src="/images/IMG_5796.jpeg"
            alt="Shared plates at Mi Casa"
            fill
            unoptimized
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.03)')}
            onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
          />
        </div>
        {/* Text right */}
        <div style={{
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem,6vw,6rem)',
        }}>
          <FadeUp>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '1.25rem',
            }}>
              Sharing is everything
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              lineHeight: 1.2,
              color: 'var(--cream)',
              marginBottom: '1.5rem',
            }}>
              Every plate is meant to be passed around.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 300,
              fontSize: '0.95rem',
              color: 'var(--muted)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: '38ch',
            }}>
              From the first pita to the last bite of baklava, everything here
              is made for the table. Pull up a chair.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link href="/menu" style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: 'var(--caramel)',
              letterSpacing: '0.04em',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              See the menu &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section style={{
        background: 'var(--cream-bg)',
        padding: 'clamp(5rem,10vw,8rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeUp>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: '#0a0a0a',
              marginBottom: '3.5rem',
              lineHeight: 1.1,
            }}>
              Today&apos;s highlights
            </h2>
          </FadeUp>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0',
          }}>
            {highlights.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.08}>
                <div style={{ background: 'var(--cream-bg)', overflow: 'hidden' }}>
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
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                      onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.03)')}
                      onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '1.5rem 1.75rem 2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        color: '#0a0a0a',
                      }}>
                        {item.name}
                      </h3>
                      <span style={{
                        fontFamily: 'Work Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        color: 'var(--caramel)',
                      }}>
                        {item.price}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.85rem',
                      color: 'rgba(10,10,10,0.6)',
                      lineHeight: 1.6,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIND US TEASER ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(6rem,12vw,10rem) 2.5rem',
        textAlign: 'center',
      }}>
        <FadeUp>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            color: 'var(--cream)',
            marginBottom: '1rem',
          }}>
            4/275 Grey Street
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            letterSpacing: '0.04em',
          }}>
            South Brisbane, Queensland
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <a
            href="https://maps.google.com/?q=4/275+Grey+Street+South+Brisbane"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--caramel)',
              borderRadius: '9999px',
              padding: '0.85rem 2.25rem',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Get Directions
          </a>
        </FadeUp>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.1rem',
          color: 'var(--muted)',
        }}>
          Mi Casa Cafe
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Menu', href: '/menu' },
            { label: 'Our Story', href: '/our-story' },
            { label: 'Find Us', href: '/find-us' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 300,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: 'var(--muted)',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {l.label}
            </Link>
          ))}
          <span style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: 'rgba(245,240,230,0.2)',
          }}>
            &copy; 2026 Mi Casa Cafe
          </span>
        </div>
      </footer>
    </main>
  )
}
