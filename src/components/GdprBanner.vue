<template>
  <Transition name="gdpr">
    <div v-if="visible" class="gdpr-banner" role="dialog" aria-label="Cookie consent">
      <div class="gdpr-inner">
        <div class="gdpr-icon">🍪</div>
        <div class="gdpr-text">
          <strong>We value your privacy</strong>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic,
            and serve personalized content. By clicking "Accept All", you consent to our
            use of cookies in accordance with our
            <router-link to="/privacy">Privacy Policy</router-link> and
            <router-link to="/cookies">Cookie Policy</router-link>.
          </p>
        </div>
        <div class="gdpr-actions">
          <button class="gdpr-btn-secondary" @click="decline">Decline</button>
          <button class="gdpr-btn-settings" @click="showSettings = !showSettings">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.93 2.93l1.41 1.41M9.66 9.66l1.41 1.41M2.93 11.07l1.41-1.41M9.66 4.34l1.41-1.41" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Preferences
          </button>
          <button class="gdpr-btn-accept" @click="accept">Accept All</button>
        </div>
      </div>

      <Transition name="settings">
        <div v-if="showSettings" class="gdpr-settings">
          <div class="setting-item" v-for="c in categories" :key="c.id">
            <div class="setting-info">
              <strong>{{ c.name }}</strong>
              <p>{{ c.desc }}</p>
            </div>
            <div class="toggle-wrap">
              <input type="checkbox" :id="c.id" v-model="c.enabled" :disabled="c.required" class="toggle-input" />
              <label :for="c.id" class="toggle" :class="{ required: c.required }">
                <span class="toggle-thumb"></span>
              </label>
              <span class="required-tag" v-if="c.required">Required</span>
            </div>
          </div>
          <button class="gdpr-btn-accept" style="margin-top:8px; align-self:flex-end" @click="savePrefs">Save Preferences</button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const showSettings = ref(false)

const categories = ref([
  { id: 'essential', name: 'Essential Cookies', desc: 'Required for the website to function properly. Cannot be disabled.', enabled: true, required: true },
  { id: 'analytics', name: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our website to improve the experience.', enabled: false, required: false },
  { id: 'marketing', name: 'Marketing Cookies', desc: 'Used to deliver personalized advertisements and track campaign effectiveness.', enabled: false, required: false }
])

onMounted(() => {
  const consent = localStorage.getItem('oxfeeds_consent')
  if (!consent) setTimeout(() => { visible.value = true }, 1200)
})

const accept = () => {
  localStorage.setItem('oxfeeds_consent', JSON.stringify({ all: true, timestamp: Date.now() }))
  visible.value = false
}

const decline = () => {
  localStorage.setItem('oxfeeds_consent', JSON.stringify({ all: false, timestamp: Date.now() }))
  visible.value = false
}

const savePrefs = () => {
  const prefs = categories.value.reduce((acc, c) => ({ ...acc, [c.id]: c.enabled }), {})
  localStorage.setItem('oxfeeds_consent', JSON.stringify({ prefs, timestamp: Date.now() }))
  visible.value = false
}
</script>

<style scoped>
.gdpr-banner {
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  max-width: 980px;
  margin: 0 auto;
  background: rgba(13, 16, 34, 0.97);
  border: 1px solid rgba(124,58,237,0.3);
  border-radius: 20px;
  backdrop-filter: blur(24px);
  z-index: 9999;
  box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1);
  overflow: hidden;
}

.gdpr-inner {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  flex-wrap: wrap;
}

.gdpr-icon { font-size: 1.75rem; flex-shrink: 0; }

.gdpr-text { flex: 1; min-width: 200px; }
.gdpr-text strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
.gdpr-text p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.55; }
.gdpr-text a { color: var(--purple-light); text-decoration: none; }
.gdpr-text a:hover { text-decoration: underline; }

.gdpr-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.gdpr-btn-accept {
  background: var(--gradient);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}
.gdpr-btn-accept:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(124,58,237,0.4); }

.gdpr-btn-secondary {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}
.gdpr-btn-secondary:hover { border-color: rgba(255,255,255,0.2); color: var(--text); }

.gdpr-btn-settings {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}
.gdpr-btn-settings:hover { border-color: var(--purple); color: var(--purple-light); }

.gdpr-settings {
  border-top: 1px solid var(--card-border);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.setting-info strong { font-size: 0.875rem; font-weight: 600; display: block; margin-bottom: 2px; }
.setting-info p { font-size: 0.78rem; color: var(--text-muted); }

.toggle-wrap { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

.toggle-input { display: none; }
.toggle {
  width: 44px;
  height: 24px;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transition: background 0.25s;
  display: block;
}
.toggle-thumb {
  position: absolute;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: white;
  top: 3px; left: 3px;
  transition: transform 0.25s, background 0.25s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}
.toggle-input:checked + .toggle { background: var(--gradient); }
.toggle-input:checked + .toggle .toggle-thumb { transform: translateX(20px); }
.toggle.required { opacity: 0.5; cursor: not-allowed; }

.required-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Transitions */
.gdpr-enter-active { animation: slide-up 0.45s cubic-bezier(0.16, 1, 0.3, 1); }
.gdpr-leave-active { animation: slide-down 0.35s ease-in forwards; }
@keyframes slide-up { from { transform: translateY(120%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slide-down { from { transform: translateY(0); opacity: 1; } to { transform: translateY(120%); opacity: 0; } }

.settings-enter-active, .settings-leave-active { transition: all 0.3s ease; }
.settings-enter-from, .settings-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 680px) {
  .gdpr-inner { flex-direction: column; align-items: flex-start; }
  .gdpr-actions { width: 100%; }
}
</style>
