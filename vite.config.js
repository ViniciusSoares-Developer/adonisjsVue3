import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'
import { getDirname } from '@poppinss/utils'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    vue({
      script: { defineModel: true },
      template: { compilerOptions: { isCustomElement: (tag) => ['model-viewer'].includes(tag) } },
    }),
    adonisjs({
      entrypoints: ['resources/app.ts'],
      reload: ['resources/views/**/*.edge'],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(getDirname(import.meta.url), 'resources')}/`,
      '~/': `${resolve(getDirname(import.meta.url), '.')}/`,
    },
  },
})
