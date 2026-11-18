import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: { spline: ['@splinetool/react-spline', '@splinetool/runtime'] },
      },
    },
  },
})
