<template>
  <section class="hero" id="home" ref="heroEl">
    <div class="hero-bg">
      <div class="parallax" ref="parallaxEl">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="particles">
        <span v-for="p in particles" :key="p.id" class="particle" :style="p.style"></span>
      </div>
      <div class="grid"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge gradient-border reveal">
        <span class="badge-dot"></span>
        Official Google, Bing &amp; Yahoo Partner
      </div>

      <h1 class="hero-title reveal delay-1">
        Grow Your Revenue<br>
        With <span class="gradient-text anim-gradient">Search Monetization</span>
      </h1>

      <p class="hero-sub reveal delay-2">
        Exclusive partnerships and advanced strategies to maximize your search traffic earnings.
        High-RPM feeds, large caps, and seamless integration for any platform.
      </p>

      <div class="hero-ctas reveal delay-3">
        <a href="#contact" class="btn-primary">
          Start Monetizing
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#how-it-works" class="btn-secondary">
          How It Works
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="hero-stats reveal delay-4">
        <div class="stat">
          <div class="stat-num gradient-text count-up" data-count="3">0</div>
          <div class="stat-label">Major Search Partners</div>
        </div>
        <div class="stat-sep"></div>
        <div class="stat">
          <div class="stat-num gradient-text count-up" data-count="7" data-suffix="+">0</div>
          <div class="stat-label">Traffic Formats</div>
        </div>
        <div class="stat-sep"></div>
        <div class="stat">
          <div class="stat-num gradient-text">High</div>
          <div class="stat-label">RPM Feeds</div>
        </div>
        <div class="stat-sep"></div>
        <div class="stat">
          <div class="stat-num gradient-text">24/7</div>
          <div class="stat-label">Expert Support</div>
        </div>
      </div>

      <div class="trusted reveal delay-5">
        <span class="trusted-label">Powered by</span>
        <div class="trusted-logos">
          <div class="partner-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#4285F4"/><path d="M12 6a6 6 0 100 12A6 6 0 0012 6z" fill="white"/><path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="#4285F4"/></svg>
            Google
          </div>
          <div class="partner-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#008373"/><path d="M4 12h16M4 8h10M4 16h13" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
            Bing
          </div>
          <div class="partner-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#720E9E"/><path d="M4 8l8 4 8-4M4 16l8 4 8-4M4 12h16" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>
            Yahoo
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint reveal delay-6">
      <div class="scroll-wheel"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCountUp } from '../composables/useCountUp'

useCountUp('.count-up')

const heroEl = ref(null)
const parallaxEl = ref(null)

// Pre-generate floating particles with randomized positions/timing.
const particles = Array.from({ length: 16 }, (_, i) => {
  const size = 2 + Math.random() * 4
  return {
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${6 + Math.random() * 8}s`,
      animationDelay: `${-Math.random() * 8}s`,
      opacity: 0.15 + Math.random() * 0.4
    }
  }
})

let raf = null
const onMouse = (e) => {
  if (!parallaxEl.value) return
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  const dx = (e.clientX - cx) / cx
  const dy = (e.clientY - cy) / cy
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    parallaxEl.value.style.transform = `translate(${dx * 24}px, ${dy * 24}px)`
  })
}

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', onMouse, { passive: true })
  }
})
onUnmounted(() => {
  window.removeEventListener('mousemove', onMouse)
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.parallax {
  position: absolute;
  inset: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.particles {
  position: absolute;
  inset: 0;
}
.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #A78BFA, #F9A8D4);
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
  animation-name: drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform, opacity;
}

@keyframes drift {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-24px) translateX(10px); }
  50% { transform: translateY(-8px) translateX(-12px); }
  75% { transform: translateY(-30px) translateX(6px); }
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
}
.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--purple);
  top: -200px;
  left: -100px;
  animation: float1 10s ease-in-out infinite;
}
.orb-2 {
  width: 500px;
  height: 500px;
  background: var(--pink);
  bottom: -150px;
  right: -80px;
  animation: float2 12s ease-in-out infinite;
}
.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--purple-light);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float1 8s ease-in-out infinite reverse;
  opacity: 0.12;
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124,58,237,0.12);
  border: 1px solid rgba(124,58,237,0.3);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--purple-light);
}
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--purple-light);
  animation: pulse-dot 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 840px;
}

.anim-gradient {
  background-size: 200% auto;
  animation: gradient-shift 4s linear infinite;
  background-image: linear-gradient(135deg, #7C3AED, #EC4899, #A78BFA, #7C3AED);
  background-size: 200% 200%;
}

.hero-sub {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.75;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 24px 40px;
  backdrop-filter: blur(20px);
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 40px;
}

.stat { text-align: center; }
.stat-num {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
}
.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  white-space: nowrap;
}

.stat-sep {
  width: 1px;
  height: 40px;
  background: var(--card-border);
}

.trusted {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.trusted-label {
  font-size: 0.85rem;
  color: var(--text-faint);
}
.trusted-logos { display: flex; gap: 12px; }
.partner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
}
.partner-badge:hover { border-color: rgba(124,58,237,0.4); color: var(--text); }

.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-wheel {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  position: relative;
}
.scroll-wheel::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 8px;
  background: var(--gradient);
  border-radius: 2px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-move 1.8s ease-in-out infinite;
}
@keyframes scroll-move {
  0%,100% { top: 6px; opacity: 1; }
  70% { top: 18px; opacity: 0; }
}

@media (max-width: 768px) {
  .hero-stats { padding: 20px 24px; }
  .stat-sep { display: none; }
  .hero-title { font-size: 2.25rem; }
}
</style>
