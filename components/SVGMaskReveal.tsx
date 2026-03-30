'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface SVGMaskRevealProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
}

const NUM_BLINDS = 8

export default function SVGMaskReveal({ src, alt, aspectRatio = '4/3', className = '' }: SVGMaskRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<SVGSVGElement>(null)

  // Generate a stable ID from src
  const maskId = `blinds-mask-${src.replace(/[^a-zA-Z0-9]/g, '-').slice(-20)}`

  useEffect(() => {
    let ScrollTrigger: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger: ST } = await import('gsap/ScrollTrigger')
      ScrollTrigger = ST
      gsap.registerPlugin(ST)

      const rects = maskRef.current?.querySelectorAll('rect')
      if (!rects || !containerRef.current) return

      gsap.fromTo(
        rects,
        { scaleY: 1, transformOrigin: 'center center' },
        {
          scaleY: 0,
          duration: 0.6,
          ease: 'power3.inOut',
          stagger: { each: 0.06, from: 'center' },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 20%',
            scrub: 0.8,
          },
        }
      )
    })()

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => t.kill())
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`img-hover ${className}`}
      style={{ position: 'relative', aspectRatio, overflow: 'hidden', width: '100%' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        style={{ objectFit: 'cover' }}
        data-img
      />
      <svg
        ref={maskRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id={maskId}>
            {Array.from({ length: NUM_BLINDS }).map((_, i) => (
              <rect
                key={i}
                x="0"
                y={`${(i / NUM_BLINDS) * 100}`}
                width="100"
                height={`${100 / NUM_BLINDS + 0.5}`}
                fill="white"
              />
            ))}
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="#0e0b08"
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  )
}
