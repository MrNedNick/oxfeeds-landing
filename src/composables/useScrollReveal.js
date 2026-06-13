import { onMounted, onUnmounted, nextTick } from 'vue'

// Attaches an IntersectionObserver to every .reveal / .reveal-left / .reveal-right
// element in the current view and adds .visible when it scrolls into view.
export function useScrollReveal() {
  let observer

  onMounted(async () => {
    await nextTick()
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer && observer.disconnect())
}
