<template>
  <main class="nf">
    <div class="nf-bg">
      <div class="nf-orb nf-orb-1"></div>
      <div class="nf-orb nf-orb-2"></div>
    </div>
    <div class="container nf-inner">
      <div class="nf-code gradient-text">404</div>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved. Let's get you back to monetizing your traffic.</p>
      <div class="nf-actions">
        <router-link to="/" class="btn-primary">
          Back to Home
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
        <a href="mailto:office@oxfeeds.com" class="btn-secondary">Contact Support</a>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
.nf {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  text-align: center;
}
.nf-bg { position: absolute; inset: 0; pointer-events: none; }
.nf-orb { position: absolute; border-radius: 50%; filter: blur(100px); }
.nf-orb-1 { width: 500px; height: 500px; background: var(--purple); opacity: 0.2; top: -100px; left: -100px; animation: float1 11s ease-in-out infinite; }
.nf-orb-2 { width: 420px; height: 420px; background: var(--pink); opacity: 0.16; bottom: -100px; right: -100px; animation: float2 13s ease-in-out infinite; }

.nf-inner { position: relative; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.nf-code {
  font-size: clamp(6rem, 18vw, 12rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1;
  background-size: 200% 200%;
  animation: gradient-shift 4s linear infinite;
  background-image: linear-gradient(135deg, #7C3AED, #EC4899, #A78BFA, #7C3AED);
}
.nf-inner h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; }
.nf-inner p { font-size: 1.05rem; color: var(--text-muted); max-width: 460px; line-height: 1.7; }
.nf-actions { display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap; justify-content: center; }
</style>
