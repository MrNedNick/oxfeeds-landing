import { onMounted, onUnmounted, nextTick } from 'vue'

// Adds a subtle 3D tilt that follows the cursor to elements matching `selector`.
// Respects prefers-reduced-motion.
export function useTilt(selector, { max = 7 } = {}) {
  const bound = []

  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    await nextTick()

    document.querySelectorAll(selector).forEach((el) => {
      const onMove = (e) => {
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
  })

  onUnmounted(() => {
    bound.forEach(({ el, onMove, onLeave }) => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    })
  })
}
