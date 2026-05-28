import { AWARDS } from '../../data/index'

export default function AwardsMarquee() {
  // Duplicate items for seamless loop
  const items = [...AWARDS, ...AWARDS]

  return (
    <section className="py-[clamp(2.5rem,5vw,4rem)] bg-ink overflow-hidden">
      <p className="eyebrow eyebrow-center justify-center text-center mb-8" style={{ color: '#CCA87A' }}>
        Recognition
      </p>
      <div className="marquee-outer">
        <div className="marquee-track">
          {items.map((award, i) => (
            <span key={i} className="marquee-item">{award}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
