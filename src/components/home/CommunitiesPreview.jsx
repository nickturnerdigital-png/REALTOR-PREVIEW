import { Link } from 'react-router-dom'
import RevealWrapper from '../shared/RevealWrapper'
import { COMMUNITIES } from '../../data/index'

function CommunityCard({ community }) {
  return (
    <Link
      to="/communities"
      className="community-card relative rounded-sm overflow-hidden text-cream flex items-end"
      style={{ aspectRatio: '16/11' }}
    >
      <img
        src={community.image}
        alt={community.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-transparent to-ink/80" />
      <div className="relative z-10 p-[clamp(1.5rem,3vw,2.5rem)] w-full">
        <p className="text-[0.72rem] tracking-[0.14em] uppercase text-gold-light">{community.stat}</p>
        <h3 className="font-serif text-[clamp(1.6rem,3vw,2.3rem)] mt-1">{community.name}</h3>
        <p className="text-cream/80 text-sm mt-0.5">{community.tagline}</p>
        <p className="community-blurb">{community.blurb}</p>
      </div>
    </Link>
  )
}

export default function CommunitiesPreview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="eyebrow eyebrow-center justify-center">Communities</p>
          <h2 className="h2-serif mt-4">Where you'll want to live</h2>
          <p className="lead mt-4 mx-auto max-w-[50ch]">
            From the Tweed Curtain of Oak Bay to the seaside calm of Sidney — we know these
            neighbourhoods intimately.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,2.5vw,1.75rem)]">
          {COMMUNITIES.map((c, i) => (
            <RevealWrapper key={c.name} delay={i * 80}>
              <CommunityCard community={c} />
            </RevealWrapper>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/communities" className="link-underline text-ink">Explore all communities →</Link>
        </div>
      </div>
    </section>
  )
}
