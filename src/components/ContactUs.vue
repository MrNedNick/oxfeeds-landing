<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg">
      <div class="c-orb-1"></div>
      <div class="c-orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Get In Touch
        </div>
        <h2 class="section-title reveal delay-1">Ready to <span class="gradient-text">Grow Your Revenue?</span></h2>
        <p class="section-sub reveal delay-2">Reach out to our team today and we'll help you get started with the best monetization strategy for your traffic.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info reveal-left delay-2">
          <div class="info-item glass-card" v-for="item in info" :key="item.label">
            <div class="info-icon" v-html="item.icon"></div>
            <div>
              <div class="info-label">{{ item.label }}</div>
              <div class="info-value">
                <a v-if="item.href" :href="item.href">{{ item.value }}</a>
                <span v-else>{{ item.value }}</span>
              </div>
            </div>
          </div>

          <div class="contact-promise glass-card">
            <div class="promise-header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#cpg)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <defs><linearGradient id="cpg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              What to expect
            </div>
            <ul class="promise-list">
              <li v-for="p in promises" :key="p">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" fill="rgba(124,58,237,0.15)"/>
                  <path d="M4 7l2 2 4-4" stroke="#A78BFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ p }}
              </li>
            </ul>
          </div>
        </div>

        <div class="contact-form-wrap glass-card reveal-right delay-2">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <h3>Send Us a Message</h3>

            <div class="form-row">
              <div class="form-group">
                <label>Your Name</label>
                <input v-model="form.name" type="text" placeholder="John Smith" required />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input v-model="form.email" type="email" placeholder="john@company.com" required />
              </div>
            </div>

            <div class="form-group">
              <label>Traffic Type</label>
              <select v-model="form.trafficType">
                <option value="">Select your traffic format</option>
                <option value="ext">Extensions & Add-ons</option>
                <option value="web">Website / Start Page</option>
                <option value="app">Apps & Launchers</option>
                <option value="native">Native to Search</option>
                <option value="display">Display to Search</option>
                <option value="s2s">Search to Search</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Tell us about your traffic volume, platform, and monetization goals..." required></textarea>
            </div>

            <button type="submit" class="btn-primary submit-btn" :class="{ sending }">
              <span v-if="!sent && !sending">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2L1 8.5l4 1.5 2 4 2-4 5-8z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span v-else-if="sending">Sending...</span>
              <span v-else>
                Message Sent!
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l4 4 8-8" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', trafficType: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const info = [
  {
    label: 'Email Us',
    value: 'office@oxfeeds.com',
    href: 'mailto:office@oxfeeds.com',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#ig1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="ig1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#ig2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="ig2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    label: 'Support',
    value: '24/7 Available',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#ig3)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="ig3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.17 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`
  }
]

const promises = [
  'Personal response from our team within 24 hours',
  'Free consultation on your monetization strategy',
  'No commitment required to get started',
  'Dedicated account manager assigned on sign-up'
]

const handleSubmit = async () => {
  sending.value = true
  await new Promise(r => setTimeout(r, 1400))
  sending.value = false
  sent.value = true
  form.value = { name: '', email: '', trafficType: '', message: '' }
  setTimeout(() => { sent.value = false }, 5000)
}
</script>

<style scoped>
.contact-section { position: relative; overflow: hidden; }
.contact-bg { position: absolute; inset: 0; pointer-events: none; }
.c-orb-1 {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
  top: -100px; left: -100px;
}
.c-orb-2 {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%);
  bottom: -50px; right: -50px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 32px;
  align-items: start;
  position: relative;
}

.contact-info { display: flex; flex-direction: column; gap: 16px; }

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
}
.info-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.info-label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
  margin-bottom: 3px;
}
.info-value {
  font-size: 0.95rem;
  font-weight: 600;
}
.info-value a {
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
}
.info-value a:hover { color: var(--purple-light); }

.contact-promise {
  padding: 24px;
}
.promise-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.promise-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.promise-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.contact-form-wrap { padding: 40px; }

.contact-form h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

input, select, textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: var(--text);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  resize: none;
}
input::placeholder, textarea::placeholder { color: var(--text-faint); }
select option { background: #0D1022; }

input:focus, select:focus, textarea:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(124,58,237,0.15);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 1rem;
}
.submit-btn.sending { opacity: 0.8; pointer-events: none; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .contact-form-wrap { padding: 28px 20px; }
}
</style>
