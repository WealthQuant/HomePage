import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Head from '../Head.vue'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en: {
      nav: {
        houseQuant: 'HouseQuant',
        stockQuant: 'StockQuant',
        collectibleQuant: 'CollectibleQuant',
        about: 'About'
      },
      accessibility: {
        skipToMain: 'Skip to main content',
        menu: 'Menu',
        closeMenu: 'Close menu',
        languageSelector: 'Language selector'
      }
    }
  }
})

describe('Head.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Head, {
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('toggles menu when icon is clicked', async () => {
    const wrapper = mount(Head, {
      global: {
        plugins: [i18n]
      }
    })

    // Menu should be hidden initially (v-show="false")
    expect(wrapper.vm.showMenu).toBe(false)

    await wrapper.find('.menu-btn').trigger('click')
    expect(wrapper.vm.showMenu).toBe(true)

    await wrapper.find('.menu-btn').trigger('click')
    expect(wrapper.vm.showMenu).toBe(false)
  })

  it('renders menu items correctly', async () => {
    const wrapper = mount(Head, {
      global: {
        plugins: [i18n]
      }
    })

    await wrapper.find('.menu-btn').trigger('click')
    const menuItems = wrapper.findAll('.Menu li')
    expect(menuItems.length).toBe(4)
  })
})
