import Image from 'next/image'
import Link from 'next/link'
import SVGMaskReveal from '@/components/SVGMaskReveal'
import FadeUp from '@/components/FadeUp'

const menuHighlights = [
  {
    name: 'Shakshuka Royale',
    desc: 'Slow-braised tomato, harissa, poached eggs, sourdough',
    price: '$22',
    img: '/images/IMG_5792.jpeg',
  },
  {
    name: 'Levantine Platter',
    desc: 'Hummus, baba ghanoush, falafel, warm pita',
    price: '$28',
    img: '/images/IMG_5795.jpeg',
  },
  {
    name: 'Mi Casa Brunch Board',
    desc: 'Seasonal greens, labneh, dukkah, soft eggs',
    price: '$26',
    img: '/images/IMG_5796.jpeg',
  },
  {
    name: 'Mushroom Fatteh',
    desc: 'Crispy pita, yoghurt, sumac, toasted pine nuts',
    price: '$21',
    img: '/images/IMG_5797.jpeg',
  },
]

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '100dvh',
          minHeight: '600px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Café feast platter"
          fill
          unoptimized
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(14,11,8,0.92) 0%, rgba(14,11,8,0.4) 50%, rgba(14,11,8,0.1) 100%)',
          }}
        />
        {/* Hero text */}
        <div
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: '2rem',
            right: '2rem',
            maxWidth: '680px',
          }}
        >
          <p className="overline" style={{ marginBottom: '1rem' }}>
            South Brisbane · 100% Halal
          </p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(5rem, 14vw, 10rem)',
              lineHeight: 0.9,
              color: 'var(--cream)',
              marginBottom: '0.2rem',
            }}
          >
            Mi Casa
          </h1>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1,
              color: 'var(--sand)',
              marginBottom: '1.5rem',
            }}
          >
            Café
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--sand)',
              marginBottom: '2rem',
              maxWidth: '360px',
            }}
          >
            Where every table feels like home.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                background: 'var(--terra)',
                borderRadius: '9999px',
                padding: '0.8rem 2rem',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                transition: 'opacity 0.3s ease',
              }}
            >
              View Menu
            </Link>
            <a
              href="#find-us"
              style={{
                display: 'inline-block',
                background: 'transparent',
                border: '1px solid var(--border2)',
                borderRadius: '9999px',
                padding: '0.8rem 2rem',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                transition: 'border-color 0.3s ease',
              }}
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* Statement section */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <FadeUp>
          <p className="overline" style={{ marginBottom: '2rem' }}>Our Philosophy</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.1,
              color: 'var(--cream)',
              marginBottom: '2.5rem',
            }}
          >
            Food that brings people together.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--sand)',
              maxWidth: '560px',
            }}
          >
            Born in South Brisbane, shaped by the warmth of the Mediterranean and the spice of the Middle East.
            Mi Casa is where casual meets considered — a space for long mornings, shared plates,
            and the kind of food that makes you want to stay a little longer.
            Every dish is 100% Halal, every moment designed to feel like yours.
          </p>
        </FadeUp>
      </section>

      {/* 3 Photo reveal section */}
      <section
        style={{
          padding: '0 2rem clamp(5rem, 10vw, 9rem)',
        }}
      >
        <FadeUp style={{ marginBottom: '3rem' }}>
          <p className="overline">The Space</p>
        </FadeUp>
        {/* Desktop: 3 cols / Mobile: horizontal scroll */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <SVGMaskReveal
            src="/images/IMG_5787.jpeg"
            alt="Mi Casa Café interior"
            aspectRatio="3/4"
          />
          <SVGMaskReveal
            src="/images/IMG_5793.jpeg"
            alt="Mi Casa Café dishes"
            aspectRatio="3/4"
          />
          <SVGMaskReveal
            src="/images/IMG_5794.jpeg"
            alt="Mi Casa Café atmosphere"
            aspectRatio="3/4"
          />
        </div>
      </section>

      {/* Menu highlights — fond crème */}
      <section
        style={{
          background: 'var(--cream)',
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeUp>
            <p className="overline" style={{ color: 'var(--terra)', marginBottom: '1rem' }}>
              Menu Highlights
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                color: 'var(--bg)',
                marginBottom: '4rem',
                lineHeight: 1.1,
              }}
            >
              A few of our favourites.
            </h2>
          </FadeUp>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {menuHighlights.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.1}>
                <div
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div className="img-hover" style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: '1.25rem',
                          color: 'var(--cream)',
                        }}
                      >
                        {item.name}
                      </h3>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.9rem',
                          color: 'var(--terra)',
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.85rem',
                        color: 'var(--sand)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                border: '1px solid var(--bg)',
                borderRadius: '9999px',
                padding: '0.9rem 2.5rem',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                transition: 'background 0.3s ease, color 0.3s ease',
              }}
            >
              Full Menu
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Find Us section */}
      <section
        id="find-us"
        style={{
          padding: 'clamp(5rem, 12vw, 10rem) 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left col */}
          <div>
            <FadeUp>
              <p className="overline" style={{ marginBottom: '2rem' }}>Find Us</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  color: 'var(--cream)',
                  lineHeight: 1.05,
                  marginBottom: '2.5rem',
                }}
              >
                Come as you are.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  color: 'var(--sand)',
                  lineHeight: 1.3,
                  marginBottom: '2rem',
                }}
              >
                4/275 Grey Street
                <br />
                South Brisbane, QLD
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a
                href="https://www.google.com/maps/search/4%2F275+Grey+Street+South+Brisbane+QLD"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  border: '1px solid var(--border2)',
                  borderRadius: '9999px',
                  padding: '0.8rem 2rem',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
              >
                Get Directions
              </a>
            </FadeUp>
          </div>

          {/* Right col: hours */}
          <FadeUp delay={0.15}>
            <div>
              <p className="overline" style={{ marginBottom: '2rem' }}>Hours</p>
              {[
                { day: 'Monday', hours: 'Closed' },
                { day: 'Tuesday', hours: '7:30am — 3pm' },
                { day: 'Wednesday', hours: '7:30am — 3pm' },
                { day: 'Thursday', hours: '7:30am — 3pm' },
                { day: 'Friday', hours: '7:30am — 3pm' },
                { day: 'Saturday', hours: '8am — 4pm' },
                { day: 'Sunday', hours: '8am — 4pm' },
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.8rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: 'var(--sand)',
                    }}
                  >
                    {day}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: hours === 'Closed' ? 'rgba(212,184,150,0.4)' : 'var(--cream)',
                    }}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer image — SVGMaskReveal */}
      <div style={{ padding: '0 2rem' }}>
        <SVGMaskReveal
          src="/images/IMG_5799.jpeg"
          alt="Mi Casa Café South Brisbane"
          aspectRatio="21/9"
        />
      </div>

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
          marginTop: '2rem',
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
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="overline"
            style={{ color: 'var(--sand)' }}
          >
            Instagram
          </a>
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
        </div>
      </footer>
    </main>
  )
}
