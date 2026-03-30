'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function BlindReveal({
  src, alt, aspect = '4/3', numBlinds = 8
}: { src: string; alt: string; aspect?: string; numBlinds?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const blinds = wrapRef.current?.querySelectorAll('.blind-strip')
      if (!blinds?.length) return

      ctx = gsap.context(() => {
        gsap.fromTo(blinds,
          { scaleY: 1, transformOrigin: 'top center' },
          {
            scaleY: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: { each: 0.07, from: 'edges' },
            scrollTrigger: {
              trigger: wrapRef.current,
              start: 'top 80%',
              end: 'top 25%',
              scrub: 1,
            },
          }
        )
      }, wrapRef)
    })()
    return () => ctx?.revert()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="img-hover-wrap"
      style={{ position: 'relative', aspectRatio: aspect, overflow: 'hidden', width: '100%' }}
    >
      <Image src={src} alt={alt} fill unoptimized style={{ objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', pointerEvents: 'none' }}>
        {Array.from({ length: numBlinds }).map((_, i) => (
          <div
            key={i}
            className="blind-strip"
            style={{
              flex: 1,
              background: 'var(--black, #111010)',
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>
    </div>
  )
}
