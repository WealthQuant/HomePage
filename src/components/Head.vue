<template>
  <header class="head" :style="{'background': headC}" role="banner">
    <a href="#main-content" class="skip-link">{{ t('accessibility.skipToMain') }}</a>
    <div class="left">
      <button
        class="icon menu-btn"
        :style="{'color': icon}"
        @click="toggleMenu(showMenu)"
        :aria-label="showMenu ? t('accessibility.closeMenu') : t('accessibility.menu')"
        :aria-expanded="showMenu"
        aria-controls="mobile-menu"
      >
        <i class="el-icon-more"></i>
      </button>
      <div class="logo" role="img" :aria-label="t('nav.companyLogo')"></div>
    </div>
    <div class="right" role="navigation" :aria-label="t('accessibility.languageSelector')">
      <el-switch
        class="switch"
        v-model="value"
        active-text="EN"
        inactive-text="CN"
        @change="switchLanguage"
        :aria-label="t('accessibility.languageSelector')"
      >
      </el-switch>
    </div>
    <nav
      id="mobile-menu"
      class="Menu"
      v-show="showMenu"
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
        >{{ t(item.key) }}</li>
      </ul>
      <div class="Menu_icon">
        <div class="blue icon_box">f</div>
        <div class="red icon_box">
          <i class="el-icon-s-promotion"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { MENU_ITEMS } from '@/constants'

const { t, locale } = useI18n()

const value = ref(true)
const showMenu = ref(false)
const icon = ref('#fff')
const headC = ref('hsl(221, 100%, 37%)')
const MenuList = MENU_ITEMS

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

const switchLanguage = (val: boolean) => {
  locale.value = val ? 'en' : 'zh'
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

  .left {
    position: relative;
    width: 50%;
    height: 100%;
    float: left;

    .menu-btn {
      width: .64rem;
      height: .64rem;
      line-height: .64rem;
      font-size: .18rem;
      position: absolute;
      left: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:focus {
        outline: 2px solid #fff;
        outline-offset: -4px;
      }

      i {
        font-size: .18rem;
      }
    }

    .logo {
      width: 1.6rem;
      height: .4rem;
      background: #FFFFFF url(../assets/step_origin.png) no-repeat center center;
      background-size: 90%;
      box-shadow: 0rem 0rem .16rem 0rem rgba(0, 0, 0, 0.1);
      border-radius: 2.12rem;
      position: absolute;
      left: .64rem;
      top: .12rem;
    }
  }

  .right {
    position: relative;
    width: 50%;
    height: 100%;
    line-height: 100%;
    float: right;
    overflow: hidden;

    .switch {
      position: absolute;
      width: .96rem !important;
      height: .32rem !important;
      right: .16rem;
      top: .16rem;
    }

    :deep(.el-switch__core) {
      width: .96rem !important;
      height: .32rem !important;
      line-height: .32rem;
      border-radius: .16rem;
      background: transparent !important;
      border-color: transparent !important;
    }

    :deep(.el-switch__core:after) {
      width: .32rem !important;
      height: .32rem !important;
      min-width: .32rem;
      top: -.01rem;
    }

    :deep(.el-switch.is-checked .el-switch__core::after) {
      margin-left: -.32rem;
      top: -.01rem;
    }

    :deep(.el-switch__label--right) {
      margin-left: -.27rem;
      z-index: 1;
      color: #ffffff;
      font-weight: 600;
      font-size: .14rem !important;
    }

    :deep(.el-switch__label--left) {
      margin-right: -.27rem;
      z-index: 1;
      color: #ffffff;
      font-weight: 600;
      font-size: .14rem !important;
    }

    :deep(.el-switch__label.is-active) {
      z-index: 11;
      color: #409EFF;
      font-weight: 600;
      font-size: .14rem !important;
    }

    :deep(.el-switch__label *) {
      font-size: .14rem !important;
    }
  }

  .switchs :deep(.el-switch__core) {
    background: #000 !important;
    border-color: #000 !important;
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
