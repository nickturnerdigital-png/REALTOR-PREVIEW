import RevealWrapper from '../shared/RevealWrapper'

const ITEMS = [
  {
    num: '01 — Sellers',
    title: 'Marketing that sells the story',
    text: 'Editorial photography, film, staging and a launch strategy engineered to create demand — and competition — for your home.',
  },
  {
    num: '02 — Buyers',
    title: 'Access before the market',
    text: 'An off-market network and years of relationships mean our clients often see the right home before it\'s ever listed.',
  },
  {
    num: '03 — Investors',
    title: 'Data over guesswork',
    text: 'Rigorous comparables, neighbourhood analytics and negotiation that protects your downside and maximizes your return.',
  },
]

export default function ProcessSection({ title, eyebrow }) {
  return (
    <section className="section-pad bg-ink text-cream">
      <div className="container-x">
        <div className="mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="eyebrow" style={{ color: '#CCA87A' }}>{eyebrow || 'The Approach'}</p>
          <h2 className="h2-serif text-cream mt-3">{title || 'Three ways we create an advantage'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(2rem,4vw,3.5rem)]">
          {ITEMS.map((item, i) => (
            <RevealWrapper key={i} delay={i * 100}>
              <span className="process-num">{item.num}</span>
              <h3 className="font-serif text-[1.5rem] text-cream mt-4">{item.title}</h3>
              <p className="text-cream/55 mt-3 leading-relaxed">{item.text}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
