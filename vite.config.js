import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入项目路径path模块
// https://vitejs.dev/config/
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
  }),
  Components({
      resolvers: [ElementPlusResolver()],
  }),],
  resolve: {// 配置路径别名
    alias: {
    '@': path.resolve(__dirname, './src'),
    
  }
  }
})
