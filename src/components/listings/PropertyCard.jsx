import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../data/index'

export default function PropertyCard({ listing, className = '' }) {
  const cardRef = useRef(null)
  const mediaRef = useRef(null)

  const onMove = (e) => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale3d(1.02,1.02,1.02)`
  }

  const onLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <Link
      to={`/listings/${listing.slug}`}
      ref={cardRef}
      className={`card-tilt block ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div ref={mediaRef} className="card-media">
        <img src={listing.hero} alt={listing.address} />
        <span className={`card-badge ${listing.status === 'Sold' ? 'sold' : ''}`}>
          {listing.status}
        </span>
        <span className="card-price">{formatPrice(listing.price)}</span>
        <span className="card-view-hint">View Property →</span>
      </div>

      <div className="pt-4">
        <h3 className="font-serif text-xl font-normal">{listing.address}</h3>
        <p className="text-gold text-[0.78rem] tracking-[0.08em] uppercase mt-1">{listing.area}</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">{listing.blurb}</p>
        <div className="flex gap-5 mt-4 pt-4 border-t border-ink/10 text-[0.85rem] text-muted">
          <span><strong className="text-ink font-semibold">{listing.beds}</strong> bd</span>
          <span><strong className="text-ink font-semibold">{listing.baths}</strong> ba</span>
          <span><strong className="text-ink font-semibold">{listing.sqft.toLocaleString()}</strong> sqft</span>
        </div>
      </div>
    </Link>
  )
}
