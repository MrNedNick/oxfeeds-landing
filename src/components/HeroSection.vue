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
      <h1 class="hero-title">
        Monetize Your Search Traffic<br>
        <span class="gradient-text anim-gradient">Like Never Before</span>
      </h1>

      <p class="hero-sub">
        Grow your revenue with our exclusive partnerships and advanced search monetization strategies.
      </p>

      <div class="hero-ctas hero-in">
        <a href="#contact" class="btn-primary">
          Monetize Now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- The search engines and browsers the feeds run through, floating
           around a search bar — the same pieces as on oxfeeds.com. -->
      <div class="hero-visual hero-in hero-in-late" aria-hidden="true">
        <img class="hv-search" :src="img('icons/search.svg')" alt="" width="377" height="85">
        <img class="hv hv-google" :src="img('icons/google.svg')" alt="" width="228" height="85">
        <img class="hv hv-bing" :src="img('icons/bing.svg')" alt="" width="228" height="85">
        <img class="hv hv-yahoo" :src="img('icons/yahoo.svg')" alt="" width="228" height="85">
        <img class="hv hv-safari" :src="img('icons/safari.svg')" alt="" width="228" height="85">
        <img class="hv hv-firefox" :src="img('icons/firefox.svg')" alt="" width="228" height="85">
        <img class="hv-deco hv-gear-1" :src="img('icons/gear-1.webp')" alt="" width="148" height="100">
        <img class="hv-deco hv-gear-2" :src="img('icons/gear-2.svg')" alt="" width="68" height="78">
        <img class="hv-deco hv-coin-1" :src="img('icons/coin-1.webp')" alt="" width="86" height="86">
        <img class="hv-deco hv-coin-2" :src="img('icons/coin-2.webp')" alt="" width="86" height="100">
      </div>
    </div>

    <div class="scroll-hint reveal delay-6">
      <div class="scroll-wheel"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { img } from '../lib/assets.js'

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

.hero-visual {
  position: relative;
  width: min(760px, 100%);
  height: 300px;
  margin-top: 8px;
}
.hv-search {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(377px, 70%);
  height: auto;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 16px 40px rgba(124,58,237,0.35));
}
.hv, .hv-deco {
  position: absolute;
  height: auto;
  animation: hv-float 7s ease-in-out infinite;
}
@keyframes hv-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.hv { width: clamp(110px, 22%, 170px); filter: drop-shadow(0 10px 24px rgba(0,0,0,0.35)); }
.hv-google  { left: 2%;  top: 4%;  animation-delay: -1s; }
.hv-bing    { right: 4%; top: 0;   animation-delay: -3s; }
.hv-yahoo   { left: 8%;  bottom: 0; animation-delay: -5s; }
.hv-safari  { right: 0;  bottom: 8%; animation-delay: -2s; }
.hv-firefox { left: 38%; bottom: -6%; animation-delay: -4s; }
.hv-gear-1 { width: 74px; left: 30%; top: -4%; animation-duration: 9s; }
.hv-gear-2 { width: 40px; right: 30%; top: 8%; animation-duration: 8s; animation-delay: -2s; }
.hv-coin-1 { width: 56px; right: 22%; bottom: 0; animation-duration: 6s; }
.hv-coin-2 { width: 48px; left: 24%; top: 30%; animation-duration: 10s; animation-delay: -3s; }

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

/* The first screen animates in on load with CSS alone. The headline and
   subtitle are not animated at all: they are the largest paint, and holding
   them at opacity 0 until an observer fires is what delayed it. */
.hero-in { animation: hero-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
.hero-in-late { animation-delay: 0.3s; }
@keyframes hero-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-in { animation: none; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.25rem; }
  .hero-visual { height: 230px; }
  /* Five chips and four decorations do not fit a phone; keep the four
     search engines/browsers around the search bar. */
  .hv-deco, .hv-firefox { display: none; }
  .hv-yahoo { left: 2%; }
}
</style>
