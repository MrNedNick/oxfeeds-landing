/**
 * Framework-agnostic cursor-follow 3D tilt, shared by the React hook and the
 * Vue composable. Binds every element matching `selector`, up to `max`
 * degrees of rotation, and no-ops under prefers-reduced-motion. Returns a
 * disposer.
 */
export function attachTilt(selector: string, { max = 7 }: { max?: number } = {}): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  const bound: Array<{
    el: HTMLElement
    onMove: (e: MouseEvent) => void
    onLeave: () => void
  }> = []

  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.transition = 'transform 0.08s ease-out'
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`
    }
    const onLeave = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    bound.push({ el, onMove, onLeave })
  })

  return () => {
    bound.forEach(({ el, onMove, onLeave }) => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  }
}
