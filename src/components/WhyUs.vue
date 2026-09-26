<template>
  <section id="choose">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">Why <span class="gradient-text">Choose Us?</span></h2>
      </div>

      <div class="why-layout">
        <ul class="why-grid">
          <li v-for="(item, i) in features" :key="item.title"
            class="why-card glass-card reveal"
            :class="`delay-${i + 1}`">
            <div class="why-icon-wrap">
              <div class="why-icon" v-html="item.icon"></div>
              <div class="why-icon-glow"></div>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </li>
        </ul>

        <div class="why-visual reveal-right delay-2" aria-hidden="true">
          <img class="wv-magnifier" :src="img('pictures/magnifier.webp')" alt="" width="640" height="408" loading="lazy">
          <img class="wv-chip wv-google" :src="img('icons/google.svg')" alt="" width="228" height="85" loading="lazy">
          <img class="wv-chip wv-bing" :src="img('icons/bing.svg')" alt="" width="228" height="85" loading="lazy">
          <img class="wv-chip wv-yahoo" :src="img('icons/yahoo.svg')" alt="" width="228" height="85" loading="lazy">
          <img class="wv-coin" :src="img('icons/card-element-3.svg')" alt="" width="146" height="122" loading="lazy">
        </div>
      </div>

      <div class="why-cta reveal delay-3">
        <a href="#contact" class="btn-primary">Monetize Now</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../lib/vue/use-tilt'
import { img } from '../lib/assets.js'

useTilt('.why-card')

// Titles and copy as on oxfeeds.com.
const features = [
  {
    title: 'Exclusive Partnerships',
    desc: 'We collaborate with top search providers like Bing, Google and Yahoo.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'High Revenue Potential',
    desc: 'Maximize earnings with our premium search feed solutions.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    title: 'Seamless Integration',
    desc: 'Quick and easy implementation for all digital platforms.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
  },
  {
    title: '24/7 Support',
    desc: 'Our dedicated team ensures your success at every step.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi4)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.17 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`
  }
]
</script>

<style scoped>
.why-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}

.why-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.why-card {
  padding: 40px;
  position: relative;
  overflow: hidden;
}
.why-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}
.why-card:hover::before { transform: scaleX(1); }

.why-icon-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}
.why-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.why-icon-glow {
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  background: var(--gradient);
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.3s;
  z-index: -1;
}
.why-card:hover .why-icon-glow { opacity: 0.2; }

.why-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.why-card p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.why-visual {
  position: relative;
  aspect-ratio: 1 / 1;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
}
.wv-magnifier {
  position: absolute;
  inset: 18% 0 auto 0;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(124,58,237,0.35));
}
.wv-chip, .wv-coin {
  position: absolute;
  height: auto;
  animation: wv-float 7s ease-in-out infinite;
}
.wv-chip { width: 42%; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.35)); }
.wv-google { left: 0; top: 4%; }
.wv-bing { right: 0; top: 0; animation-delay: -2s; }
.wv-yahoo { left: 12%; bottom: 6%; animation-delay: -4s; }
.wv-coin { width: 24%; right: 8%; bottom: 10%; animation-delay: -3s; }
@keyframes wv-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.why-cta {
  text-align: center;
  margin-top: 48px;
}

@media (max-width: 1000px) {
  .why-layout { grid-template-columns: 1fr; }
  .why-visual { max-width: 340px; }
}
@media (max-width: 768px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-card { padding: 28px; }
}
</style>
