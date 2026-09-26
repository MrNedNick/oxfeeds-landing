<template>
  <div class="lead-success" role="status">
    <div class="ls-icon" aria-hidden="true">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#lsg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="lsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#EC4899"/></linearGradient></defs>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <h3>Thank you for your <span class="gradient-text">request!</span></h3>
    <p>We have received your submission and will contact you shortly.</p>
    <p v-if="demo" class="ls-demo">
      Demo mode: the form was validated, but no delivery provider is configured on this copy of the site — nothing was actually sent.
    </p>
  </div>
</template>

<script setup>
// Wording from the site's /thank-you/ page.
defineProps({ demo: { type: Boolean, default: false } })
</script>

<style scoped>
.lead-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  padding: 12px 0;
}
.ls-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.lead-success h3 { font-size: 1.4rem; font-weight: 800; }
.lead-success p { color: var(--text-muted); max-width: 420px; }
.ls-demo {
  font-size: 0.85rem;
  border: 1px dashed rgba(167,139,250,0.4);
  border-radius: 12px;
  padding: 10px 14px;
}
</style>
