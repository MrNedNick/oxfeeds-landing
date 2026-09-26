<template>
  <footer class="footer">
    <div class="container footer-inner">
      <router-link to="/" class="footer-logo">
        <img :src="img('logo.svg')" alt="Oxfeeds" width="163" height="39">
      </router-link>

      <nav class="footer-nav" aria-label="Footer">
        <a href="#how" @click.prevent="goSection('how')">How it Works</a>
        <a href="#choose" @click.prevent="goSection('choose')">Why choose us</a>
        <a href="#quiz" @click.prevent="goSection('quiz')">Quiz</a>
      </nav>

      <a href="mailto:office@oxfeeds.com" class="footer-email">office@oxfeeds.com</a>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { img } from '../lib/assets.js'

const router = useRouter()
const route = useRoute()

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
  background: var(--bg-secondary);
  padding: 40px 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-logo img { display: block; width: 120px; height: auto; }
.footer-nav { display: flex; gap: 28px; flex-wrap: wrap; }
.footer-nav a, .footer-email {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.footer-nav a:hover, .footer-email:hover { color: var(--text); }
.footer-email { font-weight: 600; color: var(--text); }

@media (max-width: 700px) {
  .footer-inner { flex-direction: column; text-align: center; }
  .footer-nav { justify-content: center; }
}
</style>
