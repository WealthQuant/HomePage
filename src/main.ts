import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import * as Sentry from '@sentry/vue'
import App from './App.vue'
import router from './router'
import en from './i18n/locales/en.json'
import zh from './i18n/locales/zh.json'

import 'element-plus/dist/index.css'
import 'aos/dist/aos.css'
import './styles/variables.css'
import './styles/utilities.css'

// Browser language detection
const detectBrowserLanguage = (): string => {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('zh')) {
    return 'zh'
  }
  return 'en'
}

// i18n configuration with browser language detection
const i18n = createI18n({
  locale: detectBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  },
  legacy: false,
  globalInjection: true,
})

const app = createApp(App)

// Sentry error monitoring
if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration({
        router,
      }),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: import.meta.env.MODE,
  })
}

app.use(ElementPlus)
app.use(router)
app.use(i18n)

app.mount('#app')
