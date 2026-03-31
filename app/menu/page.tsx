'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/* ─── DATA ─── */

const breakfast = [
  { name: 'Eggs Benny Mi Casa', price: '$24', desc: 'Halal beef pastrami, hollandaise, toasted brioche' },
  { name: 'Shakshuka Royale', price: '$22', desc: 'Slow-braised tomato, harissa, poached eggs, sourdough' },
  { name: "Labneh & Avocado Toast", price: '$19', desc: "Dukkah, pomegranate, za'atar, sourdough" },
  { name: 'Breakfast Platter', price: '$28', desc: 'Halal sausage, eggs, grilled tomato, mushrooms, toast' },
]

const brunch = [
  { name: 'Mi Casa Brunch Board', price: '$26', desc: 'Seasonal greens, labneh, dukkah, soft eggs, house pita' },
  { name: 'Fatteh Bowl', price: '$23', desc: 'Crispy pita, warm chickpeas, yoghurt, sumac, pine nuts' },
  { name: 'Chicken Shawarma Waffle', price: '$27', desc: 'House-spiced chicken, garlic sauce, pickled turnip' },
  { name: 'Smoked Salmon Platter', price: '$25', desc: 'Cream cheese, capers, red onion, bagel chips' },
]

const sharing = [
  { name: 'Levantine Mezze Board', price: '$38', desc: 'Hummus, baba ghanoush, muhammara, falafel, pita' },
  { name: 'Crispy Cauliflower', price: '$18', desc: 'Tahini, pomegranate molasses, fresh herbs' },
  { name: 'Lamb Cigars', price: '$22', desc: 'Spiced minced lamb, pine nuts, yoghurt dipping sauce' },
  { name: "Burrata & Heirloom Tomato", price: '$21', desc: "Za'atar oil, flaked salt, grilled sourdough" },
]

const drinks = [
  { name: 'Arabic Coffee', price: '$6', desc: 'Traditional cardamom brew, served with dates' },
  { name: 'Rose Latte', price: '$7', desc: 'House rose syrup, steamed oat milk, dried petals' },
  { name: 'Mint Lemonade', price: '$8', desc: 'Fresh mint, lemon, sparkling water, honey' },
  { name: 'Mango Lassi', price: '$9', desc: 'Alphonso mango, yoghurt, cardamom, pistachios' },
]

const SECTIONS = [
  { id: 'breakfast', label: 'Breakfast', sublabel: 'Morning', items: breakfast },
  { id: 'brunch', label: 'Brunch', sublabel: 'Late Morning', items: brunch },
  { id: 'sharing', label: 'Sharing', sublabel: 'For the table', items: sharing },
  { id: 'drinks', label: 'Drinks', sublabel: 'All day', items: drinks },
]

/* ─── ANIMATED DIVIDER ─── */

function AnimatedDivider() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref} style={{ overflow: 'hidden', margin: '0 0 4rem' }}>
      <motion.div
        initial={{ width: '0%' }}
        animate={inView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          background: 'var(--border)',
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}

/* ─── MENU ITEM ─── */

function MenuItem({
  name,
  price,
  desc,
  index,
}: {
  name: string
  price: string
  desc: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '2.5rem 1fr auto',
        alignItems: 'flex-start',
        gap: '1.25rem',
        padding: '1.75rem 0',
        borderBottom: '1px solid var(--border)',
        cursor: 'default',
      }}
    >
      {/* Line number */}
      <span
        style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 300,
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: hovered ? 'var(--caramel)' : 'rgba(212, 136, 58, 0.18)',
          transition: 'color 0.35s ease',
          paddingTop: '0.2rem',
          userSelect: 'none',
        }}
      >
        {num}
      </span>

      {/* Name + desc */}
      <div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--cream)',
              lineHeight: 1.25,
              marginBottom: '0.4rem',
            }}
          >
            {name}
          </h3>
          {/* Sliding caramel underline */}
          <motion.div
            initial={false}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            style={{
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: '100%',
              height: '1px',
              background: 'var(--caramel)',
              originX: 0,
            }}
          />
        </div>
        <p
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '0.82rem',
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginTop: '0.35rem',
            maxWidth: '46ch',
          }}
        >
          {desc}
        </p>
      </div>

      {/* Price */}
      <span
        style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 400,
          fontSize: '0.9rem',
          color: 'var(--caramel)',
          flexShrink: 0,
          paddingTop: '0.2rem',
          letterSpacing: '0.04em',
        }}
      >
        {price}
      </span>
    </motion.div>
  )
}

/* ─── SECTION ─── */

function MenuSection({
  id,
  label,
  sublabel,
  items,
  isLast,
}: {
  id: string
  label: string
  sublabel: string
  items: typeof breakfast
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '860px',
        margin: '0 auto',
        scrollMarginTop: '80px',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--caramel)',
            marginBottom: '0.65rem',
          }}
        >
          {sublabel}
        </p>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            color: 'var(--cream)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </h2>
      </motion.div>

      {/* Items */}
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {items.map((item, i) => (
          <motion.div key={item.name} variants={itemVariants}>
            <MenuItem {...item} index={i} />
          </motion.div>
        ))}
      </motion.div>

      {/* Animated divider between sections */}
      {!isLast && (
        <div style={{ marginTop: '5rem' }}>
          <AnimatedDivider />
        </div>
      )}
    </section>
  )
}

/* ─── STICKY NAV ─── */

function StickyNav({ activeId }: { activeId: string }) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(17,16,16,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(1.5rem, 4vw, 3.5rem)',
        padding: '0 1.5rem',
      }}
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: isActive ? 500 : 300,
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--caramel)' : 'var(--muted)',
              padding: '1.15rem 0',
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--caramel)',
                  borderRadius: '2px 2px 0 0',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}

/* ─── PAGE ─── */

export default function Menu() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id)

  /* IntersectionObserver for nav active state */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ─── HERO ─── */}
      <section
        style={{
          height: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative number watermark */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            right: 'clamp(1.5rem, 6vw, 5rem)',
            transform: 'translateY(-50%)',
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(12rem, 28vw, 22rem)',
            lineHeight: 1,
            color: 'rgba(245, 240, 230, 0.025)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
          }}
        >
          M
        </span>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '1.25rem',
            }}
          >
            Mi Casa Cafe
          </p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(5rem, 16vw, 13rem)',
              lineHeight: 0.88,
              color: 'var(--cream)',
              letterSpacing: '-0.025em',
              marginBottom: '2.5rem',
            }}
          >
            Menu
          </h1>
          <p
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
              color: 'var(--muted)',
              letterSpacing: '0.06em',
              maxWidth: '38ch',
              lineHeight: 1.7,
            }}
          >
            Levantine flavours, morning light. Every dish crafted with intention.
          </p>
        </motion.div>
      </section>

      {/* ─── STICKY NAV ─── */}
      <StickyNav activeId={activeId} />

      {/* ─── MENU SECTIONS ─── */}
      <div style={{ background: 'var(--bg)' }}>
        {SECTIONS.map((section, i) => (
          <MenuSection
            key={section.id}
            {...section}
            isLast={i === SECTIONS.length - 1}
          />
        ))}
      </div>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '2.5rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.1rem',
            color: 'var(--muted)',
          }}
        >
          Mi Casa Cafe
        </span>
        <Link
          href="/"
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
          }}
        >
          Back to home
        </Link>
      </footer>
    </main>
  )
}
