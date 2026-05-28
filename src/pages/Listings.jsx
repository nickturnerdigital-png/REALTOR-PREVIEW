import { useState, useMemo } from 'react'
import PageHero from '../components/shared/PageHero'
import FilterBar from '../components/listings/FilterBar'
import PropertyCard from '../components/listings/PropertyCard'
import RevealWrapper from '../components/shared/RevealWrapper'
import { LISTINGS } from '../data/index'

const DEFAULT = { area: 'All Areas', type: 'All Types', price: 'Any Price', status: 'All Status' }

export default function Listings() {
  const [filters, setFilters] = useState(DEFAULT)

  function onChange(key, val) { setFilters(f => ({ ...f, [key]: val })) }

  const filtered = useMemo(() => LISTINGS.filter(l => {
    if (filters.area !== 'All Areas' && l.area !== filters.area) return false
    if (filters.type !== 'All Types' && l.type !== filters.type) return false
    if (filters.status !== 'All Status' && l.status !== filters.status) return false
    if (filters.price === 'Under $2M' && l.price >= 2000000) return false
    if (filters.price === '$2M – $4M' && (l.price < 2000000 || l.price > 4000000)) return false
    if (filters.price === '$4M+' && l.price <= 4000000) return false
    return true
  }), [filters])

  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Victoria's finest homes"
        subtitle="A carefully curated selection of the region's most distinguished properties."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
        breadcrumb="Listings"
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <FilterBar listings={LISTINGS} filters={filters} onChange={onChange} count={filtered.length} />

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted">
              <p className="font-serif text-2xl mb-3">No properties match your filters.</p>
              <button onClick={() => setFilters(DEFAULT)} className="link-underline text-ink">Clear filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)]">
              {filtered.map((l, i) => (
                <RevealWrapper key={l.slug} delay={i * 60}>
                  <PropertyCard listing={l} />
                </RevealWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
