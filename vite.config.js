import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' faz o site funcionar tanto em domínio próprio quanto em
// subpasta (GitHub Pages: usuario.github.io/landing-duo-con-amore/).
export default defineConfig({
  base: './',
  plugins: [react()],
});
