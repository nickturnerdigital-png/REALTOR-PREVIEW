import { Link } from 'react-router-dom'
import { SITE } from '../../data/index'

export default function CTABand() {
  return (
    <section className="bg-sage-deep text-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Portrait side */}
        <div className="relative hidden lg:block">
          <img
            src={SITE.agent.portrait}
            alt="Natalie Harlow"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.85) contrast(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-sage-deep/60" />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center px-[clamp(2rem,8vw,6rem)] py-[clamp(4rem,8vw,7rem)]">
          <p className="eyebrow" style={{ color: '#CCA87A' }}>Start here</p>
          <h2 className="display mt-4 leading-none" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)' }}>
            Your home deserves a strategy.
          </h2>
          <p className="text-cream/60 mt-5 text-[1.05rem] leading-relaxed max-w-[38ch]">
            Free market analysis. Prepared personally by Natalie. Ready in 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/sell" className="btn btn-brass btn-lg">
              Get My Free Valuation <span className="arrow">→</span>
            </Link>
            <Link to="/contact" className="link-underline text-cream/70 flex items-center self-center">
              Or just say hello
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
