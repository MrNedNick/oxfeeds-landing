import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// On GitHub Pages the site is served from /oxfeeds-landing/ (project page),
// but local dev stays at / for a clean preview URL.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/oxfeeds-landing/' : '/',
  plugins: [vue()],
}))
