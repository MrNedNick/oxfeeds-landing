<template>
  <section id="why-us">
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Our Advantages
        </div>
        <h2 class="section-title reveal delay-1">Why <span class="gradient-text">Choose OXFeeds?</span></h2>
        <p class="section-sub reveal delay-2">We combine exclusive partnerships with cutting-edge technology to maximize your earnings.</p>
      </div>

      <div class="why-grid">
        <div v-for="(item, i) in features" :key="item.title"
          class="why-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="why-icon-wrap">
            <div class="why-icon" v-html="item.icon"></div>
            <div class="why-icon-glow"></div>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <ul class="why-points">
            <li v-for="pt in item.points" :key="pt">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="rgba(124,58,237,0.15)"/>
                <path d="M4 7l2 2 4-4" stroke="#A78BFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ pt }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../composables/useTilt'

useTilt('.why-card')

const features = [
  {
    title: 'Exclusive Partnerships',
    desc: 'Direct relationships with the world\'s top search providers give you access to premium feeds unavailable elsewhere.',
    points: ['Google RSOC & Type-in', 'Yahoo N2S & Type-in', 'Bing N2S & Type-in'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'High Revenue Potential',
    desc: 'Maximize your earnings with premium high-RPM feeds and large traffic caps that scale with your audience.',
    points: ['Industry-leading RPM rates', 'Large traffic cap allowances', 'Real-time revenue tracking'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    title: 'Seamless Integration',
    desc: 'Quick and easy implementation via our clean API for all digital platforms — no complex setup required.',
    points: ['Clean REST API', 'Comprehensive documentation', 'All platform support'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
  },
  {
    title: '24/7 Expert Support',
    desc: 'Our dedicated team of monetization specialists is always available to ensure your success at every step.',
    points: ['Dedicated account manager', 'Technical support team', 'Performance optimization'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#wi4)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="wi4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.17 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`
  }
]
</script>

<style scoped>
.why-grid {
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
  margin-bottom: 24px;
}

.why-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.why-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-card { padding: 28px; }
}
</style>
