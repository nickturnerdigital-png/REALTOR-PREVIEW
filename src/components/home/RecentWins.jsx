import { Link } from 'react-router-dom'
import { formatPrice } from '../../data/index'

const WINS = [
  {
    address: '3100 Beach Drive',
    area: 'Oak Bay',
    price: 6450000,
    days: 9,
    result: 'Over asking',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  },
  {
    address: '1042 Joan Crescent',
    area: 'Rockland',
    price: 3995000,
    days: 12,
    result: 'Full price',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80',
  },
  {
    address: '2480 Seaview Lane',
    area: 'Sidney',
    price: 1650000,
    days: 6,
    result: 'Over asking',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80',
  },
]

export default function RecentWins() {
  return (
    <section className="section-pad bg-ink text-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-[clamp(2.5rem,5vw,4rem)]">
          <div>
            <p className="eyebrow" style={{ color: '#CCA87A' }}>Recent Results</p>
            <h2 className="h2-serif text-cream mt-3">What sold. What it took.</h2>
          </div>
          <Link to="/listings" className="link-underline text-cream/50 hover:text-cream">
            See all listings →
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {WINS.map((w, i) => (
            <div
              key={i}
              className="group grid grid-cols-[80px_1fr_auto] sm:grid-cols-[120px_1fr_auto] items-center gap-5 sm:gap-8 py-7 hover:bg-white/[0.03] -mx-4 px-4 rounded-sm transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={w.image}
                  alt={w.address}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Address + area */}
              <div>
                <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-cream leading-tight">{w.address}</p>
                <p className="text-[0.75rem] tracking-[0.1em] uppercase text-gold-light mt-1">{w.area}</p>
                <p className="text-cream/40 text-sm mt-2 hidden sm:block">{w.days} days on market · {w.result}</p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="font-serif text-[clamp(1.4rem,2.5vw,2.2rem)] font-light text-cream leading-none">
                  {formatPrice(w.price)}
                </p>
                <p className="text-gold text-xs tracking-widest uppercase mt-1.5 hidden sm:block">Sold</p>
                <p className="text-cream/40 text-xs mt-1 sm:hidden">{w.days}d · {w.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom proof line */}
        <p className="text-center text-cream/30 text-sm mt-10 tracking-wide">
          101% of list price on average · 9 days avg. on market · 580+ families served
        </p>
      </div>
    </section>
  )
}
