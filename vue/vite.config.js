import { fileURLToPath, URL } from 'node:url'

import {defineConfig, preprocessCSS} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~fonts': fileURLToPath(new URL('./public/fonts', import.meta.url)),
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'src/assets/scss/index.scss';"
      }
    }
  }
})
