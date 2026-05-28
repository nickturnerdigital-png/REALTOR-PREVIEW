import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative min-h-[62vh] flex items-end text-cream overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink/80" />
      </div>

      <div className="container-x relative w-full pb-[clamp(3rem,8vh,6rem)] pt-[calc(84px+3rem)]">
        {eyebrow && <p className="eyebrow" style={{ color: '#CCA87A' }}>{eyebrow}</p>}
        <h1 className="h1-serif text-cream mt-4 max-w-[18ch]">{title}</h1>
        {subtitle && <p className="lead text-cream/70 mt-4 max-w-[48ch]">{subtitle}</p>}
        {breadcrumb && (
          <p className="mt-5 text-xs tracking-widest text-cream/50 uppercase">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            {' · '}
            <span className="text-cream/70">{breadcrumb}</span>
          </p>
        )}
      </div>
    </section>
  )
}
