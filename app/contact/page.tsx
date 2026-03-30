'use client'
import { useState } from 'react'
import SVGMaskReveal from '@/components/SVGMaskReveal'
import FadeUp from '@/components/FadeUp'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border2)',
    padding: '0.9rem 0',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 300,
    fontSize: '0.95rem',
    color: 'var(--cream)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.6rem',
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: 'var(--sand)',
    marginBottom: '0.25rem',
    marginTop: '1.75rem',
  }

  return (
    <main style={{ background: 'var(--bg)', paddingTop: '5rem' }}>

      {/* Header */}
      <section style={{ padding: 'clamp(3rem, 8vw, 7rem) 2rem clamp(2rem, 4vw, 3rem)' }}>
        <FadeUp>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>Get In Touch</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 9vw, 6.5rem)',
              color: 'var(--cream)',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            Come find us.
          </h1>
        </FadeUp>
      </section>

      {/* Main grid */}
      <section
        style={{
          padding: '0 2rem clamp(5rem, 10vw, 9rem)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
          }}
        >
          {/* Left: info */}
          <div>
            <FadeUp>
              <div style={{ marginBottom: '3rem' }}>
                <p className="overline" style={{ marginBottom: '1.5rem' }}>Location</p>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    color: 'var(--cream)',
                    lineHeight: 1.3,
                    marginBottom: '1.5rem',
                  }}
                >
                  4/275 Grey Street
                  <br />
                  South Brisbane, QLD
                </p>
                <a
                  href="https://www.google.com/maps/search/4%2F275+Grey+Street+South+Brisbane+QLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    border: '1px solid var(--border2)',
                    borderRadius: '9999px',
                    padding: '0.7rem 1.75rem',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.72rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--cream)',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  Get Directions
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div style={{ marginBottom: '3rem' }}>
                <p className="overline" style={{ marginBottom: '1.5rem' }}>Hours</p>
                {[
                  { day: 'Monday', hours: 'Closed' },
                  { day: 'Tue — Fri', hours: '7:30am — 3pm' },
                  { day: 'Sat — Sun', hours: '8am — 4pm' },
                ].map(({ day, hours }) => (
                  <div
                    key={day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0',
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
                        color: hours === 'Closed' ? 'rgba(212,184,150,0.35)' : 'var(--cream)',
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div>
                <p className="overline" style={{ marginBottom: '1.5rem' }}>Follow Along</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                    color: 'var(--sand)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  @micasacafe
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.1}>
            <div>
              <p className="overline" style={{ marginBottom: '2rem' }}>Book a Table</p>

              {sent ? (
                <div
                  style={{
                    padding: '3rem 0',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '2rem',
                      color: 'var(--cream)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Thank you.
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: 'var(--sand)',
                    }}
                  >
                    We will be in touch to confirm your booking shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => setForm({ ...form, date: e.target.value })}
                        style={{ ...inputStyle, colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Guests</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        placeholder="2"
                        value={form.guests}
                        onChange={e => setForm({ ...form, guests: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Message (optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Special requests, dietary requirements..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '100px',
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '2.5rem' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'var(--terra)',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '0.9rem 2.5rem',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '0.72rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--cream)',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Map-style image reveal */}
      <section style={{ padding: '0 2rem' }}>
        <SVGMaskReveal
          src="/images/IMG_5795.jpeg"
          alt="Mi Casa Café South Brisbane atmosphere"
          aspectRatio="21/9"
        />
      </section>

      {/* Address statement */}
      <section
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <FadeUp>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              color: 'var(--cream)',
              lineHeight: 1.15,
              maxWidth: '700px',
            }}
          >
            4/275 Grey Street
            <br />
            <span style={{ color: 'var(--sand)' }}>South Brisbane, Queensland</span>
          </p>
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
