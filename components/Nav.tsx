'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 2rem',
      }}>
        {/* Logo button — inspired by Mi Casa scanline logo */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(10,10,10,0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(212,136,58,0.25)',
            borderRadius: '6px',
            padding: '0.5rem 0.9rem',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Scanline overlay — stries horizontales comme le logo */}
          <span aria-hidden style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(212,136,58,0.12) 3px, rgba(212,136,58,0.12) 4px)',
            pointerEvents: 'none',
          }} />
          {/* MI CASA condensed */}
          <span style={{
            position: 'relative',
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            display: 'block',
            lineHeight: 1,
          }}>
            MI CASA
          </span>
        </button>

        {/* Book a table CTA */}
        <Link
          href="/contact"
          style={{
            background: 'var(--caramel)',
            borderRadius: '9999px',
            padding: '0.6rem 1.4rem',
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
          Book a table
        </Link>
      </header>

      {/* Full-screen overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99,
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.55s cubic-bezier(0.77,0,0.175,1)',
        pointerEvents: open ? 'all' : 'none',
      }}>
        <nav style={{ paddingTop: '6rem' }}>
          {navLinks.map((link, i) => (
            <div key={link.href} style={{ overflow: 'hidden', marginBottom: '0.4rem' }}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  color: 'var(--cream)',
                  lineHeight: 1.1,
                  transition: `color 0.3s ease, transform ${open ? '0.6s' : '0.3s'} cubic-bezier(0.77,0,0.175,1)`,
                  transitionDelay: open ? `${i * 0.07}s` : '0s',
                  transform: open ? 'translateY(0)' : 'translateY(110%)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--caramel)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--cream)')}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div style={{
          marginTop: 'auto',
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            Mi Casa Cafe · South Brisbane
          </span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a
              href="https://www.instagram.com/micasacafe_"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              @micasacafe_
            </a>
            <a
              href="https://www.instagram.com/micasacafesb"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              @micasacafesb
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
