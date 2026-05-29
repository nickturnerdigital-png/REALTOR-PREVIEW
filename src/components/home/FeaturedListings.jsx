import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getFeaturedListings } from '../../data/index'
import PropertyCard from '../listings/PropertyCard'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedListings() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const listings = getFeaturedListings()

  useGSAP(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches || window.innerWidth < 860) return

    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    const dist = track.scrollWidth - window.innerWidth
    if (dist <= 0) return

    gsap.to(track, {
      x: -dist,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${dist + window.innerWidth * 0.4}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="section-pad bg-cream overflow-hidden">
      {/* Section head */}
      <div className="container-x flex flex-wrap items-end justify-between gap-4 mb-[clamp(2rem,4vw,3rem)]">
        <div>
          <p className="eyebrow">Featured Residences</p>
          <h2 className="h2-serif mt-3">A curated selection</h2>
        </div>
        <Link to="/listings" className="link-underline text-ink">View all listings →</Link>
      </div>

      {/* Horizontal scroll track */}
      <div ref={trackRef} className="h-scroll-track">
        {listings.map(l => (
          <PropertyCard key={l.slug} listing={l} className="h-scroll-card" />
        ))}
      </div>
    </section>
  )
}
