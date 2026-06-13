<template>
  <main class="legal">
    <div class="legal-hero">
      <div class="legal-orb legal-orb-1"></div>
      <div class="legal-orb legal-orb-2"></div>
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span class="current">{{ title }}</span>
        </nav>
        <div class="section-tag">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          {{ kicker }}
        </div>
        <h1 class="legal-title gradient-text">{{ title }}</h1>
        <p class="legal-sub">{{ subtitle }}</p>
        <div class="legal-updated">Last updated: {{ updated }}</div>
      </div>
    </div>

    <div class="container legal-body-wrap">
      <article class="legal-content glass-card">
        <slot />
      </article>

      <aside class="legal-aside">
        <div class="aside-card glass-card">
          <h4>Questions?</h4>
          <p>If you have any questions about this policy, our team is happy to help.</p>
          <a href="mailto:office@oxfeeds.com" class="btn-primary aside-btn">Contact Us</a>
        </div>
        <div class="aside-card glass-card aside-links">
          <h4>Legal Documents</h4>
          <ul>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
            <li><router-link to="/cookies">Cookie Policy</router-link></li>
            <li><router-link to="/gdpr">GDPR Compliance</router-link></li>
          </ul>
        </div>
      </aside>
    </div>
  </main>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  kicker: { type: String, default: 'Legal' },
  subtitle: { type: String, default: '' },
  updated: { type: String, default: 'June 13, 2026' }
})
</script>

<style scoped>
.legal { padding-top: 88px; }

.legal-hero {
  position: relative;
  overflow: hidden;
  padding: 72px 0 56px;
  border-bottom: 1px solid var(--card-border);
}
.legal-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.legal-orb-1 { width: 420px; height: 420px; background: var(--purple); opacity: 0.18; top: -160px; left: -100px; }
.legal-orb-2 { width: 360px; height: 360px; background: var(--pink); opacity: 0.14; top: -120px; right: -80px; }

.breadcrumb {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-faint);
  margin-bottom: 24px;
}
.breadcrumb a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
.breadcrumb a:hover { color: var(--purple-light); }
.breadcrumb .current { color: var(--text-muted); }

.legal-hero .section-tag { position: relative; }

.legal-title {
  position: relative;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 14px;
}
.legal-sub {
  position: relative;
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 640px;
  line-height: 1.7;
}
.legal-updated {
  position: relative;
  margin-top: 20px;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--purple-light);
  background: var(--gradient-subtle);
  border: 1px solid rgba(124,58,237,0.2);
  border-radius: 50px;
  padding: 6px 16px;
}

.legal-body-wrap {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  padding-top: 64px;
  padding-bottom: 96px;
  align-items: start;
}

.legal-content {
  padding: 48px;
}

.legal-aside {
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.aside-card { padding: 28px; }
.aside-card h4 { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
.aside-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 18px; }
.aside-btn { width: 100%; justify-content: center; padding: 12px; }
.aside-links ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.aside-links a {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s, padding-left 0.2s;
  display: block;
}
.aside-links a:hover { color: var(--purple-light); padding-left: 4px; }
.aside-links a.router-link-active { color: var(--purple-light); font-weight: 600; }

@media (max-width: 900px) {
  .legal-body-wrap { grid-template-columns: 1fr; }
  .legal-aside { position: static; flex-direction: row; flex-wrap: wrap; }
  .aside-card { flex: 1; min-width: 240px; }
  .legal-content { padding: 32px 24px; }
}
</style>
