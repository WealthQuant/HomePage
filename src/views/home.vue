<template>
  <main id="main-content" class="HOME" role="main">
    <div class="img1 img">
      <img src="../assets/25.png" class="bg1" alt="Background decoration" align="middle" srcset="">
      <div class="text text_top">
        {{ t('hero.slogan') }}
      </div>
      <div class="text_min text_bottom">
        {{ t('mission.statement') }}
      </div>
    </div>
    <div class="img2 img">
      <img src="../assets/image/people.png" class="people" alt="Team collaboration illustration" align="middle" srcset="">
      <img src="../assets/26.png" class="people_2" alt="Background pattern" align="middle" srcset="">
    </div>
    <div class="img3 img">
      <img src="../assets/27.png" class="bg2" alt="Mission section background" align="middle" srcset="">
      <div class="text text_top">
        {{ t('mission.statement') }}
      </div>
      <div class="text_min text_bottom">
        {{ t('mission.subtitle') }}
      </div>
    </div>
    <div class="img4 img">
      <img src="../assets/image/target.png" class="target" alt="Target goal illustration" align="middle" srcset="">
      <div class="bg2 img_7"></div>
    </div>
    <div class="img5 img">
      <div class="bg2 img_8"></div>
      <div class="text text_top">
        {{ t('mission.description') }}
      </div>
      <div class="text_min text_bottom">
        {{ t('mission.aiDescription') }}
      </div>
    </div>
    <section class="info" aria-labelledby="products-title">
      <div class="item" v-for="(product, index) in products" :key="index">
        <div>
          <div :class="['img_box', product.className]" />
          <div class="title">{{ product.title }}</div>
          <div class="content" v-html="product.content"></div>
        </div>
        <template v-if="product.images">
          <img v-for="(img, imgIndex) in product.images" :key="imgIndex"
               :src="img.src" :class="img.class" :alt="img.alt"
               :data-wow-offset="img.offset" :data-wow-delay="img.delay"
               :data-wow-duration="img.duration">
        </template>
        <div class="bg_img" v-if="product.bgImages">
          <img v-for="(bgImg, bgIndex) in product.bgImages" :key="`bg-${bgIndex}`"
               :src="bgImg.src" :class="bgImg.class" :alt="bgImg.alt"
               :data-wow-offset="bgImg.offset" :data-wow-delay="bgImg.delay"
               :data-wow-duration="bgImg.duration">
        </div>
      </div>
    </section>
    <section class="AQ" aria-labelledby="whyus-title">
      <div class="AQ_title">{{ t('whyUs.title') }}</div>
      <div class="AQ_item" v-for="(feature, index) in features" :key="index">
        <div :class="['img', feature.icon]"></div>
        <div class="AQ_content">
          <div class="title">{{ t(feature.titleKey) }}</div>
          <div class="content">{{ t(feature.contentKey) }}</div>
        </div>
      </div>
      <div class="AQ_title">{{ t('about.title') }}</div>
      <div class="AQ_item">
        <div class="AQ_content whoQ">
          <div class="title">{{ t('about.companyTitle') }}</div>
          <div class="content">{{ t('about.description') }}</div>
        </div>
      </div>
      <div class="title Q_title">{{ t('about.backgrounds') }}</div>
      <div class="Q_img" v-for="(row, rowIndex) in partnerRows" :key="rowIndex">
        <div v-for="partner in row" :key="partner" :class="['item', partner]"></div>
      </div>
    </section>
    <footer class="bottom" role="contentinfo">
      <div class="item_box" role="list" :aria-label="t('accessibility.socialLinks')">
        <div class='bottom_item' role="listitem" tabindex="0" aria-label="Telegram"><i class="el-icon-s-promotion"></i></div>
        <div class='bottom_item' role="listitem" tabindex="0" aria-label="Facebook">f</div>
        <div class='bottom_item' role="listitem" tabindex="0" aria-label="Grid"><i class="el-icon-s-grid"></i></div>
      </div>
      <div class="bottom_text">
        <div style="margin:0 auto; padding:0 0;">
          <p align="center" style="line-height:0.20rem; color:#fff;">{{ t('footer.copyright', { year: currentYear }) }}</p>
        </div>
        <div style="margin:0 auto; padding:0 0;">
          <a target="_blank" rel="noopener noreferrer" :href="BEIAN.gongan.url" style="display:inline-block;text-decoration:none;height:0.20rem;line-height:0.20rem;">
            <img src="../assets/beian.png" style="float:left;height:100%"/>
            <p style="float:left;height:0.20rem;line-height:0.20rem;margin: 0px 0px 0px 0.05rem; color:#fff;">{{ BEIAN.gongan.text }}</p>
          </a>
          <a :href="BEIAN.icp.url" target="_blank" rel="noopener noreferrer" style="display:inline-block;text-decoration:none;height:0.20rem;line-height:0.20rem;">
            <p style="float:left;height:0.20rem;line-height:0.20rem;margin: 0px 0px 0px 0.05rem; color:#fff;">{{ BEIAN.icp.code }}</p>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import { BEIAN } from '@/constants'

interface ProductImage {
  src: string
  class: string
  alt: string
  offset?: string
  delay?: string
  duration?: string
  'data-aos'?: string
  'data-aos-delay'?: string
}

interface Product {
  title: string
  className: string
  content: string
  images?: ProductImage[]
  bgImages?: ProductImage[]
}

const { t } = useI18n()
const currentYear = ref(new Date().getFullYear())

const products = computed<Product[]>(() => [
  {
    title: t('products.houseQuant.name'),
    className: 'HouseQuant',
    content: t('products.houseQuant.description') + '<br /><br />' + t('products.houseQuant.details'),
    images: [{ src: '../assets/code/002.png', class: 'right_img', alt: 'HouseQuant mobile app', 'data-aos': 'fade-up' }],
    bgImages: [{ src: '../assets/code/001.png', class: 'left_img', alt: 'HouseQuant dashboard', 'data-aos': 'fade-right', 'data-aos-delay': '200' }]
  },
  {
    title: t('products.stockQuant.name'),
    className: 'StockQuant',
    content: t('products.stockQuant.description') + '<br /><br />• ' + t('products.stockQuant.features[0]') + '<br />• ' + t('products.stockQuant.features[1]') + '<br />• ' + t('products.stockQuant.features[2]'),
    images: [{ src: '../assets/code/003.png', class: 'StockQuant_left', alt: 'StockQuant trading interface', 'data-aos': 'fade-up' }],
    bgImages: [{ src: '../assets/code/004.png', class: 'StockQuant_right', alt: 'StockQuant analytics', 'data-aos': 'fade-left', 'data-aos-delay': '200' }]
  },
  {
    title: t('products.collectibleQuant.name'),
    className: 'CollectibleQuant',
    content: t('products.collectibleQuant.description'),
    images: [{ src: '../assets/code/005.png', class: 'CollectibleQuant_left', alt: 'CollectibleQuant platform', 'data-aos': 'fade-up' }],
    bgImages: [{ src: '../assets/code/006.png', class: 'CollectibleQuant_right', alt: 'CollectibleQuant app preview' }]
  }
])

const features = [
  { icon: 'lock', titleKey: 'whyUs.researchDriven.title', contentKey: 'whyUs.researchDriven.description' },
  { icon: 'pie_chart', titleKey: 'whyUs.aiBigData.title', contentKey: 'whyUs.aiBigData.description' },
  { icon: 'server', titleKey: 'whyUs.engineering.title', contentKey: 'whyUs.engineering.description' }
]

const partnerRows = [
  ['baidu', 'ali', 'ten', 'honeywell'],
  ['zhong', 'kin', 'qing', 'hua']
]

onMounted(() => {
  nextTick(() => {
    AOS.refresh()
  })
})
</script>
<style lang="less" scoped>
  .HOME {
    .img {
      position: relative;
    }
    .text_top {
      font-size: .40rem;
      line-height: .50rem;
      font-family: ArialRoundedMTBold, "微软雅黑";
      color: #333333;
      font-weight: 600;
    }
    .text_bottom {
      font-family: ArialRoundedMTBold, "微软雅黑";
      color: #333333;
      font-weight: 600;
      line-height: .32rem;
      font-size: .28rem;
    }
    .img1 {
      .text {
        position: absolute;
        top: .88rem;
        left: 25%;
        text-align: left;
        width: 63%;
        height: 2.56rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: .88rem;
        left: 25%;
        text-align: left;
        
      }
    }
    .img2 {
      position: relative;
      width: 100%;
      height: 43.75vw;
      // .img_6 {
      //   width: 100%;
      //   height: 100%;
      //   background: #FFFFFF url(../assets/6.png) no-repeat center center;
      //   background-size: 75%;
      // }
      .people_2 {
        width: 100%;
        height: 43.75vw;
      }
      .people {
        position: absolute;
        top: -7.8vw;
        left: 10%;
        width: 58.3%;
        height: 60.1vw;
        z-index: 22;
      }
    }
    .img3 {
      .text {
        position: absolute;
        top: 1.52rem;
        right: 25%;
        text-align: right;
        width: 63%;
        height: 1.28rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: 1.52rem;
        right: 25%;
        text-align: right;
        
      }
    }
    .img4 {
      position: relative;
      height: 43.75vw;
      background: #000000;
       .img_7 {
        width: 75.15%;
        height: 43.75vw;
        margin-left: 12.5%;
        background: #000000 url(../assets/7.png) no-repeat;
        background-size: 100%;
      }
      .target {
        position: absolute;
        top: -13.75vw;
        left: 26.6%;
        width: 62.5%;
        height: 62.5vw;
        z-index: 22;
      }
    }
    .img5 {
      .img_8 {
        width: 10%;
        margin-left: 12.5%;
        background: #FFFFFF url(../assets/8.png) ;
        background-size: 100%;
      }
      .text {
        position: absolute;
        top: 1.2rem;
        left: 25%;
        text-align: left;
        width: 63%;
        height: 2.56rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: 1.2rem;
        left: 25%;
        text-align: left;
        
      }
    }
    .bg1 {
      // padding-top: 5.36%;
      background: #F2F2F2;
      height: 5.6rem;
      width: 100%;
    }
    .bg2 {
      vertical-align: bottom;
      font-size:0;
      line-height: 0;
      width: 100%;
      height: 5.6rem;
    }
    .info {
      background: #FF501E;
      overflow: hidden;
      padding: .32rem 0;
      .item {
        width: 90%;
        max-width: 9.6rem;
        min-height: 9.6rem;
        margin: 1.28rem auto 0 auto;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0rem .16rem .32rem 0rem rgba(0, 0, 0, 0.1);
        border-radius: 12vw;
        overflow: hidden;
        position: relative;
        // display: grid;
        // grid-template-rows: 1fr auto;
        display: flex;
        flex-flow: row wrap;
        .img_box {
          // width: 17%;
          width: 1.6rem;
          height: 1.6rem;
          // height: 17%;
          // line-height: 50%;
          margin: 5%;
          padding: 1%;
         
          box-shadow: 0px 0px .16rem 0px rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          box-sizing: border-box;
        }
        .bg_img {
          // height: 3.2rem;
          width: 100%;
          // border-radius: 0 0 13vw 13vw;
          align-items: flex-end;
          display: flex;
          // flex-flow: row wrap;
          // position: absolute;
          // bottom: 0;
        }
        .right_img {
          // height: 55vw;
          width: 60%;
          // background: url(../assets/code/002.png) no-repeat center bottom;
          // background-size: 100%;
          position: absolute;
          vertical-align:bottom;
          right: 0;
          bottom: 0;
          border-radius: 0 0 12vw 0;
          // z-index: 1;
        }
        .left_box {
          height: 30vw;
        }
        .left_img {
          overflow: hidden;
          // height: 3.2rem;
          width: 100%;
          // background: url(../assets/code/001.png) no-repeat left bottom ;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;

          bottom: 0;
          z-index: 2;
          margin-top: .2rem;
        }
        .StockQuant_left {
          // height: 55vw;
          width: 80%;
          // background: url(../assets/code/003.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 80%;
          position: absolute;
          left: 10%;
          // transform: translate(-50%, 0%);
          bottom: -1vw;
          // left: 5%;
          z-index: 2;

        }
        .StockQuant_right {
          // min-height: 2.6rem;
          // height: 2.6rem;
          width: 100%;
          // background: url(../assets/code/004.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;
          bottom: 0vw;
          z-index: 3;
          margin-top: .2rem;
        }
        .CollectibleQuant_left {
          // height: 55vw;
          width: 60%;
          // background: url(../assets/code/005.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 60%;
          position: absolute;
          // margin: 0 auto;
          left: 20%;
          // transform: translate(-50%, 0%); 
          bottom: -1vw;
          // left: 5%;
          z-index: 2;
        }
        .CollectibleQuant_right {
          // height: 4rem;
          width: 100%;
          // background: url(../assets/code/006.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;
          z-index: 3;
          margin-top: .5rem;
        }
        .HouseQuant {
          background: #FFFFFF url(../assets/HouseQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .StockQuant {
          background: #FFFFFF url(../assets/StockQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .CollectibleQuant {
          background: #FFFFFF url(../assets/CollectibleQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .title {
          font-size: .40rem;
          font-family: ArialRoundedMTBold, "微软雅黑";
          color: #FFFFFF;
          line-height: .50rem;
          font-weight: 600;
          text-align: left;
          padding-left: 8%;
        }
        .content {
          width: 83%;
          font-size: 17px;
          font-family: ArialRoundedMTBold, "微软雅黑";
          color: rgba(255, 255, 255, 0.8);
          line-height: .28rem;
          color: #FFFFFF;
          margin-left: 8%;
          text-align: left;
          position: relative;
          z-index: 22;
        }
      }
    }
    .AQ {
      background: #FFFFFF;
      width: 100%;
      padding-bottom: 5.7vw;
      box-sizing: border-box;
      .title {
        font-size: .24rem;
        width: 60%;
        font-family: ArialRoundedMTBold, "微软雅黑";
        color: #333333;
        line-height: .28rem;
        margin-top: 5vw;
        margin-left: 2.5vw;
        text-align: left;
        float: left;
      }
      .Q_title {
        margin-left: 15%;
        float: none;
      }
      .AQ_title {
        margin-left: 12.5%;
        margin-top: 12.5vw;
        font-size: .40rem;
        line-height: .50rem;
        font-family: ArialRoundedMTBold, "微软雅黑";
        color: #333333;
        text-align: left;
        font-weight: 600;
      }
      .AQ_item {
        overflow: hidden;
        .img {
          width: 12.5%;
          height: 12.5vw;
          margin-left: 12.5%;
          margin-top: 3vw;
          float: left;
         
        }
        .lock {
          background: #FFFFFF url(../assets/image/lock.png) no-repeat center center;
         
          background-size: 50%;
        }
        .pie_chart {
          background: #FFFFFF url(../assets/image/pie_chart.png) no-repeat center center;
          background-size: 50%;
        }
        .server {
          background: #FFFFFF url(../assets/image/server.png) no-repeat center center;
          background-size: 50%;
        }
        .AQ_content {
          // float: left;
          
          .content {
            margin-top: 1.4vw;
            margin-left: 2.5vw;
            width: 60%;
            font-size: .14rem;
            font-family: ArialRoundedMTBold, "微软雅黑";
            text-align: left;
            color: #666666;
            line-height: .18rem;
            float: left;
          }
        }
        .whoQ {
          margin-left: 12.5%;
          .content {
            width: 75%!important;
          }
        }
      }
      .Q_img {
        width: 100%;
        height: 8.8vw;
        padding: 1.9vw 13.6%;
        overflow: hidden;
        box-sizing: border-box;
        .item {
          width: 24.4%;
          height: 100%;
          
          float: left;
          margin: 0 0.17%;
        }
        .baidu {
          background: url(../assets/image/baidu.png) no-repeat center center;
          background-size: 85%;
        }
        .ali {
          background: url(../assets/image/ali.png) no-repeat center center;
          background-size: 85%;
        }
        .ten {
          background: url(../assets/image/ten.png) no-repeat center center;
          background-size: 85%;
        }
        .honeywell {
          background: url(../assets/image/honeywell.png) no-repeat center center;
          background-size: 85%;
        }
        .zhong {
          background: url(../assets/image/zhong.png) no-repeat center center;
          background-size: 65%;
        }
        .kin {
          background: url(../assets/image/kin.png) no-repeat center center;
          background-size: 85%;
        }
        .qing {
          background: url(../assets/image/qing.png) no-repeat center center;
          background-size: 60%;
        }
        .hua {
          background: url(../assets/image/hua.png) no-repeat center center;
          background-size: 65%;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 3rem;
      background: #003ABCFF;
      position: relative;
      .item_box {
        position: absolute;
        width: 100%;
        bottom: 50%;
        overflow: hidden;
        padding-right: 12.5%;
        box-sizing: border-box;
        .bottom_item {
          width: 8%;
          height: 7vw;
          line-height: 7vw;
          margin-left: 3.75%;
          background: #000000FF;
          border-radius: 50%;
          float: right;
          font-size: .48rem;
          font-weight: 600;
          color: #fff;
        }
      }
      .bottom_text {
        width: 100%;
        background: #003ABCFF;
        padding-right: 0%;
        box-sizing: border-box;
        position: absolute;
        bottom: 2.3vw;
        text-align: center;
        font-size: 0.75vw;
        font-family: ArialMT, "微软雅黑";
        color: #fff;
        line-height: 1.1vw;
        span {
          margin-left: 2.5%;
        }
      }
    }
  }
</style>