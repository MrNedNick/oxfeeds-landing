<template>
  <div class="marquee-band">
    <div class="marquee-fade marquee-fade-l"></div>
    <div class="marquee-track">
      <div class="marquee-row" v-for="row in 2" :key="row" aria-hidden="row === 2 ? 'true' : null">
        <span class="marquee-item" v-for="item in items" :key="row + item">
          <span class="m-dot"></span>{{ item }}
        </span>
      </div>
    </div>
    <div class="marquee-fade marquee-fade-r"></div>
  </div>
</template>

<script setup>
const items = [
  'Google RSOC', 'Yahoo N2S', 'Bing Type-in', 'Google Type-in',
  'Yahoo Type-in', 'Bing N2S', 'High-RPM Feeds', 'Large Traffic Caps',
  'Native to Search', 'Search to Search'
]
</script>

<style scoped>
.marquee-band {
  position: relative;
  overflow: hidden;
  padding: 28px 0;
  border-top: 1px solid var(--card-border);
  border-bottom: 1px solid var(--card-border);
  background: rgba(255, 255, 255, 0.015);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 32s linear infinite;
}
.marquee-band:hover .marquee-track { animation-play-state: paused; }

.marquee-row {
  display: flex;
  align-items: center;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 36px;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-muted);
  white-space: nowrap;
  transition: color 0.3s;
}
.marquee-item:hover { color: var(--text); }

.m-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gradient);
  flex-shrink: 0;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-fade { display: none; }

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
