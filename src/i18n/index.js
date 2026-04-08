import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import langZh from "@/assets/languages/zh.js"
import langEN from "@/assets/languages/en.js"

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': {...langZh,...zhLocale},
    'en': {...langEN,...enLocale}
  }
})

export default i18n