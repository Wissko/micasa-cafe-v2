'use client'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export default function OurStory() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ─── HERO TEXTE PUR ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(8rem,15vw,13rem) 2.5rem clamp(5rem,10vw,8rem)',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <FadeUp>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--caramel)',
            marginBottom: '2rem',
          }}>Our Story</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            lineHeight: 1.05,
            color: 'var(--cream)',
            marginBottom: '2rem',
          }}>
            A place you come back to.
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '1.05rem',
            color: 'var(--muted)',
            lineHeight: 1.9,
            maxWidth: '55ch',
          }}>
            A cafe born out of love for food, family, and the idea that a meal
            is never just a meal.
          </p>
        </FadeUp>
      </section>

      {/* ─── PHOTO PLEIN-BLEED 80vh ─── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/IMG_5789.jpeg"
          alt="Mi Casa Cafe interior"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      {/* ─── TEXTE EDITORIAL + PHOTOS ASYMETRIQUES ─── */}
      <section style={{
        background: 'var(--cream-bg)',
        padding: 'clamp(5rem,10vw,8rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Intro text */}
          <FadeUp>
            <div style={{ maxWidth: '680px', marginBottom: 'clamp(3rem,6vw,5rem)' }}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#0a0a0a',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                We built Mi Casa to feel like someone&apos;s home.
              </h2>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: 'rgba(10,10,10,0.6)',
                lineHeight: 1.85,
              }}>
                Growing up surrounded by the aromas of the Mediterranean and the warmth
                of Middle Eastern kitchens, we knew that food was the most honest way
                to connect with people. When we opened Mi Casa in South Brisbane, we
                had one goal: create a space where every guest feels welcomed,
                nourished, and seen.
              </p>
            </div>
          </FadeUp>

          {/* Split asymetrique 60/40 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '0',
            marginBottom: 'clamp(3rem,6vw,5rem)',
          }}>
            <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
              <Image
                src="/images/IMG_5794.jpeg"
                alt="Mi Casa kitchen"
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
            <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
              <Image
                src="/images/IMG_5797.jpeg"
                alt="Mi Casa food"
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
          </div>

          {/* Values */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
          }}>
            {[
              {
                title: '100% Halal',
                body: 'Every single ingredient we use is certified Halal. No compromises, no exceptions. So you can eat with full confidence.',
              },
              {
                title: 'Made with intention',
                body: 'From the way we source our produce to the way we plate each dish, we cook with care and serve with pride.',
              },
              {
                title: 'A table for everyone',
                body: 'Mi Casa means "my home" in Spanish. It is exactly that: a place where different cultures sit together and share.',
              },
            ].map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '1.3rem',
                    color: '#0a0a0a',
                    marginBottom: '0.75rem',
                  }}>{v.title}</h3>
                  <p style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'rgba(10,10,10,0.6)',
                    lineHeight: 1.8,
                  }}>{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        background: 'var(--bg)',
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
        }}>Mi Casa Cafe</span>
        <Link href="/" style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 300,
          fontSize: '0.8rem',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
        }}>Back to home</Link>
      </footer>
    </main>
  )
}
