import SVGMaskReveal from '@/components/SVGMaskReveal'
import FadeUp from '@/components/FadeUp'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    title: 'Rooted in hospitality',
    body: 'Mi Casa means "my house" in Spanish. It is the feeling we chase in every detail — the warmth of a space that welcomes you fully, without pretense.',
  },
  {
    title: 'Craft without compromise',
    body: '100% Halal, always. Every ingredient is sourced with intention. Every dish is made fresh, every day. We do not cut corners.',
  },
  {
    title: 'Community first',
    body: 'South Brisbane shaped us. We are part of the neighbourhood fabric — a place for locals, for workers, for families, for anyone who needs a good meal and good company.',
  },
]

export default function StoryPage() {
  return (
    <main style={{ background: 'var(--bg)', paddingTop: '5rem' }}>

      {/* Hero reveal */}
      <section style={{ position: 'relative', minHeight: '80vh', overflow: 'hidden' }}>
        <SVGMaskReveal
          src="/images/IMG_5790.jpeg"
          alt="Mi Casa Café story"
          aspectRatio="16/9"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '2rem',
            right: '2rem',
          }}
        >
          <FadeUp>
            <p className="overline" style={{ marginBottom: '1rem' }}>Our Story</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: 'var(--cream)',
                lineHeight: 1.05,
                maxWidth: '700px',
              }}
            >
              A place to feel at home.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Story text */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        <FadeUp>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: 'var(--cream)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Mi Casa Café was born from a simple belief: that a great meal should feel like coming home.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--sand)',
              lineHeight: 1.85,
              marginBottom: '1.8rem',
            }}
          >
            Nestled in South Brisbane's vibrant Grey Street precinct, we opened our doors with one goal in mind —
            to create a café that felt genuinely warm, without trying too hard. A space defined by the
            Mediterranean-Oriental flavours we grew up loving, adapted for the relaxed rhythm of a Brisbane morning.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--sand)',
              lineHeight: 1.85,
              marginBottom: '1.8rem',
            }}
          >
            The menu draws from Levantine, North African and Mediterranean traditions — dishes designed for
            sharing, for lingering, for connection. Everything is 100% Halal, thoughtfully prepared,
            and made with ingredients we genuinely believe in.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--sand)',
              lineHeight: 1.85,
            }}
          >
            Whether you come for your morning coffee, a long weekend brunch, or to share a feast with the people
            you love — this is your table. Mi Casa es tu casa.
          </p>
        </FadeUp>
      </section>

      {/* Photo duo */}
      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 7rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <SVGMaskReveal
            src="/images/IMG_5788.jpeg"
            alt="Mi Casa Café interior"
            aspectRatio="4/5"
          />
          <SVGMaskReveal
            src="/images/IMG_5789.jpeg"
            alt="Mi Casa Café details"
            aspectRatio="4/5"
          />
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeUp>
            <p className="overline" style={{ marginBottom: '3rem' }}>What we stand for</p>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3rem',
            }}
          >
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: '1.5rem',
                      color: 'var(--cream)',
                      marginBottom: '1rem',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: 'var(--sand)',
                      lineHeight: 1.75,
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width SVGMask reveal */}
      <section style={{ padding: '0 2rem' }}>
        <SVGMaskReveal
          src="/images/IMG_5799.jpeg"
          alt="Mi Casa Café South Brisbane"
          aspectRatio="21/9"
        />
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          textAlign: 'center',
        }}
      >
        <FadeUp>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              color: 'var(--cream)',
              marginBottom: '0.5rem',
            }}
          >
            We would love to see you.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: 'var(--sand)',
              marginBottom: '2.5rem',
            }}
          >
            4/275 Grey Street, South Brisbane QLD
          </p>
        </FadeUp>
        <FadeUp delay={0.2} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/menu"
            style={{
              display: 'inline-block',
              background: 'var(--terra)',
              borderRadius: '9999px',
              padding: '0.9rem 2.5rem',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
            }}
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              border: '1px solid var(--border2)',
              borderRadius: '9999px',
              padding: '0.9rem 2.5rem',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
            }}
          >
            Book a Table
          </Link>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '3rem 2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.1rem',
            color: 'var(--sand)',
          }}
        >
          Mi Casa Café · South Brisbane
        </span>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: 'rgba(212,184,150,0.4)',
          }}
        >
          © 2026 Mi Casa Café
        </span>
      </footer>
    </main>
  )
}
