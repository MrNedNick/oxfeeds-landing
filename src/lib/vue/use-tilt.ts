import { onMounted, onUnmounted, nextTick } from 'vue'
import { attachTilt } from '../core/tilt'

/**
 * Adds a subtle 3D tilt that follows the cursor to elements matching
 * `selector`. Respects prefers-reduced-motion.
 */
export function useTilt(selector: string, options: { max?: number } = {}) {
  let cleanup: (() => void) | undefined

  onMounted(async () => {
    await nextTick()
    cleanup = attachTilt(selector, options)
  })

  onUnmounted(() => cleanup?.())
}
