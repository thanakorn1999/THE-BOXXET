import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // define:{
  //   'global.crypto': 'globalThis.crypto || require("node:crypto").webcrypto'
  // },
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], 
  },
});
