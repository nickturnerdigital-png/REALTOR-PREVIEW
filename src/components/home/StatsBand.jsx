import { useEffect, useRef } from 'react'
import { SITE } from '../../data/index'

function StatCell({ stat, delay = 0 }) {
  const valRef = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = valRef.current
    if (!el) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const target = stat.value
    const isDecimal = target % 1 !== 0

    function countUp() {
      const duration = 1600
      const start = performance.now()
      function step(now) {
        const progress = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 4)
        const current = isDecimal ? (ease * target).toFixed(1) : Math.floor(ease * target)
        el.textContent = (stat.prefix || '') + current + (stat.suffix || '')
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    if (mq.matches) {
      el.textContent = (stat.prefix || '') + stat.value + (stat.suffix || '')
      return
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true
        setTimeout(countUp, delay)
        io.disconnect()
      }
    }, { threshold: 0.3 })

    io.observe(el)
    return () => io.disconnect()
  }, [stat, delay])

  return (
    <div className="py-[clamp(2rem,4vw,3.2rem)] px-6 text-center">
      <div ref={valRef} className="stat-value">
        {(stat.prefix || '') + stat.value + (stat.suffix || '')}
      </div>
      <p className="mt-3 text-[0.78rem] tracking-[0.06em] uppercase text-cream/55">{stat.label}</p>
    </div>
  )
}

export default function StatsBand() {
  return (
    <section className="bg-sage-deep">
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: '1px', background: 'rgba(242,236,225,0.12)' }}
      >
        {SITE.stats.map((stat, i) => (
          <StatCell key={i} stat={stat} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
