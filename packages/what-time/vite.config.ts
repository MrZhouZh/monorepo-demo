import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: [
        'vue',
      ],
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
  ],
})
