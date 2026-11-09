import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dsfr-plus',
  css: {
    lightningcss: {
      // dsfr.min.css still contains IE-era `@media (min-width: 0\0)` hacks,
      // which LightningCSS rejects without this flag.
      errorRecovery: true,
    },
  },
})
