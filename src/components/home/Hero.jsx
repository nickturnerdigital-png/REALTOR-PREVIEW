import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80',
    alt: 'Oceanfront estate Oak Bay Victoria',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    alt: 'Luxury interior Victoria BC',
  },
  {
    src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80',
    alt: 'Contemporary home Victoria BC',
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const mediaRef = useRef(null)

  // Slideshow
  useEffect(() => {
    const id = setInterval(() => setSlide(i => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [])

  // GSAP: SplitText headline + parallax
  useGSAP(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const title = titleRef.current
    if (!title) return

    const split = new SplitText(title, { type: 'chars,words' })
    const tl = gsap.timeline({ delay: 1.4 })
    tl.from(split.chars, {
      y: 90,
      opacity: 0,
      duration: 1.0,
      ease: 'power4.out',
      stagger: 0.022,
    })
    tl.from('.hero-sub', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    tl.from('.hero-actions .btn', { y: 18, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')

    // Parallax
    if (mediaRef.current) {
      gsap.to(mediaRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    return () => { split.revert(); tl.kill() }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-svh flex items-end text-cream overflow-hidden">
      {/* Media / Slides */}
      <div ref={mediaRef} className="absolute inset-0 -z-20 scale-110">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}>
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-full object-cover"
              fetchPriority={i === 0 ? 'high' : 'auto'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/15 to-ink/75 z-10" />
        {/* Noise grain */}
        <div className="hero-noise" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 w-full pb-[clamp(4rem,9vh,8rem)] pt-[calc(84px+2rem)]">
        <p className="eyebrow" style={{ color: '#CCA87A' }}>Victoria · British Columbia</p>

        <h1 ref={titleRef} className="display mt-5 max-w-[16ch]">
          Victoria's most coveted addresses
        </h1>

        <p className="hero-sub lead text-cream/80 mt-6 max-w-[46ch]" style={{ opacity: 0 }}>
          A boutique advisory representing buyers and sellers of Victoria's finest oceanfront
          estates, heritage homes and architectural residences.
        </p>

        <div className="hero-actions flex flex-wrap gap-4 mt-9">
          <Link to="/listings" className="btn btn-brass btn-lg">
            Browse Listings <span className="arrow">→</span>
          </Link>
          <Link to="/sell" className="btn btn-ghost btn-lg">
            Request a Valuation
          </Link>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-400 ${i === slide ? 'bg-gold w-6' : 'bg-cream/30'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  )
}
