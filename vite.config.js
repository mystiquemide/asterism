import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        asterism: resolve(__dirname, 'asterism.html'),
        'family-viii': resolve(__dirname, 'family-viii.html'),
        'custom-recall': resolve(__dirname, 'custom-recall.html'),
      },
    },
  },
});
