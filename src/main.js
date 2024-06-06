import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store/index' // 引入vuex
import router from '@/router' // 引入路由
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标
import '@/style/reset.css'// 引入重置样式
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {// 遍历图标
  app.component(key, component)// 注册图标
}
app.use(router)
app.use(store)
app.mount('#app')


