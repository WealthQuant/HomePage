<template>
  <header
    class="head"
    :style="{'background': headC}"
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
          <i class="el-icon-s-unfold" />
          <span class="menu-text">{{ t('accessibility.menu') }}</span>
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
        <div class="blue icon_box">
          f
        </div>
        <div class="red icon_box">
          <i class="el-icon-s-promotion" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
    headC.value = '#000'
  } else {
    icon.value = '#fff'
    headC.value = 'hsl(221, 100%, 37%)'
  }
}

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
  background: hsl(221, 100%, 37%);
  position: relative;

  .head-container {
    max-width: 14rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
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
      gap: .06rem;
      padding: .08rem .16rem;
      background: rgba(255, 255, 255, 0.15);
      border: none;
      border-radius: .08rem;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #fff;

      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      i {
        font-size: .16rem;
      }

      .menu-text {
        font-size: .14rem;
        font-weight: 500;
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
    position: absolute;
    float: left;
    top: .64rem;
    width: 100%;
    height: 7.04rem;
    background: #000000;
    z-index: 2;
    font-size: .48rem;
    font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
    color: #FFFFFF;
    line-height: .48rem;
    padding: .4rem .8rem;
    box-sizing: border-box;

    li {
      height: 1.12rem;
      list-style: none;
      text-align: left;
    }

    li:hover {
      color: rgba(255, 80, 30, 1)
    }

    .Menu_icon {
      width: 3.2rem;
      height: 1.28rem;
      position: absolute;
      right: .8rem;
      bottom: .64rem;
      overflow: hidden;

      .icon_box {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 50%;
        line-height: 1.28rem;
        font-weight: 600;
        font-size: .48rem;
      }

      .blue {
        background: #003ABC;
        float: left;
        color: #fff;
      }

      .red {
        background: #FF501E;
        float: right;
      }
    }
  }
}
</style>
