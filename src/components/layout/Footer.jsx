import { Link } from 'react-router-dom'
import { SITE, COMMUNITIES } from '../../data/index'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-[clamp(4rem,8vw,6rem)]">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <span className="font-serif italic font-light text-2xl text-cream tracking-wide">
              The Harlow Group
            </span>
            <p className="mt-4 text-sm text-cream/50 max-w-[28ch] leading-relaxed">
              A boutique luxury real estate advisory representing Victoria's most distinguished homes.
            </p>
            <div className="flex gap-4 mt-5">
              {Object.entries(SITE.social).map(([key, href]) => (
                <a key={key} href={href} target="_blank" rel="noopener" className="text-cream/40 hover:text-gold transition-colors duration-300 text-xs tracking-widest uppercase">
                  {key.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Listings', href: '/listings' },
                { label: 'Communities', href: '/communities' },
                { label: 'About', href: '/about' },
                { label: 'Sell', href: '/sell' },
                { label: 'Contact', href: '/contact' },
              ].map(n => (
                <li key={n.href}>
                  <Link to={n.href} className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 py-0.5 block">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Communities</h4>
            <ul className="space-y-2">
              {COMMUNITIES.map(c => (
                <li key={c.name}>
                  <Link to="/communities" className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 py-0.5 block">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Contact</h4>
            <address className="not-italic space-y-2">
              <a href={SITE.agent.phoneHref} className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 block">{SITE.agent.phone}</a>
              <a href={SITE.agent.emailHref} className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 block">{SITE.agent.email}</a>
              <p className="text-sm text-cream/50 leading-relaxed pt-1">{SITE.address}</p>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 py-6 text-xs text-cream/30">
          <span>© {new Date().getFullYear()} The Harlow Group. All rights reserved.</span>
          <span>
            <a href="#" className="hover:text-cream/60 transition-colors">Privacy Policy</a>
            {' · '}
            <a href="#" className="hover:text-cream/60 transition-colors">Terms of Use</a>
            {' · '}
            PREC* Personal Real Estate Corporation
          </span>
        </div>
      </div>
    </footer>
  )
}
