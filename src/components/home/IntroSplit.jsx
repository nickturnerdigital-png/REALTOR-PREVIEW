import { Link } from 'react-router-dom'
import RevealWrapper from '../shared/RevealWrapper'
import { SITE } from '../../data/index'

export default function IntroSplit() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2.5rem,6vw,6rem)] items-center">
          {/* Text */}
          <RevealWrapper>
            <p className="eyebrow">The Harlow Group</p>
            <h2 className="h2-serif mt-4">
              Real estate, handled with quiet precision.
            </h2>
            <div className="mt-7 space-y-5">
              {[
                ['Top 1%', 'Victoria Real Estate Board — every year since 2015'],
                ['9 days', 'Average time from listing to sale'],
                ['Off-market', 'Private listings most buyers never see'],
              ].map(([bold, rest]) => (
                <div key={bold} className="flex items-baseline gap-4 border-b border-ink/10 pb-5">
                  <span className="font-serif text-[1.4rem] text-ink shrink-0 w-[7rem]">{bold}</span>
                  <span className="text-muted text-[0.93rem]">{rest}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-8">
              <Link to="/about" className="btn btn-dark">
                Meet Natalie <span className="arrow">→</span>
              </Link>
              <Link to="/listings" className="link-underline text-ink">View the portfolio</Link>
            </div>
          </RevealWrapper>

          {/* Portrait */}
          <RevealWrapper delay={120}>
            <div className="portrait-frame">
              <img
                src={SITE.agent.portrait}
                alt="Natalie Harlow — The Harlow Group"
                className="rounded-sm w-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
