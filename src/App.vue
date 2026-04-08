<template>
  <div id="app">
    <div class="first_screen">
      <div class="header">
        <Head />
      </div>
      <div class="home">
        <img
          src="./assets/code/0001_iSpt.png"
          class="home_img"
          alt="WealthQuant Hero Background"
          data-aos="fade-in"
          data-aos-duration="1200"
        >
        <div class="name">
          <img
            src="./assets/code/0002x.png"
            class="name_bg"
            alt="WealthQuant Background"
            data-aos="fade-in"
            data-aos-delay="200"
          >
          <img
            src="./assets/code/0003.png"
            class="name_text"
            alt="WealthQuant Logo Text"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
        </div>
        <div class="code">
          <span
            data-aos="fade-left"
            data-aos-delay="600"
          >{{ t('hero.slogan') }} !</span>
          <div
            class="content"
            data-aos="fade-left"
            data-aos-delay="800"
          >
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
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
      overflow: hidden;

      .home_img {
        width: 100%;
        transition: transform 0.6s ease;

        &:hover {
          transform: scale(1.02);
        }
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
          transition: transform 0.5s ease;

          &:hover {
            transform: translateY(-5px);
          }
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

      span {
        display: inline-block;
      }

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
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0rem .12rem .24rem 0rem rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
</style>
