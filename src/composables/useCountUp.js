import { onMounted, onUnmounted, nextTick } from 'vue'

// Animates elements matching `selector` from 0 up to their data-count value
// when they scroll into view. Supports data-suffix (e.g. "+") and data-duration (ms).
export function useCountUp(selector) {
  let observer

  const animate = (el) => {
    const target = parseFloat(el.dataset.count || '0')
    const suffix = el.dataset.suffix || ''
    const duration = parseInt(el.dataset.duration || '1400', 10)
    const start = performance.now()

    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo for a satisfying settle
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      el.textContent = Math.round(eased * target) + suffix
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  onMounted(async () => {
    await nextTick()
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer && observer.disconnect())
}
