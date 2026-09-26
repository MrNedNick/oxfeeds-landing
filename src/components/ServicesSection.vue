<template>
  <section id="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">We help to <span class="gradient-text">monetize your:</span></h2>
      </div>

      <ul class="services-grid">
        <li v-for="(s, i) in services" :key="s.title"
          class="service-card glass-card reveal"
          :class="`delay-${(i % 4) + 1}`">
          <div class="card-icon">
            <img :src="img(`icons/${s.icon}`)" alt="" width="28" height="28">
          </div>
          <h3>{{ s.title }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../lib/vue/use-tilt'
import { img } from '../lib/assets.js'

useTilt('.service-card')

// Word for word, and in the same order, as the list on oxfeeds.com.
const services = [
  { title: 'Native to search', icon: 'help-1.svg' },
  { title: 'Browsers and Extensions', icon: 'help-2.svg' },
  { title: 'Add-ons', icon: 'help-3.svg' },
  { title: 'Start pages and Websites', icon: 'help-4.svg' },
  { title: 'Apps and Launchers', icon: 'help-5.svg' },
  { title: 'Social to search', icon: 'help-6.svg' },
  { title: 'Search to search', icon: 'help-7.svg' }
]
</script>

<style scoped>
.services-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 16px;
}
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-subtle);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: inherit;
}
.service-card:hover::before { opacity: 1; }

.card-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(124,58,237,0.2);
  position: relative;
}

.service-card h3 {
  position: relative;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.35;
}

@media (max-width: 1000px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
