import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match an origin in the API's CORS_ORIGINS
  server: { port: 5179 },
})
