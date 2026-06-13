<template>
  <section id="services">
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          What We Monetize
        </div>
        <h2 class="section-title reveal delay-1">Monetize <span class="gradient-text">Any Traffic Format</span></h2>
        <p class="section-sub reveal delay-2">From browser extensions to mobile apps, we have the right feed solution for your traffic source.</p>
      </div>

      <div class="services-grid">
        <div v-for="(s, i) in services" :key="s.title"
          class="service-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="card-icon" :style="{ background: s.gradient }">
            <span v-html="s.icon"></span>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <div class="card-badge">{{ s.badge }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../composables/useTilt'

useTilt('.service-card')

const services = [
  {
    title: 'Browsers & Extensions',
    desc: 'Monetize your browser extension or add-on traffic with high-converting search feeds.',
    badge: 'Most Popular',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(124,58,237,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  },
  {
    title: 'Apps & Launchers',
    desc: 'Integrate search monetization into mobile or desktop apps and launchers seamlessly.',
    badge: 'High RPM',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  },
  {
    title: 'Start Pages & Websites',
    desc: 'Add search functionality to your start pages or websites and earn from every query.',
    badge: 'Easy Setup',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(167,139,250,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  },
  {
    title: 'Native to Search',
    desc: 'Convert native traffic into high-value search queries with our N2S feed solutions.',
    badge: 'Premium',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`
  },
  {
    title: 'Social to Search',
    desc: 'Bridge social media traffic to monetized search experiences with our proven flows.',
    badge: 'Growing',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(124,58,237,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5l3 3 3-3h7V2z"/></svg>`
  },
  {
    title: 'Search to Search',
    desc: 'Re-monetize search traffic with higher-yielding feeds for maximum revenue per query.',
    badge: 'Best ROI',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(236,72,153,0.05))',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`
  }
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  padding: 32px;
  position: relative;
  overflow: hidden;
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
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--purple-light);
  border: 1px solid rgba(124,58,237,0.2);
  position: relative;
}

.service-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.service-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 20px;
}

.card-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  color: var(--purple-light);
  border-radius: 50px;
  padding: 4px 12px;
}

@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
