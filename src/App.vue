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
            src="./assets/code/0003.png"
            class="name_text"
            alt="WealthQuant Logo Text"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
        </div>
        <div class="code">
          <TypewriterText
            :text="t('hero.slogan') + ' !'"
            :speed="80"
            :delay="600"
          />
          <div
            class="content"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            {{ t('hero.contact') }}
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
import TypewriterText from '@/components/TypewriterText.vue'

const { t } = useI18n()

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
    height: 100vh;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    
    .header {
      z-index: 2;
      flex-shrink: 0;
    }
    
    .home {
      width: 100%;
      height: 100%;
      flex: 1;
      background: linear-gradient(to bottom, hsl(221, 100%, 37%) 0%, hsl(221, 100%, 60%) 60%, #f5f7fa 100%);
      z-index: 1;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      .home_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: saturate(1.3) contrast(1.1);
        transition: transform 0.6s ease;

        &:hover {
          transform: scale(1.02);
        }
      }

      .name {
        width: 100%;
        color: #ffff;
        font-weight: 600;
        font-family: '-apple-system', "Microsoft YaHei", sans-serif;
        position: absolute;
        text-align: left;
        bottom: 2rem;
        left: 0;

        .name_text {
          width: 60%;
          max-width: 8rem;
          position: relative;
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
      padding: 0 .32rem;
      box-sizing: border-box;
      font-size: .22rem;
      font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
      color: #FFFFFF;
      line-height: 1rem;
      text-align: left;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      background: #FF501E;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        display: inline-block;
        flex: 1;
        font-size: .28rem;
      }

      .content {
        flex-shrink: 0;
        width: auto;
        min-width: 1.6rem;
        height: .4rem;
        padding: 0 .12rem;
        margin: 0;
        background: #000000;
        box-shadow: 0rem .08rem .16rem 0rem rgba(0, 0, 0, 0.4);
        border-radius: .2rem;
        font-size: .11rem;
        font-family: ArialRoundedMTBold, "Microsoft YaHei", sans-serif;
        text-align: center;
        color: #FFFFFF;
        line-height: .4rem;
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
