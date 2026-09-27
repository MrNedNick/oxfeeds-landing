import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// On GitHub Pages the site is served from /oxfeeds-landing/ (project page),
// but local dev stays at / for a clean URL. `vite preview` serves the built
// files, so it needs the same base as the build or every asset 404s.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/oxfeeds-landing/' : '/',
  plugins: [vue()],
}))
