import { useState } from 'react'
import PageHero from '../components/shared/PageHero'
import RevealWrapper from '../components/shared/RevealWrapper'
import CTABand from '../components/home/CTABand'
import { SITE } from '../data/index'

const STEPS = ['Property Details', 'Your Information', 'Confirm']

const FAQS = [
  { q: 'How long does the valuation process take?', a: 'Natalie typically prepares a detailed market analysis within 24–48 hours of your initial inquiry. The review is complimentary and comes with no obligation.' },
  { q: 'Do I need to list my home to receive a valuation?', a: 'Absolutely not. Many of our clients request valuations simply to understand their current equity position. There is never any pressure to list.' },
  { q: 'What makes The Harlow Group different?', a: 'We deliberately limit the number of clients we represent at any one time. This means every listing — and every valuation — receives our full focus, from strategy to marketing to negotiation.' },
  { q: 'What areas do you serve?', a: 'We specialize in Greater Victoria and the Saanich Peninsula, including Oak Bay, Rockland, Cordova Bay, Sidney and surrounding communities.' },
]

export default function Sell() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({
    address: '', type: '', beds: '', condition: '',
    name: '', phone: '', email: '', timeline: '',
  })

  function update(k, v) { setForm(f => ({ ...f, [k]: v })) }

  return (
    <>
      <PageHero
        eyebrow="Sell With Harlow"
        title="Know what your home is worth."
        subtitle="Request a complimentary, no-obligation valuation prepared personally by Natalie Harlow."
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80"
        breadcrumb="Sell"
      />

      {/* Valuation form */}
      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,6rem)] items-start">
            {/* Left: agent + trust signals */}
            <RevealWrapper>
              <div className="flex items-center gap-5 mb-8">
                <img src={SITE.agent.portrait} alt="Natalie Harlow" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="font-serif text-xl">{SITE.agent.name.split(',')[0]}</p>
                  <p className="text-sm text-muted mt-0.5">{SITE.agent.role}</p>
                </div>
              </div>
              <blockquote className="font-serif italic text-xl text-sage leading-snug border-l-2 border-gold pl-5">
                "I review every valuation request personally. Understanding your home — its story, its
                condition, its position in the market — is where every great result begins."
              </blockquote>
              <p className="text-sm text-muted mt-4">— Natalie Harlow, PREC*</p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { v: '580+', l: 'Families served' },
                  { v: '9 days', l: 'Avg. on market' },
                  { v: '101%', l: 'Of list price' },
                  { v: 'Top 1%', l: 'Victoria Real Estate Board' },
                ].map(s => (
                  <div key={s.l} className="border border-ink/10 rounded-sm p-4">
                    <p className="font-serif text-2xl font-light text-sage">{s.v}</p>
                    <p className="text-xs text-muted mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="border border-gold/40 rounded-sm bg-gold/5 p-8 text-center">
                  <p className="font-serif text-2xl text-sage mb-3">Thank you.</p>
                  <p className="text-muted">Natalie will personally review your property and be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  {/* Step pills */}
                  <div className="flex gap-2 mb-8">
                    {STEPS.map((s, i) => (
                      <div key={i} className={`step-pill ${i < step ? 'done' : i === step ? 'current' : ''}`}>
                        <span />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted mb-6 tracking-widest uppercase">Step {step + 1} of {STEPS.length} — {STEPS[step]}</p>

                  {step === 0 && (
                    <div className="grid gap-5">
                      <div className="form-field">
                        <label className="form-label">Property Address</label>
                        <input className="form-input" placeholder="123 Beach Drive, Oak Bay" value={form.address} onChange={e => update('address', e.target.value)} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-field">
                          <label className="form-label">Property Type</label>
                          <select className="form-input" value={form.type} onChange={e => update('type', e.target.value)}>
                            <option value="">Select type</option>
                            <option>Detached House</option>
                            <option>Condo / Apartment</option>
                            <option>Townhouse</option>
                            <option>Acreage / Estate</option>
                          </select>
                        </div>
                        <div className="form-field">
                          <label className="form-label">Bedrooms</label>
                          <select className="form-input" value={form.beds} onChange={e => update('beds', e.target.value)}>
                            <option value="">Select</option>
                            {[1,2,3,4,5,'6+'].map(n => <option key={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="form-field">
                        <label className="form-label">Overall Condition</label>
                        <select className="form-input" value={form.condition} onChange={e => update('condition', e.target.value)}>
                          <option value="">Select</option>
                          <option>Excellent</option>
                          <option>Good</option>
                          <option>Needs some updating</option>
                          <option>Fixer-upper</option>
                        </select>
                      </div>
                      <div className="flex justify-end mt-2">
                        <button className="btn btn-dark" onClick={() => setStep(1)}>Next Step <span className="arrow">→</span></button>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-5">
                      <div className="form-field">
                        <label className="form-label">Full Name</label>
                        <input className="form-input" placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-field">
                          <label className="form-label">Phone</label>
                          <input className="form-input" placeholder="250-555-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                        </div>
                        <div className="form-field">
                          <label className="form-label">Email</label>
                          <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                        </div>
                      </div>
                      <div className="form-field">
                        <label className="form-label">When are you thinking of selling?</label>
                        <select className="form-input" value={form.timeline} onChange={e => update('timeline', e.target.value)}>
                          <option value="">Select timeline</option>
                          <option>ASAP</option>
                          <option>1–3 months</option>
                          <option>3–6 months</option>
                          <option>6–12 months</option>
                          <option>Just exploring</option>
                        </select>
                      </div>
                      <div className="flex justify-between mt-2">
                        <button className="btn btn-ghost text-ink border-ink/20" onClick={() => setStep(0)}>← Back</button>
                        <button className="btn btn-dark" onClick={() => setStep(2)}>Review <span className="arrow">→</span></button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-4">
                      <div className="bg-cream/60 rounded-sm p-5 text-sm space-y-2 text-ink/80">
                        <p><strong>Address:</strong> {form.address || 'Not provided'}</p>
                        <p><strong>Type:</strong> {form.type || 'Not provided'}</p>
                        <p><strong>Bedrooms:</strong> {form.beds || 'Not provided'}</p>
                        <p><strong>Condition:</strong> {form.condition || 'Not provided'}</p>
                        <p><strong>Name:</strong> {form.name || 'Not provided'}</p>
                        <p><strong>Phone:</strong> {form.phone || 'Not provided'}</p>
                        <p><strong>Email:</strong> {form.email || 'Not provided'}</p>
                        <p><strong>Timeline:</strong> {form.timeline || 'Not provided'}</p>
                      </div>
                      <p className="text-xs text-muted">Your information is kept strictly confidential.</p>
                      <div className="flex justify-between mt-2">
                        <button className="btn btn-ghost text-ink border-ink/20" onClick={() => setStep(1)}>← Back</button>
                        <button className="btn btn-brass btn-lg" onClick={() => setSubmitted(true)}>
                          Request Valuation <span className="arrow">→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-cream">
        <div className="container-x max-w-[760px] mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow eyebrow-center justify-center">Common Questions</p>
            <h2 className="h2-serif mt-4">What sellers often ask</h2>
          </div>
          <div className="divide-y divide-ink/10">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  className="flex w-full items-center justify-between text-left font-serif text-lg gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openFaq === i ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                  <p className="lead pb-2">{faq.a}</p>
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
