import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Render / обычный хост: '/'
// GitHub Pages: VITE_BASE=/mini-app/ при сборке
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
