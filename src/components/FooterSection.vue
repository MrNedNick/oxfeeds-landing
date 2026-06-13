<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <div class="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="gradient-text">OXFeeds</span>
          </router-link>
          <p>Premium search traffic monetization with exclusive Google, Bing &amp; Yahoo partnerships.</p>
          <a href="mailto:office@oxfeeds.com" class="footer-email">office@oxfeeds.com</a>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#" @click.prevent="goSection('services')">Services</a></li>
            <li><a href="#" @click.prevent="goSection('how-it-works')">How It Works</a></li>
            <li><a href="#" @click.prevent="goSection('why-us')">Why OXFeeds</a></li>
            <li><a href="#" @click.prevent="goSection('quiz')">Find Your Feed</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#" @click.prevent="goSection('about')">About Us</a></li>
            <li><a href="#" @click.prevent="goSection('contact')">Contact</a></li>
            <li><a href="mailto:office@oxfeeds.com">Partnerships</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
            <li><router-link to="/cookies">Cookie Policy</router-link></li>
            <li><router-link to="/gdpr">GDPR</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© {{ year }} OXFeeds. All rights reserved.</span>
        <span class="footer-made">Made with care · Powered by search</span>
        <div class="footer-partners">
          <span>Partners:</span>
          <span class="partner-tag">Google</span>
          <span class="partner-tag">Bing</span>
          <span class="partner-tag">Yahoo</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const year = new Date().getFullYear()

const goSection = async (id) => {
  if (route.path !== '/') {
    await router.push({ path: '/', hash: `#${id}` })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--card-border);
  background: rgba(255,255,255,0.02);
}

.footer-top { padding: 72px 0 48px; }

.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer-brand .logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 16px;
}
.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo span {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.footer-brand p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 280px;
  margin-bottom: 16px;
}
.footer-email {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--purple-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-email:hover { color: var(--pink-light); }

.footer-col h4 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 20px;
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-col ul a {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-col ul a:hover { color: var(--text); }

.footer-bottom {
  border-top: 1px solid var(--card-border);
  padding: 20px 0;
}
.footer-bottom-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: var(--text-faint);
}
.footer-made { margin-left: auto; }
.footer-partners { display: flex; align-items: center; gap: 8px; }
.partner-tag {
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.15);
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--purple-light);
}

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-made { margin-left: 0; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
