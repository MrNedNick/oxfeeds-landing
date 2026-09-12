import { onMounted, onUnmounted, nextTick } from 'vue'
import { attachScrollReveal } from '../core/scroll-reveal'

/**
 * Adds `.visible` to every element matching `selector` (default: `.reveal`,
 * `.reveal-left`, `.reveal-right`) as it scrolls into view.
 */
export function useScrollReveal(selector?: string) {
  let cleanup: (() => void) | undefined

  onMounted(async () => {
    await nextTick()
    cleanup = attachScrollReveal(selector)
  })

  onUnmounted(() => cleanup?.())
}
