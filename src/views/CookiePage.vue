<template>
  <LegalLayout
    title="Cookie Policy"
    kicker="Cookies"
    subtitle="Learn what cookies we use, why we use them, and how you can control your cookie preferences on oxfeeds.com."
  >
    <p class="lead">
      This Cookie Policy explains how OXFeeds uses cookies and similar technologies to recognize you
      when you visit our website, and how you can manage your preferences at any time.
    </p>

    <h2><span class="num">01</span>What Are Cookies?</h2>
    <p>Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide insights into how the site is used. We also use similar technologies such as pixels and local storage.</p>

    <h2><span class="num">02</span>Types of Cookies We Use</h2>

    <div class="cookie-table">
      <div class="cookie-row cookie-head">
        <span>Category</span>
        <span>Purpose</span>
        <span>Required</span>
      </div>
      <div class="cookie-row" v-for="c in cookies" :key="c.name">
        <span class="c-name">{{ c.name }}</span>
        <span class="c-purpose">{{ c.purpose }}</span>
        <span>
          <em class="tag" :class="c.required ? 'req' : 'opt'">{{ c.required ? 'Required' : 'Optional' }}</em>
        </span>
      </div>
    </div>

    <h2><span class="num">03</span>Essential Cookies</h2>
    <p>These cookies are strictly necessary for the website to function. They enable core features such as security, network management, and accessibility. You cannot opt out of essential cookies.</p>

    <h2><span class="num">04</span>Analytics Cookies</h2>
    <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This allows us to improve the user experience over time.</p>

    <h2><span class="num">05</span>Marketing Cookies</h2>
    <p>These cookies track your activity to help deliver relevant advertising and measure the effectiveness of campaigns. They may be set by us or by our advertising partners.</p>

    <h2><span class="num">06</span>Managing Your Preferences</h2>
    <p>When you first visit our site, you can choose which cookie categories to allow through our consent banner. You can change your choices at any time by clearing your browser's stored consent, or by adjusting your browser settings to refuse cookies.</p>
    <div class="callout">
      <p>Most browsers let you view, manage, and delete cookies through their settings. Note that disabling certain cookies may affect website functionality.</p>
    </div>

    <h2><span class="num">07</span>Third-Party Cookies</h2>
    <p>Our search engine partners (Google, Bing, Yahoo) and analytics providers may set their own cookies. These are governed by the respective providers' privacy and cookie policies.</p>

    <h2><span class="num">08</span>Updates</h2>
    <p>We may update this Cookie Policy to reflect changes in technology or regulation. Please review it periodically. For more on how we handle data, see our <router-link to="/privacy">Privacy Policy</router-link>.</p>

    <div class="callout">
      <p><strong>Contact:</strong> Questions about cookies? Email <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a>.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const cookies = [
  { name: 'Essential', purpose: 'Core site functionality, security, and consent storage', required: true },
  { name: 'Analytics', purpose: 'Anonymous usage statistics to improve the site', required: false },
  { name: 'Marketing', purpose: 'Personalized advertising and campaign measurement', required: false }
]
</script>

<style scoped>
.cookie-table {
  margin: 8px 0 8px;
  border: 1px solid var(--card-border);
  border-radius: 14px;
  overflow: hidden;
}
.cookie-row {
  display: grid;
  grid-template-columns: 1fr 2fr 0.8fr;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--card-border);
  align-items: center;
}
.cookie-row:last-child { border-bottom: none; }
.cookie-head {
  background: var(--gradient-subtle);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--purple-light);
}
.c-name { font-weight: 600; color: var(--text); font-size: 0.92rem; }
.c-purpose { font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; }
.tag {
  font-style: normal;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 50px;
}
.tag.req { background: rgba(236,72,153,0.15); color: var(--pink-light); border: 1px solid rgba(236,72,153,0.25); }
.tag.opt { background: rgba(124,58,237,0.12); color: var(--purple-light); border: 1px solid rgba(124,58,237,0.25); }

@media (max-width: 600px) {
  .cookie-row { grid-template-columns: 1fr; gap: 6px; }
  .cookie-head { display: none; }
  .c-name::before { content: ''; }
}
</style>
