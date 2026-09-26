<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg">
      <div class="c-orb-1"></div>
      <div class="c-orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <p class="eyebrow reveal">Interested in growing your revenue with search monetization?</p>
        <h2 class="section-title reveal delay-1">Reach out to our team <span class="gradient-text">today.</span></h2>
      </div>

      <div class="contact-card glass-card reveal delay-2">
        <LeadSuccess v-if="status === 'success'" :demo="demo" />

        <form v-else class="contact-form" @submit.prevent="send({ form: 'contact' })">
          <LeadFields v-model="fields" />

          <p v-if="status === 'error'" class="form-error" role="alert">
            Something went wrong sending your request. Please try again.
          </p>

          <button type="submit" class="btn-primary submit-btn" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Sending…' : status === 'error' ? 'Retry' : 'Send' }}
          </button>
        </form>

        <a href="mailto:office@oxfeeds.com" class="contact-email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          office@oxfeeds.com
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import LeadFields from './LeadFields.vue'
import LeadSuccess from './LeadSuccess.vue'
import { useLeadForm } from '../lib/useLeadForm.js'

const { fields, status, demo, send } = useLeadForm()
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

.contact-card {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  padding: 40px;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 1rem;
  margin-top: 18px;
}
.submit-btn:disabled { opacity: 0.8; cursor: progress; }

.contact-email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--card-border);
  color: var(--text);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.contact-email:hover { color: var(--purple-light); }

@media (max-width: 600px) {
  .contact-card { padding: 28px 20px; }
}
</style>
