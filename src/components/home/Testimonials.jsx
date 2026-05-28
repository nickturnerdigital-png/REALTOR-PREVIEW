import { useState } from 'react'
import { TESTIMONIALS } from '../../data/index'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-pad bg-sage-deep text-cream">
      <div className="container-x">
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
          <p className="eyebrow eyebrow-center justify-center" style={{ color: '#CCA87A' }}>Client Stories</p>
          <h2 className="h2-serif text-cream mt-4">Trusted by Victoria's families</h2>
        </div>

        <div className="max-w-[860px] mx-auto text-center">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`tslide ${i === active ? 'active' : ''}`}>
              <p className="text-gold tracking-[0.3em] mb-6">★★★★★</p>
              <blockquote className="font-serif font-light italic text-[clamp(1.4rem,3vw,2.1rem)] leading-[1.35] text-cream/90">
                "{t.quote}"
              </blockquote>
              <p className="mt-7 text-[0.78rem] tracking-[0.12em] uppercase text-gold-light">
                {t.name} · {t.area}
              </p>
            </div>
          ))}

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-400 ${i === active ? 'bg-gold w-6 h-2.5' : 'bg-white/20 w-2.5 h-2.5'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
