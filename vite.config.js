import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the built dist/index.html also works when
  // opened directly (file://) or served from any subpath — not just from
  // the domain root. Real deployments (Netlify, Vercel, S3, etc.) work
  // fine with this too.
  base: './',
})
