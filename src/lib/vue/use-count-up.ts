import { onMounted, onUnmounted, nextTick } from 'vue'
import { attachCountUp } from '../core/count-up'

/**
 * Animates elements matching `selector` from 0 up to their `data-count`
 * value when they scroll into view. Supports `data-suffix` (e.g. "+") and
 * `data-duration` (ms). Render the final value as the element's static
 * content — the observer replaces it on mount and reduced-motion leaves it
 * as-is.
 */
export function useCountUp(selector: string) {
  let cleanup: (() => void) | undefined

  onMounted(async () => {
    await nextTick()
    cleanup = attachCountUp(selector)
  })

  onUnmounted(() => cleanup?.())
}
