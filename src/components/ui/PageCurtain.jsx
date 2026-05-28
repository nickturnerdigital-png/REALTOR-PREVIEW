import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function PageCurtain() {
  const ref = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isFirst = useRef(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (isFirst.current) {
      isFirst.current = false
      gsap.fromTo(el,
        { scaleY: 1, transformOrigin: 'top' },
        { scaleY: 0, duration: 0.7, ease: 'power3.inOut', delay: 0.3 }
      )
      return
    }
    gsap.fromTo(el,
      { scaleY: 1, transformOrigin: 'top' },
      { scaleY: 0, duration: 0.65, ease: 'power3.inOut' }
    )
  }, [location.pathname])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onClick(e) {
      const a = e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('#') || a.target === '_blank') return
      e.preventDefault()
      gsap.fromTo(el,
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1,
          duration: 0.55,
          ease: 'power3.inOut',
          onComplete: () => navigate(href)
        }
      )
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return <div ref={ref} className="page-curtain" style={{ transform: 'scaleY(1)' }} />
}
