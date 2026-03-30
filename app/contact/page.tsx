'use client'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export default function Contact() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ─── HERO ─── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(8rem,15vw,13rem) 2.5rem clamp(4rem,8vw,7rem)',
      }}>
        <div style={{ maxWidth: '900px' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '1.5rem',
            }}>Book a Table</p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 1.0,
              color: 'var(--cream)',
              marginBottom: '2rem',
            }}>
              Come as you are.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <address style={{
              fontStyle: 'italic',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 300,
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              color: 'var(--muted)',
              lineHeight: 1.5,
            }}>
              4/275 Grey Street<br />
              South Brisbane, Queensland<br />
              Australia
            </address>
          </FadeUp>
        </div>
      </section>

      {/* ─── FORMULAIRE ─── */}
      <section style={{
        background: 'var(--cream-bg)',
        padding: 'clamp(5rem,10vw,8rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <FadeUp>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0a0a0a',
              marginBottom: '3rem',
              lineHeight: 1.1,
            }}>Make a reservation</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <form
              onSubmit={e => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'date', label: 'Date', type: 'date', placeholder: '' },
              ].map(field => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      display: 'block',
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(10,10,10,0.5)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(10,10,10,0.2)',
                      padding: '0.6rem 0',
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '1rem',
                      color: '#0a0a0a',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--caramel)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(10,10,10,0.2)')}
                  />
                </div>
              ))}

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(10,10,10,0.5)',
                    marginBottom: '0.6rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Party size, dietary requirements, anything you'd like us to know..."
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(10,10,10,0.2)',
                    padding: '0.6rem 0',
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: '#0a0a0a',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--caramel)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(10,10,10,0.2)')}
                />
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    background: 'var(--caramel)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.9rem 2.5rem',
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#0a0a0a',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send
                </button>
              </div>
            </form>
          </FadeUp>
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
