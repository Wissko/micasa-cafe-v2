'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/story' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Header bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2rem',
          transition: 'background 0.4s ease',
          background: scrolled ? 'rgba(14,11,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        {/* Logo pill */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border2)',
            borderRadius: '9999px',
            padding: '0.55rem 1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--cream)',
              letterSpacing: '0.06em',
            }}
          >
            MC
          </span>
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '18px',
            }}
          >
            <span
              style={{
                display: 'block',
                height: '1px',
                background: 'var(--cream)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '1px',
                background: 'var(--cream)',
                transition: 'opacity 0.3s ease',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                height: '1px',
                background: 'var(--cream)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </span>
        </button>

        {/* CTA pill */}
        <Link
          href="/contact"
          style={{
            background: 'transparent',
            border: '1px solid var(--border2)',
            borderRadius: '9999px',
            padding: '0.55rem 1.4rem',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500,
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            transition: 'border-color 0.3s ease, color 0.3s ease',
          }}
          onMouseEnter={e => {
            ;(e.target as HTMLElement).style.borderColor = 'var(--terra)'
            ;(e.target as HTMLElement).style.color = 'var(--terra)'
          }}
          onMouseLeave={e => {
            ;(e.target as HTMLElement).style.borderColor = 'var(--border2)'
            ;(e.target as HTMLElement).style.color = 'var(--cream)'
          }}
        >
          Book a table
        </Link>
      </header>

      {/* Overlay menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        <nav style={{ marginBottom: 'auto', paddingTop: '6rem' }}>
          {navLinks.map((link, i) => (
            <div
              key={link.href}
              style={{
                overflow: 'hidden',
                marginBottom: '0.5rem',
              }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  color: 'var(--cream)',
                  lineHeight: 1.1,
                  transition: 'color 0.3s ease',
                  transform: open ? 'translateY(0)' : 'translateY(110%)',
                  transitionDelay: open ? `${i * 0.07}s` : '0s',
                  transitionProperty: 'color, transform',
                  transitionDuration: open ? '0.6s' : '0.3s',
                  transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
                }}
                onMouseEnter={e => {
                  ;(e.target as HTMLElement).style.color = 'var(--terra)'
                }}
                onMouseLeave={e => {
                  ;(e.target as HTMLElement).style.color = 'var(--cream)'
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Nav footer */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--sand)',
            }}
          >
            Mi Casa Café · South Brisbane
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--sand)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  )
}
