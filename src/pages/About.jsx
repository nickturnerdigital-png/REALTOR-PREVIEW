import PageHero from '../components/shared/PageHero'
import StatsBand from '../components/home/StatsBand'
import ProcessSection from '../components/home/ProcessSection'
import AwardsMarquee from '../components/home/AwardsMarquee'
import Testimonials from '../components/home/Testimonials'
import RevealWrapper from '../components/shared/RevealWrapper'
import CTABand from '../components/home/CTABand'
import { SITE, AWARDS } from '../data/index'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A practice built on trust."
        subtitle="Twenty years of representing Victoria's most distinguished homes."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        breadcrumb="About"
      />

      {/* Bio section */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2.5rem,6vw,6rem)] items-center">
            <RevealWrapper>
              <p className="eyebrow">Natalie Harlow, PREC*</p>
              <h2 className="h2-serif mt-4">Twenty years representing Victoria's most distinguished homes.</h2>
              <p className="lead mt-5">
                Born and raised on Vancouver Island, Natalie founded The Harlow Group on a conviction
                that selling a home should feel as considered and personal as the home itself. She built
                a practice around fewer clients, deeper relationships and a standard of marketing that
                has become a benchmark for luxury real estate in the region.
              </p>
              <p className="lead mt-4">
                From oceanfront estates in Oak Bay to heritage residences in Rockland and new-builds
                along the Saanich Peninsula, Natalie and her team have guided more than 580 families
                through their most important moves — quietly, expertly, and with results that
                consistently exceed expectations.
              </p>
              <p className="font-serif italic text-2xl text-sage mt-8">Natalie Harlow</p>
              <p className="text-xs text-muted tracking-widest uppercase mt-1">{SITE.agent.credentials}</p>
            </RevealWrapper>

            <RevealWrapper delay={120}>
              <div className="portrait-frame">
                <img
                  src={SITE.agent.portrait}
                  alt="Natalie Harlow"
                  className="rounded-sm w-full"
                  style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <StatsBand />

      <ProcessSection
        eyebrow="The Philosophy"
        title="Three principles that guide every transaction."
      />

      {/* Awards */}
      <section className="section-pad bg-paper">
        <div className="container-x text-center">
          <p className="eyebrow eyebrow-center justify-center">Recognition</p>
          <h2 className="h2-serif mt-4 mb-12">Recognised for results</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {AWARDS.map((a, i) => (
              <span key={i} className="font-serif italic text-xl text-muted/80">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABand />
    </>
  )
}
