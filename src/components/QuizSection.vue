<template>
  <section id="quiz" class="quiz-section">
    <div class="quiz-bg">
      <div class="quiz-orb"></div>
    </div>
    <div class="container">
      <div class="quiz-wrap glass-card reveal">
        <div class="quiz-header">
          <div class="section-tag" style="margin-bottom:16px">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
            Quick Quiz
          </div>
          <h2 class="section-title">Not Sure Where to <span class="gradient-text">Start?</span></h2>
          <p class="section-sub" style="margin:0">Tell us about your traffic and we'll recommend the perfect monetization strategy.</p>
        </div>

        <div v-if="!submitted">
          <div class="quiz-options">
            <button
              v-for="opt in options"
              :key="opt.id"
              class="quiz-opt"
              :class="{ selected: selected === opt.id }"
              @click="selected = opt.id">
              <div class="opt-icon" v-html="opt.icon"></div>
              <span>{{ opt.label }}</span>
            </button>
          </div>

          <div class="quiz-action">
            <button class="btn-primary" :disabled="!selected" @click="submit">
              Get My Recommendation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div v-else class="quiz-result">
          <div class="result-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#rg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Great choice! Here's our recommendation:</h3>
          <div class="result-card">
            <div class="result-feed gradient-text">{{ result.feed }}</div>
            <p>{{ result.desc }}</p>
          </div>
          <a href="#contact" class="btn-primary" style="margin-top: 24px">Talk to an Expert</a>
          <button class="btn-secondary" style="margin-top: 12px" @click="reset">Try Again</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selected = ref(null)
const submitted = ref(false)

const options = [
  {
    id: 'ext',
    label: 'Extensions & Add-ons',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  },
  {
    id: 'web',
    label: 'Website Search',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  },
  {
    id: 'app',
    label: 'Apps & Launchers',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  },
  {
    id: 'native',
    label: 'Native to Search',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`
  },
  {
    id: 'display',
    label: 'Display to Search',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="14" rx="2"/><path d="M7 22h10M12 17v5"/></svg>`
  },
  {
    id: 's2s',
    label: 'Search to Search',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`
  }
]

const recommendations = {
  ext: { feed: 'Google RSOC / Yahoo N2S', desc: 'Browser extensions benefit most from search feed solutions. We recommend Google RSOC for high-intent users and Yahoo N2S for broader monetization.' },
  web: { feed: 'Google Type-in / Bing N2S', desc: 'Websites with search bars are ideal for Type-in feeds. Google Type-in delivers excellent RPM for organic search traffic.' },
  app: { feed: 'Yahoo N2S / Bing N2S', desc: 'Mobile and desktop apps perform best with N2S feeds. Yahoo N2S offers wide coverage and competitive rates for app traffic.' },
  native: { feed: 'Google RSOC / Yahoo N2S', desc: 'Native traffic converts well with RSOC and N2S feeds. Our team will optimize the flow to maximize your conversion rate.' },
  display: { feed: 'Google RSOC / Bing N2S', desc: 'Display-to-search is a powerful flow we specialize in. We\'ll set up a custom funnel to maximize your RPM from display campaigns.' },
  s2s: { feed: 'All Premium Feeds', desc: 'Search-to-search traffic gets access to our full premium feed portfolio. We\'ll match you with the highest-yielding provider for your specific query types.' }
}

const result = computed(() => recommendations[selected.value] || {})
const submit = () => { if (selected.value) submitted.value = true }
const reset = () => { submitted.value = false; selected.value = null }
</script>

<style scoped>
.quiz-section { position: relative; overflow: hidden; }
.quiz-bg { position: absolute; inset: 0; pointer-events: none; }
.quiz-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%);
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
}

.quiz-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 60px;
  text-align: center;
  position: relative;
}

.quiz-header { margin-bottom: 48px; }

.quiz-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 36px;
}

.quiz-opt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all 0.25s ease;
  font-family: inherit;
}
.quiz-opt:hover {
  border-color: rgba(124,58,237,0.4);
  color: var(--text);
  background: rgba(255,255,255,0.06);
  transform: translateY(-2px);
}
.quiz-opt.selected {
  border-color: var(--purple);
  background: rgba(124,58,237,0.12);
  color: var(--text);
  box-shadow: 0 0 0 1px rgba(124,58,237,0.4), 0 8px 20px rgba(124,58,237,0.15);
}
.quiz-opt.selected .opt-icon { color: var(--purple-light); }

.opt-icon {
  color: var(--text-faint);
  transition: color 0.25s;
}
.quiz-opt:hover .opt-icon { color: var(--purple-light); }

.quiz-action {
  display: flex;
  justify-content: center;
}
.quiz-action button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
}

.quiz-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.result-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-result h3 {
  font-size: 1.2rem;
  font-weight: 700;
}
.result-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 24px 32px;
  width: 100%;
  max-width: 480px;
}
.result-feed {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.result-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
}

@media (max-width: 700px) {
  .quiz-wrap { padding: 36px 24px; }
  .quiz-options { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .quiz-options { grid-template-columns: 1fr; }
}
</style>
