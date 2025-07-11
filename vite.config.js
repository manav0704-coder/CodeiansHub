import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: false, // Disable babel plugin temporarily
    }),
  ],
  server: {
    hmr: {
      overlay: false // Disable the error overlay
    }
  }
});
