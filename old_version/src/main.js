import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/i18n/index'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
