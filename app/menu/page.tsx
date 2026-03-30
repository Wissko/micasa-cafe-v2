import SVGMaskReveal from '@/components/SVGMaskReveal'
import FadeUp from '@/components/FadeUp'
import Link from 'next/link'

const menuSections = [
  {
    title: 'Breakfast & Brunch',
    img: '/images/IMG_5787.jpeg',
    items: [
      { name: 'Mi Casa Big Breakfast', desc: 'Eggs your way, halal beef sausage, roasted tomato, mushroom, sourdough', price: '$24' },
      { name: 'Shakshuka Royale', desc: 'Slow-braised tomato, harissa, poached eggs, labne, sourdough', price: '$22' },
      { name: 'Avocado & Labneh Toast', desc: 'Smashed avo, whipped labneh, dukkah, chilli oil, seed cracker', price: '$20' },
      { name: 'Acai Power Bowl', desc: 'Blended acai, banana, granola, seasonal fruit, honey', price: '$18' },
      { name: 'French Toast', desc: 'Brioche, mascarpone, berry compote, maple syrup', price: '$19' },
      { name: 'Halloumi Wrap', desc: 'Grilled halloumi, roasted capsicum, greens, tahini, wrap', price: '$18' },
    ],
  },
  {
    title: 'Lunch',
    img: '/images/IMG_5793.jpeg',
    items: [
      { name: 'Levantine Chicken Burger', desc: 'Zaatar chicken, garlic labne, pickled onion, baby gem, brioche bun', price: '$22' },
      { name: 'Falafel Plate', desc: 'House falafel, hummus, tabbouleh, warm pita, chilli sauce', price: '$21' },
      { name: 'Grilled Salmon Bowl', desc: 'Herb-crusted salmon, freekeh, roasted vegetables, tahini dressing', price: '$28' },
      { name: 'Cauliflower Steak', desc: 'Whole roasted cauliflower, chermoula, pomegranate, almonds', price: '$24' },
    ],
  },
  {
    title: 'Sharing Plates',
    img: '/images/IMG_5794.jpeg',
    items: [
      { name: 'Feast Platter (for 2)', desc: 'Selection of dips, mezze, grilled items, warm breads', price: '$55' },
      { name: 'Hummus Board', desc: 'Whipped hummus, zaatar oil, crispy chickpeas, warm pita', price: '$18' },
      { name: 'Mushroom Fatteh', desc: 'Crispy pita, yoghurt, sautéed mushroom, sumac, pine nuts', price: '$21' },
      { name: 'Baba Ghanoush', desc: 'Charred eggplant, pomegranate molasses, fresh herbs, pita', price: '$16' },
      { name: 'Kibbeh Bites', desc: 'Fried bulghur shells, spiced lamb, pine nuts, mint yoghurt', price: '$17' },
    ],
  },
  {
    title: 'Drinks',
    img: '/images/IMG_5798.jpeg',
    items: [
      { name: 'Specialty Coffee', desc: 'Espresso, flat white, long black, cappuccino, latte — single origin beans', price: 'from $4.5' },
      { name: 'Cold Brew', desc: '18-hour cold brewed, served over ice', price: '$7' },
      { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, oat milk, vanilla', price: '$7.5' },
      { name: 'Rose Lemonade', desc: 'Fresh lemon, rose water, soda, mint', price: '$8' },
      { name: 'Mango Lassi', desc: 'Alphonso mango, yoghurt, cardamom', price: '$8' },
      { name: 'Moroccan Mint Tea', desc: 'Pot of fresh brewed mint tea, served traditionally', price: '$6' },
    ],
  },
]

export default function MenuPage() {
  return (
    <main style={{ background: 'var(--bg)', paddingTop: '5rem' }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(3rem, 8vw, 7rem) 2rem' }}>
        <FadeUp>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>South Brisbane · 100% Halal</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              color: 'var(--cream)',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            The Menu
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--sand)',
              maxWidth: '420px',
              lineHeight: 1.7,
            }}
          >
            Mediterranean-Oriental fusion, slow mornings, shared feasts.
            Every item made fresh, every plate worth lingering over.
          </p>
        </FadeUp>
      </section>

      {/* Menu sections */}
      {menuSections.map((section, sIdx) => (
        <section
          key={section.title}
          style={{
            padding: 'clamp(4rem, 8vw, 7rem) 2rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Image col */}
            <FadeUp>
              <SVGMaskReveal
                src={section.img}
                alt={section.title}
                aspectRatio="4/5"
              />
            </FadeUp>

            {/* Items col */}
            <div>
              <FadeUp>
                <h2
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'var(--cream)',
                    marginBottom: '2.5rem',
                  }}
                >
                  {section.title}
                </h2>
              </FadeUp>

              {section.items.map((item, iIdx) => (
                <FadeUp key={item.name} delay={iIdx * 0.07}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.2rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: '1.15rem',
                          color: 'var(--cream)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.82rem',
                          color: 'var(--sand)',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.9rem',
                        color: 'var(--terra)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* SVGMaskReveal bottom banner */}
      <section style={{ padding: '0 2rem clamp(4rem, 8vw, 7rem)' }}>
        <SVGMaskReveal
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Café feast"
          aspectRatio="21/9"
        />
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(4rem, 8vw, 7rem) 2rem',
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
        }}
      >
        <FadeUp>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--cream)',
              marginBottom: '1.5rem',
            }}
          >
            Ready to join us?
          </h3>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Link
            href="/contact"
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
