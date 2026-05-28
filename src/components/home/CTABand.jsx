import { Link } from 'react-router-dom'
import { SITE } from '../../data/index'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden text-center text-cream">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Victoria coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-deep/82" />
      </div>

      <div className="container-x py-[clamp(5rem,11vw,9rem)]">
        <p className="eyebrow eyebrow-center justify-center" style={{ color: '#CCA87A' }}>Let's begin</p>
        <h2 className="h1-serif text-cream mt-5 mx-auto max-w-[20ch]">
          Curious what your home is worth today?
        </h2>
        <p className="lead text-cream/65 mt-5 mx-auto max-w-[50ch]">
          Receive a complimentary, no-obligation valuation prepared personally by {SITE.agent.name.split(',')[0]}.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <Link to="/sell" className="btn btn-brass btn-lg">
            Get My Valuation <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
