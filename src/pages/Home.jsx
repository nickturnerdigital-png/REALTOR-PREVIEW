import Hero from '../components/home/Hero'
import StatsBand from '../components/home/StatsBand'
import IntroSplit from '../components/home/IntroSplit'
import FeaturedListings from '../components/home/FeaturedListings'
import ProcessSection from '../components/home/ProcessSection'
import CommunitiesPreview from '../components/home/CommunitiesPreview'
import Testimonials from '../components/home/Testimonials'
import AwardsMarquee from '../components/home/AwardsMarquee'
import CTABand from '../components/home/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <IntroSplit />
      <FeaturedListings />
      <ProcessSection />
      <CommunitiesPreview />
      <Testimonials />
      <AwardsMarquee />
      <CTABand />
    </>
  )
}
