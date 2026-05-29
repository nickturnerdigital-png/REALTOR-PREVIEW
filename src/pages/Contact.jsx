import { useState } from 'react'
import PageHero from '../components/shared/PageHero'
import RevealWrapper from '../components/shared/RevealWrapper'
import { SITE } from '../data/index'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '' })
  const [sent, setSent] = useState(false)

  function update(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function normalizeUrl(v) {
    if (v && !/^https?:\/\//i.test(v)) update('website', 'https://' + v)
  }

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's have a conversation."
        subtitle="Whether you're ready to list, ready to buy, or simply curious — we'd love to hear from you."
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80"
        breadcrumb="Contact"
      />

      <section className="section-pad bg-paper">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,6rem)]">
            {/* Form */}
            <RevealWrapper>
              {sent ? (
                <div className="border border-gold/40 rounded-sm bg-gold/5 p-10 text-center">
                  <p className="font-serif text-2xl text-sage mb-3">Message received.</p>
                  <p className="text-muted">Natalie will be in touch within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <h2 className="h3-serif mb-2">Send a message</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-field">
                      <label className="form-label">First & Last Name</label>
                      <input className="form-input" required placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone (optional)</label>
                      <input className="form-input" placeholder="250-555-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" required placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Current website <span className="text-muted font-normal">(optional)</span></label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="yoursite.ca"
                      value={form.website}
                      onChange={e => update('website', e.target.value)}
                      onBlur={e => normalizeUrl(e.target.value.trim())}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Message</label>
                    <textarea className="form-input" required placeholder="Tell us about what you're looking for..." value={form.message} onChange={e => update('message', e.target.value)} style={{ minHeight: '140px' }} />
                  </div>
                  <p className="text-xs text-muted">Your information is never shared with third parties.</p>
                  <button type="submit" className="btn btn-brass btn-lg w-full justify-center">
                    Send Message <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </RevealWrapper>

            {/* Info + Map */}
            <RevealWrapper delay={100}>
              <div>
                <h2 className="h3-serif mb-6">Get in touch directly</h2>
                <div className="space-y-4 mb-10">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Phone</p>
                    <a href={SITE.agent.phoneHref} className="font-serif text-xl hover:text-gold transition-colors">{SITE.agent.phone}</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Email</p>
                    <a href={SITE.agent.emailHref} className="font-serif text-xl hover:text-gold transition-colors">{SITE.agent.email}</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Office</p>
                    <p className="font-serif text-lg">{SITE.address}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Hours</p>
                    <p className="text-muted text-sm">Monday – Friday, 9 AM – 6 PM<br />Weekends by appointment</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="rounded-sm overflow-hidden flex items-center justify-center text-cream"
                  style={{
                    aspectRatio: '16/8',
                    background: 'linear-gradient(135deg, #243B30, #141412)',
                    backgroundImage: 'radial-gradient(circle at 35% 45%, rgba(184,147,90,0.2) 0%, transparent 50%)',
                  }}
                >
                  <div className="text-center">
                    <div className="map-pin-dot" />
                    <p className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/50">1 Dallas Road, Victoria BC</p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
