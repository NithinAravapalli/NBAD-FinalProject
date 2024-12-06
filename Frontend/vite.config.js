import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 80  // Replace with your desired port number
  },
  plugins: [react()],
})
