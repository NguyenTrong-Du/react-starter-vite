import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      constants: '/src/constants',
      hooks: '/src/hooks',
      pages: '/src/pages',
      routes: '/src/routes',
      services: '/src/services',
      stores: '/src/stores',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
      libs: '/src/libs'
    }
  }
})
