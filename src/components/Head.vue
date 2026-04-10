<template>
  <header
    class="head"
    :class="{ 'glass-effect': showMenu }"
    role="banner"
  >
    <a
      href="#main-content"
      class="skip-link"
    >{{ t('accessibility.skipToMain') }}</a>
    <div class="head-container">
      <div class="left">
        <div
          class="logo"
          role="img"
          :aria-label="t('nav.companyLogo')"
          @click="goHome"
        />
      </div>
      <div
        class="right"
        role="navigation"
        :aria-label="t('accessibility.languageSelector')"
      >
        <button
          class="menu-btn"
          :style="{'color': icon}"
          :aria-label="showMenu ? t('accessibility.closeMenu') : t('accessibility.menu')"
          :aria-expanded="showMenu"
          aria-controls="mobile-menu"
          @click="toggleMenu(showMenu)"
        >
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          class="lang-switch"
          @click="toggleLanguage"
        >
          <span
            class="lang-option"
            :class="{ active: locale === 'zh' }"
          >CN</span>
          <span class="lang-divider">|</span>
          <span
            class="lang-option"
            :class="{ active: locale === 'en' }"
          >EN</span>
        </div>
      </div>
    </div>
    <nav
      v-show="showMenu"
      id="mobile-menu"
      class="Menu"
      role="navigation"
      :aria-label="t('accessibility.menu')"
    >
      <ul role="menubar">
        <li
          v-for="item in MenuList"
          :key="item.id"
          role="menuitem"
          tabindex="0"
          @keydown.enter="($event.target as HTMLElement).click()"
        >
          {{ t(item.key) }}
        </li>
      </ul>
      <div class="Menu_icon">
        <div class="orange icon_box" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        <div class="orange icon_box" aria-label="Meta (Facebook)">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div class="orange icon_box" aria-label="Telegram">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.416 14.142l-.38 5.324c.545 0 .785-.234 1.084-.527l2.61-2.456 5.419 3.906c.995.537 1.694.254 1.96-.902l3.55-16.258c.324-1.497-.545-2.074-1.557-1.723L2.767 11.37c-1.489.586-1.466 1.398-.254 1.764l4.882 1.488L18.5 6.63c.53-.323 1.018-.15.62.207l-9.704 7.305z"/>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { MENU_ITEMS } from '@/constants'

const { t, locale } = useI18n()
const router = useRouter()

const showMenu = ref(false)
const icon = ref('#fff')
const headC = ref('hsl(221, 100%, 37%)')
const MenuList = MENU_ITEMS

const goHome = () => {
  router.push('/')
}

const toggleMenu = (isShow: boolean) => {
  showMenu.value = !isShow
  if (!isShow) {
    icon.value = 'rgba(255, 255, 255, .5)'
  } else {
    icon.value = '#fff'
  }
}

const handleScroll = () => {
  if (showMenu.value) {
    showMenu.value = false
    icon.value = 'rgba(255, 255, 255, .5)'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<style lang="less" scoped>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #003ABC;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  border-radius: 0 0 4px 0;
  font-size: 14px;

  &:focus {
    top: 0;
  }
}

.head {
  width: 100%;
  height: .64rem;
  background: rgb(0, 59, 188);
  position: relative;
  transition: all 0.3s ease;

  &.glass-effect {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .head-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem 0 .08rem;
    box-sizing: border-box;
  }

  .left {
    display: flex;
    align-items: center;
    height: 100%;

    .logo {
      width: 1.6rem;
      height: .4rem;
      background: #FFFFFF url(../assets/step_origin.png) no-repeat center center;
      background-size: 90%;
      box-shadow: 0rem 0rem .16rem 0rem rgba(0, 0, 0, 0.1);
      border-radius: 2.12rem;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    height: 100%;
    gap: .16rem;

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .08rem;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #fff;

      &:hover {
        opacity: 0.8;
      }

      .hamburger-icon {
        display: flex;
        flex-direction: column;
        gap: .04rem;

        span {
          display: block;
          width: .24rem;
          height: .025rem;
          background: currentColor;
          border-radius: .01rem;
          transition: all 0.3s ease;
        }
      }
    }

    .lang-switch {
      display: flex;
      align-items: center;
      gap: .08rem;
      padding: .06rem .12rem;
      background: rgba(255, 255, 255, 0.15);
      border-radius: .16rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .lang-option {
        font-size: .14rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        padding: .02rem .08rem;
        border-radius: .1rem;
        transition: all 0.3s ease;

        &.active {
          color: #0047AB;
          background: #fff;
          font-weight: 600;
        }
      }

      .lang-divider {
        font-size: .12rem;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  .Menu {
    position: fixed;
    top: .64rem;
    left: 0;
    width: 100%;
    height: calc(100vh - .64rem - 1rem);
    background: rgba(0, 59, 188, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 100;
    font-size: .48rem;
    font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
    color: #FFFFFF;
    line-height: .48rem;
    padding: .4rem .8rem;
    box-sizing: border-box;
    overflow-y: auto;

    li {
      height: 1.12rem;
      list-style: none;
      text-align: left;
    }

    li:hover {
      color: rgba(255, 80, 30, 1)
    }

    .Menu_icon {
      width: auto;
      height: 1.12rem;
      position: absolute;
      right: .8rem;
      bottom: .64rem;
      overflow: visible;
      display: flex;
      gap: 0.28rem;
      align-items: center;

      .icon_box {
        width: 1.12rem;
        height: 1.12rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        cursor: pointer;

        svg {
          display: block;
          width: 50%;
          height: 50%;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      }

      .orange {
        background: #FF501E;
        color: #fff;
      }
    }
  }
}
</style>
