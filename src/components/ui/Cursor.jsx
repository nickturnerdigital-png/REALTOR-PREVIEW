import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    let dotX = 0, dotY = 0
    let raf

    function lerp(a, b, t) { return a + (b - a) * t }

    function animate() {
      dotX = lerp(dotX, mouseX, 0.28)
      dotY = lerp(dotY, mouseY, 0.28)
      cursorX = lerp(cursorX, mouseX, 0.1)
      cursorY = lerp(cursorY, mouseY, 0.1)
      dot.style.left = dotX + 'px'
      dot.style.top = dotY + 'px'
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      raf = requestAnimationFrame(animate)
    }

    function onMove(e) { mouseX = e.clientX; mouseY = e.clientY }
    function onLeave() { cursor.classList.add('is-hidden'); dot.classList.add('is-hidden') }
    function onEnter() { cursor.classList.remove('is-hidden'); dot.classList.remove('is-hidden') }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(animate)

    function addCardState(el) {
      el.addEventListener('mouseenter', () => { cursor.classList.add('is-card'); dot.style.opacity = '0' })
      el.addEventListener('mouseleave', () => { cursor.classList.remove('is-card'); dot.style.opacity = '1' })
    }
    function addHoverState(el) {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'))
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'))
    }

    const observer = new MutationObserver(() => {
      document.querySelectorAll('.card-tilt:not([data-cursor])').forEach(el => {
        el.setAttribute('data-cursor', '1')
        addCardState(el)
      })
      document.querySelectorAll('a:not([data-cursor]), button:not([data-cursor])').forEach(el => {
        el.setAttribute('data-cursor', '1')
        addHoverState(el)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
