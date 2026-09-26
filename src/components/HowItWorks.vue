<template>
  <section id="how" class="hiw-section">
    <div class="hiw-bg">
      <div class="hiw-orb"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">How <span class="gradient-text">It Works</span></h2>
      </div>

      <ol class="steps">
        <li v-for="(step, i) in steps" :key="step.title" class="step-wrap reveal" :class="`delay-${i+1}`">
          <div class="step-card glass-card">
            <div class="step-num">
              <span class="gradient-text">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="step-media">
              <img class="step-img" :src="img(`pictures/${step.picture}`)" alt="" width="720" height="578" loading="lazy">
              <img class="step-deco" :class="`step-deco-${i + 1}`" :src="img(`icons/${step.deco}`)" alt="" loading="lazy">
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
          <div class="step-connector" v-if="i < steps.length - 1" aria-hidden="true">
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
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { img } from '../lib/assets.js'

// Copy and pictures as on oxfeeds.com; the images are the site's own
// illustrations of each step.
const steps = [
  {
    title: 'Choose Your Feed',
    desc: 'Yahoo N2S/Type-in; Google RSOC/Type-in; Bing N2S/Type-in.',
    picture: 'how-card-1.webp',
    deco: 'card-element-1.svg'
  },
  {
    title: 'Integrate Seamlessly',
    desc: 'Our API and search feed solutions make it easy to monetize your traffic.',
    picture: 'how-card-2.webp',
    deco: 'card-element-2.svg'
  },
  {
    title: 'Earn More',
    desc: 'Get access to high-RPM feeds and large traffic caps.',
    picture: 'how-card-3.webp',
    deco: 'card-element-4.svg'
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
  list-style: none;
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

.step-media {
  position: relative;
  margin: 0 auto 24px;
  max-width: 280px;
}
.step-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 4;
  object-fit: contain;
}
.step-deco {
  position: absolute;
  height: auto;
  pointer-events: none;
  animation: deco-float 6s ease-in-out infinite;
}
.step-deco-1 { width: 42%; right: -8%; top: -10%; }
.step-deco-2 { width: 22%; left: -6%; bottom: -8%; animation-delay: -2s; }
.step-deco-3 { width: 26%; right: -6%; bottom: -10%; animation-delay: -4s; }
@keyframes deco-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
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

@media (max-width: 900px) {
  .steps { flex-direction: column; gap: 16px; }
  .step-wrap { flex-direction: column; width: 100%; }
  .step-connector { transform: rotate(90deg); margin: 8px 0; }
}
</style>
