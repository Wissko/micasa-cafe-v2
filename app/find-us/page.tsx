'use client'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const hours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '7:30am to 3pm' },
  { day: 'Wednesday', hours: '7:30am to 3pm' },
  { day: 'Thursday', hours: '7:30am to 3pm' },
  { day: 'Friday', hours: '7:30am to 3pm' },
  { day: 'Saturday', hours: '8am to 4pm' },
  { day: 'Sunday', hours: '8am to 4pm' },
]

export default function FindUs() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ─── HERO ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(8rem,15vw,13rem) 2.5rem clamp(5rem,10vw,8rem)',
        textAlign: 'center',
      }}>
        <FadeUp>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--caramel)',
            marginBottom: '1.5rem',
          }}>South Brisbane</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            color: 'var(--cream)',
            marginBottom: '1.25rem',
          }}>
            4/275 Grey Street
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '1.05rem',
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            letterSpacing: '0.04em',
          }}>
            South Brisbane, Queensland, Australia
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

      {/* ─── HORAIRES ─── */}
      <section style={{
        background: 'var(--cream-bg)',
        padding: 'clamp(5rem,10vw,8rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '2rem',
            }}>Opening Hours</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0a0a0a',
              marginBottom: '3rem',
              lineHeight: 1.1,
            }}>When we are here for you.</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            {hours.map(({ day, hours: h }) => (
              <div key={day} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                padding: '1.1rem 0',
                borderBottom: '1px solid rgba(10,10,10,0.1)',
                gap: '2rem',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  color: h === 'Closed' ? 'rgba(10,10,10,0.3)' : '#0a0a0a',
                  letterSpacing: '0.02em',
                }}>{day}</span>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.05rem',
                  color: h === 'Closed' ? 'rgba(10,10,10,0.3)' : '#0a0a0a',
                  textAlign: 'right',
                }}>{h}</span>
              </div>
            ))}
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 300,
              fontSize: '0.85rem',
              color: 'rgba(10,10,10,0.45)',
              marginTop: '2rem',
              lineHeight: 1.7,
            }}>
              Kitchen closes 30 minutes before closing. Hours may vary on public holidays.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── PHOTO PLEIN-BLEED ─── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/IMG_5799.jpeg"
          alt="Mi Casa Cafe South Brisbane"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
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
