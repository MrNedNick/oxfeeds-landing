<template>
  <div class="scroll-progress" :style="{ transform: `scaleX(${progress})` }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

const update = () => {
  const h = document.documentElement
  const scrollable = h.scrollHeight - h.clientHeight
  progress.value = scrollable > 0 ? h.scrollTop / scrollable : 0
}

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
  update()
})
onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #7C3AED, #EC4899, #A78BFA);
  background-size: 200% 100%;
  animation: gradient-shift 4s linear infinite;
  transform-origin: left;
  transform: scaleX(0);
  z-index: 1100;
  will-change: transform;
  box-shadow: 0 0 12px rgba(236, 72, 153, 0.5);
}
</style>
