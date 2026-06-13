<template>
  <section id="how-it-works" class="hiw-section">
    <div class="hiw-bg">
      <div class="hiw-orb"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Simple Process
        </div>
        <h2 class="section-title reveal delay-1">Get Running in <span class="gradient-text">Three Steps</span></h2>
        <p class="section-sub reveal delay-2">Our streamlined onboarding gets you earning from search traffic in no time.</p>
      </div>

      <div class="steps">
        <div v-for="(step, i) in steps" :key="step.title" class="step-wrap reveal" :class="`delay-${i+1}`">
          <div class="step-card glass-card">
            <div class="step-num">
              <span class="gradient-text">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="step-icon" v-html="step.icon"></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
          <div class="step-connector" v-if="i < steps.length - 1">
            <svg viewBox="0 0 80 24" fill="none" class="connector-svg">
              <path d="M0 12 Q40 12 80 12" stroke="url(#grad)" stroke-width="1.5" stroke-dasharray="4 3"/>
              <polygon points="76,8 80,12 76,16" fill="url(#grad2)"/>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#EC4899" stop-opacity="0.8"/>
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#7C3AED"/>
                  <stop offset="100%" stop-color="#EC4899"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div class="hiw-cta reveal delay-4">
        <a href="#contact" class="btn-primary">Start Your Integration</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Choose Your Feed',
    desc: 'Select from Yahoo N2S/Type-in, Google RSOC/Type-in, or Bing N2S/Type-in feeds based on your traffic source and target audience.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#sg1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="sg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>`
  },
  {
    title: 'Integrate Seamlessly',
    desc: 'Our clean API and search feed solutions make integration straightforward. Plug into any digital platform with minimal code changes.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#sg2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  {
    title: 'Earn More',
    desc: 'Access high-RPM feeds and large traffic caps. Watch your revenue grow with real-time analytics and dedicated account management.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#sg3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="sg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`
  }
]
</script>

<style scoped>
.hiw-section { position: relative; overflow: hidden; }

.hiw-bg { position: absolute; inset: 0; pointer-events: none; }
.hiw-orb {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
  top: 50%;
  right: -200px;
  transform: translateY(-50%);
}

.steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
}

.step-wrap {
  display: flex;
  align-items: center;
  flex: 1;
}

.step-card {
  flex: 1;
  padding: 36px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.step-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}
.step-card:hover::after { transform: scaleX(1); }

.step-num {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 16px;
  opacity: 0.35;
}

.step-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.step-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.step-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.step-connector {
  width: 60px;
  flex-shrink: 0;
  padding: 0 4px;
}

.connector-svg {
  width: 100%;
  height: 24px;
}

.hiw-cta {
  text-align: center;
  margin-top: 56px;
}

@media (max-width: 900px) {
  .steps { flex-direction: column; gap: 16px; }
  .step-wrap { flex-direction: column; width: 100%; }
  .step-connector { transform: rotate(90deg); margin: 8px 0; }
}
</style>
