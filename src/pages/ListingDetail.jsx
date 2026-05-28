import { useState, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getListingBySlug, LISTINGS, SITE, formatPrice } from '../data/index'
import Lightbox from '../components/shared/Lightbox'
import PropertyCard from '../components/listings/PropertyCard'
import RevealWrapper from '../components/shared/RevealWrapper'

export default function ListingDetail() {
  const { slug } = useParams()
  const listing = getListingBySlug(slug)
  const [lbIdx, setLbIdx] = useState(null)

  const similar = useMemo(() =>
    LISTINGS.filter(l => l.slug !== slug && l.area === listing?.area).slice(0, 2),
    [slug, listing]
  )

  if (!listing) return <Navigate to="/listings" replace />

  const total = listing.gallery.length

  return (
    <>
      {/* Gallery */}
      <section className="pt-[84px] bg-paper">
        <div className="container-x pt-8">
          <div className="ld-gallery">
            {listing.gallery.slice(0, 3).map((src, i) => (
              <img key={i} src={src} alt={`${listing.address} ${i + 1}`} onClick={() => setLbIdx(i)} />
            ))}
          </div>
          {listing.gallery.length > 3 && (
            <button onClick={() => setLbIdx(0)} className="text-sm text-muted mt-2 hover:text-gold transition-colors">
              +{listing.gallery.length - 3} more photos
            </button>
          )}
        </div>
      </section>

      {/* Detail body */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-[clamp(2rem,5vw,5rem)]">
            {/* Main content */}
            <div>
              {/* Head */}
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-gold text-[0.78rem] tracking-[0.1em] uppercase">{listing.area} · {listing.type}</p>
                  <h1 className="h2-serif mt-1">{listing.address}</h1>
                </div>
                <div>
                  <p className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-sage">{formatPrice(listing.price)}</p>
                  <span className={`inline-block text-[0.68rem] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mt-1 ${listing.status === 'Sold' ? 'bg-gold text-ink' : 'bg-ink/10 text-ink'}`}>
                    {listing.status}
                  </span>
                </div>
              </div>

              {/* Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden mb-8">
                {[
                  { label: 'Bedrooms', value: listing.beds },
                  { label: 'Bathrooms', value: listing.baths },
                  { label: 'Sq Ft', value: listing.sqft.toLocaleString() },
                  { label: 'Lot', value: listing.lot },
                ].map(f => (
                  <div key={f.label} className="bg-paper py-5 px-4 text-center">
                    <strong className="font-serif text-[1.6rem] font-normal block">{f.value}</strong>
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-muted">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <RevealWrapper>
                <h2 className="font-serif text-2xl mb-4">About this home</h2>
                <p className="lead">{listing.description}</p>
              </RevealWrapper>

              {/* Features */}
              <RevealWrapper delay={80}>
                <h3 className="font-serif text-xl mt-10 mb-4">Features & Highlights</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {listing.features.map((f, i) => (
                    <li key={i} className="flex gap-3 items-baseline py-3 border-b border-ink/8 text-sm">
                      <span className="text-gold flex-shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </RevealWrapper>

              {/* Year / details */}
              <div className="flex gap-6 mt-8 text-sm text-muted">
                <span>Year built: <strong className="text-ink">{listing.year}</strong></span>
                <span>Type: <strong className="text-ink">{listing.type}</strong></span>
              </div>
            </div>

            {/* Agent card */}
            <aside>
              <div className="agent-card">
                <div className="flex items-center gap-4 mb-5">
                  <img src={SITE.agent.portrait} alt={SITE.agent.name} className="w-[72px] h-[72px] rounded-full object-cover" />
                  <div>
                    <p className="font-serif text-lg">{SITE.agent.name.split(',')[0]}</p>
                    <p className="text-xs text-muted mt-0.5">{SITE.agent.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-5">{SITE.agent.credentials}</p>
                <a href={SITE.agent.phoneHref} className="btn btn-dark w-full justify-center mb-3">{SITE.agent.phone}</a>
                <a href={SITE.agent.emailHref} className="btn btn-ghost w-full justify-center text-ink border-ink/20">Send a message</a>
                <p className="text-xs text-muted text-center mt-4">No obligation · Response within 2 hours</p>
              </div>
            </aside>
          </div>

          {/* Similar listings */}
          {similar.length > 0 && (
            <div className="mt-[clamp(4rem,8vw,6rem)]">
              <h2 className="font-serif text-2xl mb-8">Similar properties in {listing.area}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1.5rem,3vw,2.5rem)]">
                {similar.map(l => <PropertyCard key={l.slug} listing={l} />)}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link to="/listings" className="link-underline text-ink">← Back to all listings</Link>
          </div>
        </div>
      </section>

      <Lightbox
        images={listing.gallery}
        idx={lbIdx}
        onClose={() => setLbIdx(null)}
        onPrev={() => setLbIdx(i => (i - 1 + total) % total)}
        onNext={() => setLbIdx(i => (i + 1) % total)}
      />
    </>
  )
}
