/**
 * Framework-agnostic scroll-triggered reveal, shared by the React hook and
 * the Vue composable. Adds `.visible` to every element matching `selector`
 * once it scrolls into view, then stops observing it. Returns a disposer.
 */
export function attachScrollReveal(
  selector = '.reveal, .reveal-left, .reveal-right',
): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll(selector).forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}
