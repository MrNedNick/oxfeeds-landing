<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="logo-name">OXFeeds</span>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#" @click.prevent="goSection('services')">Services</a>
        <a href="#" @click.prevent="goSection('how-it-works')">How It Works</a>
        <a href="#" @click.prevent="goSection('why-us')">Why Us</a>
        <a href="#" @click.prevent="goSection('about')">About</a>
        <a href="#" @click.prevent="goSection('contact')">Contact</a>
      </nav>

      <div class="nav-right">
        <a href="#" class="btn-primary nav-cta" @click.prevent="goSection('contact')">Get Started</a>
        <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

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
.logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-name {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
    background: rgba(8,11,22,0.97);
    backdrop-filter: blur(24px);
    flex-direction: column;
    justify-content: flex-start;
    padding: 48px 32px;
    gap: 28px;
    font-size: 1.25rem;
    transform: translateX(100%);
    transition: transform 0.35s ease;
    margin-left: 0;
  }
  .nav-links.open { transform: translateX(0); }
}
</style>
