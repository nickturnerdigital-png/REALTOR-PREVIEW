export default function FilterBar({ listings, filters, onChange, count }) {
  const areas = ['All Areas', ...new Set(listings.map(l => l.area))]
  const types = ['All Types', ...new Set(listings.map(l => l.type))]
  const prices = ['Any Price', 'Under $2M', '$2M – $4M', '$4M+']
  const statuses = ['All Status', 'For Sale', 'Sold']

  const sel = 'form-input text-sm flex-1 min-w-[160px]'

  return (
    <div className="flex flex-wrap gap-3 items-center p-4 border border-ink/10 rounded-sm mb-10 bg-paper">
      <select className={sel} value={filters.area} onChange={e => onChange('area', e.target.value)}>
        {areas.map(a => <option key={a}>{a}</option>)}
      </select>
      <select className={sel} value={filters.type} onChange={e => onChange('type', e.target.value)}>
        {types.map(t => <option key={t}>{t}</option>)}
      </select>
      <select className={sel} value={filters.price} onChange={e => onChange('price', e.target.value)}>
        {prices.map(p => <option key={p}>{p}</option>)}
      </select>
      <select className={sel} value={filters.status} onChange={e => onChange('status', e.target.value)}>
        {statuses.map(s => <option key={s}>{s}</option>)}
      </select>
      <span className="ml-auto text-sm text-muted whitespace-nowrap">{count} {count === 1 ? 'result' : 'results'}</span>
    </div>
  )
}
