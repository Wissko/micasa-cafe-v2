'use client'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const breakfast = [
  { name: 'Eggs Benny Mi Casa', price: '$24', desc: 'Halal beef pastrami, hollandaise, toasted brioche' },
  { name: 'Shakshuka Royale', price: '$22', desc: 'Slow-braised tomato, harissa, poached eggs, sourdough' },
  { name: 'Labneh & Avocado Toast', price: '$19', desc: 'Dukkah, pomegranate, za\'atar, sourdough' },
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
  { name: 'Burrata & Heirloom Tomato', price: '$21', desc: 'Za\'atar oil, flaked salt, grilled sourdough' },
]

const drinks = [
  { name: 'Arabic Coffee', price: '$6', desc: 'Traditional cardamom brew, served with dates' },
  { name: 'Rose Latte', price: '$7', desc: 'House rose syrup, steamed oat milk, dried petals' },
  { name: 'Mint Lemonade', price: '$8', desc: 'Fresh mint, lemon, sparkling water, honey' },
  { name: 'Mango Lassi', price: '$9', desc: 'Alphonso mango, yoghurt, cardamom, pistachios' },
]

function MenuItem({ name, price, desc }: { name: string; price: string; desc: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '1.25rem 0',
      borderBottom: '1px solid var(--border)',
      gap: '2rem',
    }}>
      <div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: '1.15rem',
          color: 'var(--cream)',
          marginBottom: '0.35rem',
        }}>{name}</h3>
        <p style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 300,
          fontSize: '0.85rem',
          color: 'var(--muted)',
          lineHeight: 1.6,
        }}>{desc}</p>
      </div>
      <span style={{
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 400,
        fontSize: '0.9rem',
        color: 'var(--caramel)',
        flexShrink: 0,
      }}>{price}</span>
    </div>
  )
}

function MenuItemLight({ name, price, desc }: { name: string; price: string; desc: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '1.25rem 0',
      borderBottom: '1px solid rgba(10,10,10,0.12)',
      gap: '2rem',
    }}>
      <div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: '1.15rem',
          color: '#0a0a0a',
          marginBottom: '0.35rem',
        }}>{name}</h3>
        <p style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 300,
          fontSize: '0.85rem',
          color: 'rgba(10,10,10,0.55)',
          lineHeight: 1.6,
        }}>{desc}</p>
      </div>
      <span style={{
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 400,
        fontSize: '0.9rem',
        color: 'var(--caramel)',
        flexShrink: 0,
      }}>{price}</span>
    </div>
  )
}

export default function Menu() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/IMG_5797.jpeg"
          alt="Mi Casa Menu"
          fill
          unoptimized
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '3.5rem',
          left: '2.5rem',
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.9,
            color: 'var(--cream)',
          }}>Menu</h1>
        </div>
      </section>

      {/* ─── BREAKFAST — fond noir, photo split gauche ─── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          minHeight: '60vh',
        }}>
          {/* Image left */}
          <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
            <Image
              src="/images/IMG_5787.jpeg"
              alt="Breakfast at Mi Casa"
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
          {/* Items right */}
          <div style={{ padding: 'clamp(3rem,5vw,5rem)' }}>
            <FadeUp>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--caramel)',
                marginBottom: '0.75rem',
              }}>Morning</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--cream)',
                marginBottom: '2rem',
                lineHeight: 1.1,
              }}>Breakfast</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              {breakfast.map(item => <MenuItem key={item.name} {...item} />)}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── BRUNCH — fond cream, photo plein-bleed entre titre et plats ─── */}
      <section style={{ background: 'var(--cream-bg)', padding: 'clamp(4rem,8vw,7rem) 2.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '0.75rem',
            }}>Late Morning</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0a0a0a',
              marginBottom: '2.5rem',
              lineHeight: 1.1,
            }}>Brunch</h2>
          </FadeUp>
        </div>
        {/* Photo plein-bleed */}
        <div style={{
          position: 'relative',
          width: '100vw',
          marginLeft: 'calc(-2.5rem)',
          height: '55vh',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          <Image
            src="/images/IMG_5790.jpeg"
            alt="Brunch at Mi Casa"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeUp>
            {brunch.map(item => <MenuItemLight key={item.name} {...item} />)}
          </FadeUp>
        </div>
      </section>

      {/* ─── SHARING PLATES — fond noir, photo split droite ─── */}
      <section style={{ background: 'var(--bg)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          minHeight: '60vh',
        }}>
          {/* Items left */}
          <div style={{ padding: 'clamp(3rem,5vw,5rem)' }}>
            <FadeUp>
              <p style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--caramel)',
                marginBottom: '0.75rem',
              }}>For the table</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--cream)',
                marginBottom: '2rem',
                lineHeight: 1.1,
              }}>Sharing Plates</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              {sharing.map(item => <MenuItem key={item.name} {...item} />)}
            </FadeUp>
          </div>
          {/* Image right */}
          <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
            <Image
              src="/images/IMG_5793.jpeg"
              alt="Sharing plates at Mi Casa"
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
      </section>

      {/* ─── DRINKS — fond cream, photo plein-bleed ─── */}
      <section style={{ background: 'var(--cream-bg)', padding: 'clamp(4rem,8vw,7rem) 2.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeUp>
            <p style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--caramel)',
              marginBottom: '0.75rem',
            }}>All day</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0a0a0a',
              marginBottom: '2.5rem',
              lineHeight: 1.1,
            }}>Drinks</h2>
          </FadeUp>
        </div>
        {/* Photo plein-bleed */}
        <div style={{
          position: 'relative',
          width: '100vw',
          marginLeft: 'calc(-2.5rem)',
          height: '50vh',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          <Image
            src="/images/IMG_5795.jpeg"
            alt="Drinks at Mi Casa"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeUp>
            {drinks.map(item => <MenuItemLight key={item.name} {...item} />)}
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
