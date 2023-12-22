import { fileURLToPath, URL } from 'node:url'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: "127.0.0.1"
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[ext]/[name].[hash].[ext]' ,
        entryFileNames: 'js/[name].[hash].js',
      }
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
        additionalData: ['@import "@/assets/less/common.less";'],
      },
    }
  },
  resolve: {
    alias: {
      '@': pathSrc
    }
  }
})
