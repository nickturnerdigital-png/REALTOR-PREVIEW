import { useEffect, useRef } from 'react'

export default function Preloader() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('hide'), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={ref} className="preloader">
      <span className="preloader-logo">The Harlow Group</span>
    </div>
  )
}
