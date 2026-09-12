/**
 * Framework-agnostic count-up-on-scroll animation, shared by the React hook
 * and the Vue composable. Observes every element matching `selector` and
 * animates its `data-count` value (with optional `data-suffix` and
 * `data-duration` in ms) once it scrolls into view. Respects
 * prefers-reduced-motion by leaving the markup's own static value in place —
 * callers should render that value in the markup, not "0", so a failed
 * observer or disabled JS still shows the real number. Returns a disposer.
 */
export function attachCountUp(selector: string): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  const animate = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.count || '0')
    const suffix = el.dataset.suffix || ''
    const duration = parseInt(el.dataset.duration || '1400', 10)
    el.textContent = '0' + suffix
    const start = performance.now()

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo for a satisfying settle
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      el.textContent = Math.round(eased * target) + suffix
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}
