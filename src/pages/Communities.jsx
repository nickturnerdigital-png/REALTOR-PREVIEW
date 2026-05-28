import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import RevealWrapper from '../components/shared/RevealWrapper'
import CTABand from '../components/home/CTABand'
import { COMMUNITIES } from '../data/index'

function CommunityFull({ community }) {
  return (
    <RevealWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
        <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[0.72rem] tracking-[0.14em] uppercase text-gold">{community.stat}</p>
          <h2 className="h2-serif mt-2">{community.name}</h2>
          <p className="text-muted mt-1 italic font-serif">{community.tagline}</p>
          <p className="lead mt-5">{community.blurb}</p>
          <Link to="/listings" className="btn btn-dark mt-7 inline-flex">
            View listings in {community.name} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </RevealWrapper>
  )
}

export default function Communities() {
  return (
    <>
      <PageHero
        eyebrow="Communities"
        title="Where you'll want to live."
        subtitle="We know these neighbourhoods intimately — the best streets, the hidden gems, the real story behind every area."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
        breadcrumb="Communities"
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="flex flex-col gap-[clamp(5rem,10vw,8rem)]">
            {COMMUNITIES.map((c, i) => (
              <div key={c.name} style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <CommunityFull community={c} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
