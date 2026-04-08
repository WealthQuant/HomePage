<template>
  <div id="app">
    <div class="first_screen">
      <div class="header">
        <Head />
      </div>
      <div class="home">
        <img src="./assets/code/0001_iSpt.png" class="home_img" alt="WealthQuant Hero Background">
        <div class="name">
          <img src="./assets/code/0002x.png" class="name_bg" alt="WealthQuant Background">
          <img src="./assets/code/0003.png" class="name_text" data-aos="fade-up" data-aos-duration="1000" alt="WealthQuant Logo Text">
        </div>
        <div class="code">
          <span>{{ t('hero.slogan') }} !</span>
          <div class="content">
            {{ contactPhone }}
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import Head from '@/components/Head.vue'
import { CONTACT } from '@/constants'

const { t } = useI18n()
const contactPhone = CONTACT.phone

onMounted(() => {
  nextTick(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  })
})
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;

  .first_screen {
    width: 100%;
    background: #F2F2F2;
    .header {
      z-index: 2;
    }
    .home {
      width: 100%;
      height: 51vw;
      background: hsl(221, 100%, 37%);
      z-index: 1;
      position: relative;
      .home_img {
        width: 100%;
      }
      .name {
        width: 100%;
        font-size: 12vw;
        color: #ffff;
        font-weight: 600;
        font-family: '-apple-system', "Microsoft YaHei", sans-serif;
        position: absolute;
        text-align: left;
        bottom: 1rem;
        background: linear-gradient(transparent, 75%, rgba(255, 255, 255, .4));
        .name_bg {
          position: absolute;
          width: 100%;
          bottom: 0;
        }
        .name_text {
          width: 80%;
          position: absolute;
          bottom: 0;
          margin-left: .2rem;
        }
      }
    }
    .code {
      width: 100%;
      height: 1rem;
      padding-left: .32rem;
      box-sizing: border-box;
      font-size: .24rem;
      font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
      color: #FFFFFF;
      line-height: 1rem;
      text-align: left;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      background: #FF501E;
      .content {
        float: right;
        width: 1.92rem;
        height: .64rem;
        margin: .2rem;
        background: #000000;
        box-shadow: 0rem .08rem .16rem 0rem rgba(0, 0, 0, 0.4);
        border-radius: .32rem;
        font-size: .14rem;
        font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
        text-align: center;
        color: #FFFFFF;
        line-height: .64rem;
        box-sizing: border-box;
      }
    }
  }

  .box {
    width: 100%;
    height: 100%;
    background: url(./assets/25.png) no-repeat center center;
    background-size: 100% 100%;
  }
}
</style>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #ededed;
}
</style>
