<template>
  <LegalLayout
    title="GDPR Compliance"
    kicker="Data Rights"
    subtitle="Your rights under the General Data Protection Regulation and how OXFeeds helps you exercise them."
  >
    <p class="lead">
      OXFeeds is committed to protecting the personal data of individuals in the European Union and
      European Economic Area in accordance with the General Data Protection Regulation (GDPR). This
      page outlines your rights and how to exercise them.
    </p>

    <h2><span class="num">01</span>Our Commitment</h2>
    <p>We process personal data lawfully, fairly, and transparently. We collect only what we need, keep it secure, and retain it no longer than necessary. We act as the data controller for data collected through our website.</p>

    <h2><span class="num">02</span>Your GDPR Rights</h2>
    <div class="rights-grid">
      <div class="right-card glass-card reveal" v-for="(r, i) in rights" :key="r.title" :class="`delay-${(i % 4) + 1}`">
        <div class="right-icon" v-html="r.icon"></div>
        <h3>{{ r.title }}</h3>
        <p>{{ r.desc }}</p>
      </div>
    </div>

    <h2><span class="num">03</span>How to Exercise Your Rights</h2>
    <p>To exercise any of the rights above, send a request to <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a>. We will:</p>
    <ol>
      <li>Verify your identity to protect your data</li>
      <li>Respond to your request within 30 days</li>
      <li>Provide the requested information or action free of charge in most cases</li>
      <li>Explain our reasoning if we are unable to fulfill a request</li>
    </ol>

    <h2><span class="num">04</span>Legal Basis for Processing</h2>
    <p>Under GDPR, we rely on the following lawful bases:</p>
    <ul>
      <li><strong>Consent</strong> — for marketing communications and non-essential cookies</li>
      <li><strong>Contract</strong> — to deliver the monetization services you request</li>
      <li><strong>Legitimate interests</strong> — to secure, maintain, and improve our services</li>
      <li><strong>Legal obligation</strong> — to comply with applicable laws</li>
    </ul>

    <h2><span class="num">05</span>International Data Transfers</h2>
    <p>Where data is transferred outside the EEA — for example to our search engine partners — we ensure appropriate safeguards are in place, such as standard contractual clauses or adequacy decisions.</p>

    <h2><span class="num">06</span>Data Protection Measures</h2>
    <ul>
      <li>Encryption of data in transit</li>
      <li>Strict access controls and authentication</li>
      <li>Regular security reviews and monitoring</li>
      <li>Data minimization and purpose limitation by design</li>
    </ul>

    <h2><span class="num">07</span>Right to Lodge a Complaint</h2>
    <p>If you believe your data protection rights have been violated, you have the right to lodge a complaint with your local supervisory authority. We encourage you to contact us first so we can address your concerns directly.</p>

    <div class="callout">
      <p><strong>Data Protection Contact:</strong> For all GDPR requests and inquiries, email <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a>. See also our <router-link to="/privacy">Privacy Policy</router-link>.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const rights = [
  { title: 'Right to Access', desc: 'Request a copy of the personal data we hold about you and information on how it is used.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
  { title: 'Right to Rectification', desc: 'Ask us to correct any inaccurate or incomplete personal data without undue delay.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>` },
  { title: 'Right to Erasure', desc: 'Request deletion of your personal data ("right to be forgotten") where applicable.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>` },
  { title: 'Right to Restrict', desc: 'Limit how we process your data in certain circumstances while a concern is resolved.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>` },
  { title: 'Right to Portability', desc: 'Receive your data in a structured, machine-readable format and transfer it elsewhere.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>` },
  { title: 'Right to Object', desc: 'Object to processing based on legitimate interests or for direct marketing purposes.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` }
]
</script>

<style scoped>
.rights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 8px 0 16px;
}
.right-card { padding: 24px; }
.right-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
  margin-bottom: 14px;
}
.right-card h3 { font-size: 1rem; font-weight: 700; margin: 0 0 6px; }
.right-card p { font-size: 0.86rem; color: var(--text-muted); line-height: 1.6; margin: 0; }

@media (max-width: 600px) {
  .rights-grid { grid-template-columns: 1fr; }
}
</style>
