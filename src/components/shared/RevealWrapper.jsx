import { useEffect, useRef } from 'react'

export default function RevealWrapper({ children, className = '', delay = 0, style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) { el.classList.add('in'); return }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('in'), delay)
        io.unobserve(el)
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} data-reveal="" className={className} style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}>
      {children}
    </div>
  )
}
