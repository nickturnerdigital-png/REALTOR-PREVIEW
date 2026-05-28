import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, idx, onClose, onPrev, onNext }) {
  const open = idx !== null

  const handleKey = useCallback((e) => {
    if (!open) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [open, onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="absolute top-6 right-6 text-cream text-3xl w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" onClick={onClose} aria-label="Close">✕</button>
      <button className="absolute left-6 top-1/2 -translate-y-1/2 text-cream text-2xl w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous">←</button>
      <img
        src={images[idx]}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
      <button className="absolute right-6 top-1/2 -translate-y-1/2 text-cream text-2xl w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next">→</button>
    </div>
  )
}
