<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <router-link to="/" class="logo">
        <img :src="img('logo.svg')" alt="Oxfeeds" width="163" height="39" class="logo-img">
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#how" @click.prevent="goSection('how')">How it Works</a>
        <a href="#choose" @click.prevent="goSection('choose')">Why choose us</a>
        <a href="#quiz" @click.prevent="goSection('quiz')">Quiz</a>
      </nav>

      <div class="nav-right">
        <a href="#contact" class="btn-primary nav-cta" @click.prevent="goSection('contact')">Monetize Now</a>
        <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }" :aria-expanded="menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { img } from '../lib/assets.js'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const close = () => { menuOpen.value = false }
const onScroll = () => { isScrolled.value = window.scrollY > 60 }

// Scroll to a section on the home page; navigate home first if elsewhere.
const goSection = async (id) => {
  close()
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

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: background 0.3s ease, backdrop-filter 0.3s, border-color 0.3s, padding 0.3s;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(8, 11, 22, 0.85);
  backdrop-filter: blur(24px);
  border-color: rgba(255,255,255,0.07);
  padding: 12px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-img {
  display: block;
  width: 136px;
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}
.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient);
  transform: scaleX(0);
  transition: transform 0.2s;
  transform-origin: left;
}
.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { transform: scaleX(1); }

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.nav-cta { padding: 10px 24px; font-size: 0.9rem; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 900px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0;
    top: 68px;
    /* The header's backdrop-filter makes it the containing block for this
       fixed panel, so `bottom: 0` would end at the header's own edge.
       An explicit height makes the panel cover the screen. */
    bottom: auto;
    height: calc(100dvh - 68px);
    background: rgba(8,11,22,0.97);
    backdrop-filter: blur(24px);
    flex-direction: column;
    justify-content: flex-start;
    padding: 48px 32px;
    gap: 28px;
    font-size: 1.25rem;
    transform: translateX(100%);
    /* Closed, the panel is hidden rather than only moved off screen: its links leave the tab order and it
       adds no sideways scroll. Visibility flips after the slide-out, so the closing animation still plays. */
    visibility: hidden;
    transition: transform 0.35s ease, visibility 0s linear 0.35s;
    margin-left: 0;
  }
  .nav-links.open { transform: translateX(0); visibility: visible; transition: transform 0.35s ease; }
}

@media (max-width: 480px) {
  .logo-img { width: 104px; }
  .nav-right { gap: 10px; }
  .nav-cta { padding: 8px 14px; font-size: 0.8rem; }
}
</style>
