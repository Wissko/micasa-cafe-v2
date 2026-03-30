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

      {/* ─── HERO — Two locations ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(8rem,15vw,13rem) clamp(2rem,6vw,5rem) clamp(5rem,10vw,8rem)',
      }}>
        <FadeUp>
          <p style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--caramel)',
            marginBottom: '3rem',
          }}>Our Locations</p>
        </FadeUp>

        {/* Two locations side by side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          borderTop: '1px solid var(--border)',
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
        }}>

          {/* Location 1 */}
          <FadeUp delay={0.05}>
            <div>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1.25rem',
              }}>South Brisbane</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                lineHeight: 1,
                color: 'var(--cream)',
                marginBottom: '0.75rem',
              }}>
                4/275 Grey Street
              </h2>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                color: 'var(--muted)',
                marginBottom: '2rem',
                letterSpacing: '0.02em',
              }}>
                South Brisbane, Queensland, Australia
              </p>
              <a
                href="https://maps.google.com/?q=4/275+Grey+Street+South+Brisbane"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--border2)',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.75rem',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  transition: 'background 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--caramel)'; (e.currentTarget as HTMLAnchorElement).style.color = '#0a0a0a'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--caramel)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border2)'; }}
              >
                Get Directions
              </a>
            </div>
          </FadeUp>

          {/* Location 2 — second address (to be confirmed by Yose) */}
          <FadeUp delay={0.15}>
            <div>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1.25rem',
              }}>Underwood</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                lineHeight: 1,
                color: 'var(--cream)',
                marginBottom: '0.75rem',
              }}>
                3245 Logan Road
              </h2>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                color: 'var(--muted)',
                marginBottom: '2rem',
                letterSpacing: '0.02em',
              }}>
                Underwood, Queensland, Australia
              </p>
              <a
                href="https://maps.google.com/?q=3245+Logan+Road+Underwood+QLD"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--border2)',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.75rem',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  transition: 'background 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--caramel)'; (e.currentTarget as HTMLAnchorElement).style.color = '#0a0a0a'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--caramel)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border2)'; }}
              >
                Get Directions
              </a>
            </div>
          </FadeUp>

        </div>
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
