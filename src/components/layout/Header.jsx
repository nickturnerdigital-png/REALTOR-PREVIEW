import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { SITE } from '../../data/index'

const NAV = [
  { label: 'Listings', href: '/listings' },
  { label: 'Communities', href: '/communities' },
  { label: 'About', href: '/about' },
  { label: 'Sell', href: '/sell' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const menuLinksRef = useRef([])

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(menuLinksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08, delay: 0.15 }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerBase = 'fixed inset-x-0 top-0 z-[100] h-[84px] flex items-center transition-all duration-500'
  const headerScrolled = scrolled
    ? 'h-[68px] bg-paper/92 backdrop-blur-md shadow-[0_1px_0_rgba(20,20,18,0.1)]'
    : ''

  return (
    <>
      <header className={`${headerBase} ${headerScrolled}`}>
        <div className="container-x flex items-center justify-between w-full">
          <Link to="/" className="flex flex-col leading-none gap-1" aria-label="The Harlow Group home">
            <span
              className="font-serif text-2xl italic font-light tracking-wide"
              style={{ color: scrolled ? '#141412' : '#F2ECE1' }}
            >
              The Harlow Group
            </span>
            <span className="text-[0.58rem] tracking-[0.28em] uppercase text-gold">
              {SITE.tagline}
            </span>
          </Link>

          <nav className="flex items-center gap-8" aria-label="Primary">
            <ul className="hidden md:flex gap-7">
              {NAV.map(n => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className={`text-[0.82rem] font-medium tracking-[0.06em] relative py-1 transition-opacity duration-300
                      after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-gold
                      after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100
                      ${location.pathname.startsWith(n.href) ? 'after:scale-x-100' : ''}`}
                    style={{ color: scrolled ? '#141412' : '#F2ECE1' }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn btn-brass"
              style={{ padding: '0.65rem 1.2rem', fontSize: '0.72rem' }}
            >
              Book a Consultation
            </Link>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden flex flex-col justify-between w-7 h-5 relative z-[110]"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="absolute left-0 h-[1.5px] w-full transition-all duration-400"
                  style={{
                    background: (scrolled || menuOpen) ? '#141412' : '#F2ECE1',
                    top: i === 0 ? 0 : i === 1 ? '50%' : 'auto',
                    bottom: i === 2 ? 0 : 'auto',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(10px) rotate(45deg)'
                        : i === 1 ? 'translateX(-100%)'
                        : 'translateY(-10px) rotate(-45deg)'
                      : i === 1 ? 'translateY(-50%)' : 'none',
                    opacity: (menuOpen && i === 1) ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-[105] bg-sage-deep flex flex-col justify-center px-8 md:hidden transition-all duration-600 ease-luxury ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ transition: 'opacity 0.5s, visibility 0.5s' }}
      >
        <ul className="flex flex-col gap-2">
          {[{ label: 'Home', href: '/' }, ...NAV, { label: 'Contact', href: '/contact' }].map((n, i) => (
            <li key={n.href}>
              <Link
                to={n.href}
                ref={el => menuLinksRef.current[i] = el}
                className="font-serif text-[clamp(2rem,9vw,3.2rem)] text-cream/90 py-2 block hover:text-gold transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-sm text-cream/50">
          <a href={SITE.agent.phoneHref} className="text-gold block mb-1">{SITE.agent.phone}</a>
          <a href={SITE.agent.emailHref} className="text-gold block">{SITE.agent.email}</a>
        </div>
      </div>
    </>
  )
}
