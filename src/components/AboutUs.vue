<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-left">
          <div class="section-tag reveal">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
            About OXFeeds
          </div>
          <h2 class="section-title reveal delay-1">
            We Help Publishers <span class="gradient-text">Earn More</span> From Search
          </h2>
          <p class="about-text reveal delay-2">
            OXFeeds is a specialized search monetization partner that bridges the gap between
            publishers and the world's leading search engines. We've built direct relationships
            with Google, Bing, and Yahoo to give our partners access to premium, high-RPM
            search feeds that aren't available anywhere else.
          </p>
          <p class="about-text reveal delay-3">
            Whether you run browser extensions, mobile apps, websites, or any other digital
            platform, our team of experts will help you find the perfect monetization strategy
            and maximize your revenue from search traffic.
          </p>
          <div class="about-values reveal delay-4">
            <div class="value-item" v-for="v in values" :key="v.label">
              <div class="value-dot"></div>
              <div>
                <strong>{{ v.label }}</strong>
                <p>{{ v.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-right">
          <div class="about-card-main glass-card reveal-right delay-2">
            <div class="about-card-inner">
              <div class="ac-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#ag1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <defs><linearGradient id="ag1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div class="ac-content">
                <div class="ac-num gradient-text">3</div>
                <div class="ac-label">Official Search Partners</div>
              </div>
            </div>
            <div class="about-card-inner">
              <div class="ac-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#ag2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <defs><linearGradient id="ag2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <div class="ac-content">
                <div class="ac-num gradient-text">7+</div>
                <div class="ac-label">Traffic Formats Supported</div>
              </div>
            </div>
            <div class="about-card-inner">
              <div class="ac-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#ag3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <defs><linearGradient id="ag3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div class="ac-content">
                <div class="ac-num gradient-text">100+</div>
                <div class="ac-label">Active Publisher Partners</div>
              </div>
            </div>
          </div>

          <div class="about-mission glass-card reveal-right delay-3">
            <div class="mission-icon">🎯</div>
            <h4>Our Mission</h4>
            <p>Empower digital publishers of all sizes to unlock the full revenue potential of their search traffic through exclusive partnerships and expert guidance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { label: 'Transparency', text: 'Real-time reporting and honest communication at every stage.' },
  { label: 'Partnership', text: 'We grow when you grow — your success is our success.' },
  { label: 'Innovation', text: 'Constantly optimizing feeds and strategies to maximize your RPM.' }
]
</script>

<style scoped>
.about-section { position: relative; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.about-left { display: flex; flex-direction: column; gap: 0; }
.about-left .section-tag { align-self: flex-start; }

.about-text {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-top: 20px;
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
}
.value-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.value-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient);
  flex-shrink: 0;
  margin-top: 6px;
}
.value-item strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.value-item p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card-main {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.about-card-inner {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--card-border);
}
.about-card-inner:last-child { border-bottom: none; padding-bottom: 0; }
.about-card-inner:first-child { padding-top: 0; }

.ac-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ac-num {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1;
}
.ac-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.about-mission {
  padding: 28px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.mission-icon { font-size: 1.5rem; flex-shrink: 0; }
.about-mission h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.about-mission p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
}
</style>
