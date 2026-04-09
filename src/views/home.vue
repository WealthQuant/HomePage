<template>
  <div class="HOME">
    <!-- Section 1: 25.png with text overlay -->
    <div class="img-section img1">
      <img src="../assets/25.png" class="bg-full" alt="">
      <div class="text-group">
        <div class="text-main" data-aos="fade-up">
          {{ t('home.backgrounds.desc1') }}
        </div>
        <div class="text-accent" data-aos="fade-up" data-aos-delay="800">
          {{ t('home.backgrounds.desc2') }}
        </div>
      </div>
    </div>

    <!-- Section 2: 26.png with people.png overlay -->
    <div class="img-section img2">
      <img src="../assets/26.png" class="bg-full" alt="">
      <img src="../assets/image/people.png" class="overlay-people" alt="" data-aos="fade-right">
    </div>

    <!-- Section 3: 27.png with text overlay (right aligned) -->
    <div class="img-section img3">
      <img src="../assets/27.png" class="bg-full" alt="">
      <div class="text text-top-right" data-aos="fade-up">
        {{ t('mission.statement') }}
      </div>
      <div class="text-min text-bottom-right" data-aos="fade-up" data-aos-delay="200">
        {{ t('mission.subtitle') }}
      </div>
    </div>

    <!-- Section 4: target.png with dark background -->
    <div class="img-section img4">
      <div class="bg-dark"></div>
      <img src="../assets/image/target.png" class="overlay-target" alt="" data-aos="zoom-in">
    </div>

    <!-- Section 5: text with gradient -->
    <div class="img-section img5">
      <div class="bg-gradient"></div>
      <div class="text text-top" data-aos="fade-up">
        {{ t('mission.description') }}
      </div>
      <div class="text-min text-bottom" data-aos="fade-up" data-aos-delay="200">
        {{ t('mission.aiDescription') }}
      </div>
    </div>

    <!-- Products Section: Orange background with cards -->
    <div class="products-section">
      <!-- HouseQuant -->
      <div class="product-item" data-aos="fade-up">
        <div class="product-header">
          <div class="product-icon housequant"></div>
          <h3 class="product-title">{{ t('products.houseQuant.name') }}</h3>
        </div>
        <p class="product-desc">{{ t('products.houseQuant.description') }}</p>
        <img src="../assets/code/002.png" class="product-img-right" alt="">
        <img src="../assets/code/001.png" class="product-img-bottom" alt="">
      </div>

      <!-- StockQuant -->
      <div class="product-item" data-aos="fade-up" data-aos-delay="100">
        <div class="product-header">
          <div class="product-icon stockquant"></div>
          <h3 class="product-title">{{ t('products.stockQuant.name') }}</h3>
        </div>
        <p class="product-desc">{{ t('products.stockQuant.description') }}</p>
        <img src="../assets/code/003.png" class="product-img-center" alt="">
        <img src="../assets/code/004.png" class="product-img-bottom" alt="">
      </div>

      <!-- CollectibleQuant -->
      <div class="product-item" data-aos="fade-up" data-aos-delay="200">
        <div class="product-header">
          <div class="product-icon collectiblequant"></div>
          <h3 class="product-title">{{ t('products.collectibleQuant.name') }}</h3>
        </div>
        <p class="product-desc">{{ t('products.collectibleQuant.description') }}</p>
        <img src="../assets/code/005.png" class="product-img-center" alt="">
        <img src="../assets/code/006.png" class="product-img-bottom" alt="">
      </div>
    </div>

    <!-- Why Us Section -->
    <div class="why-section">
      <h2 class="section-title" data-aos="fade-up">{{ t('whyUs.title') }}</h2>

      <div class="feature-item" data-aos="fade-right">
        <div class="feature-icon lock"></div>
        <div class="feature-content">
          <h4>{{ t('whyUs.researchDriven.title') }}</h4>
          <p>{{ t('whyUs.researchDriven.description') }}</p>
        </div>
      </div>

      <div class="feature-item" data-aos="fade-right" data-aos-delay="100">
        <div class="feature-icon pie-chart"></div>
        <div class="feature-content">
          <h4>{{ t('whyUs.aiBigData.title') }}</h4>
          <p>{{ t('whyUs.aiBigData.description') }}</p>
        </div>
      </div>

      <div class="feature-item" data-aos="fade-right" data-aos-delay="200">
        <div class="feature-icon server"></div>
        <div class="feature-content">
          <h4>{{ t('whyUs.engineering.title') }}</h4>
          <p>{{ t('whyUs.engineering.description') }}</p>
        </div>
      </div>

      <h2 class="section-title sub-title" data-aos="fade-up">{{ t('about.title') }}</h2>

      <div class="about-content" data-aos="fade-up">
        <h4>{{ t('about.companyTitle') }}</h4>
        <p>{{ t('about.description') }}</p>
      </div>

      <h2 class="section-title sub-title" data-aos="fade-up">{{ t('about.backgrounds') }}</h2>

      <div class="partners-row" data-aos="fade-up">
        <div class="partner-logo baidu"></div>
        <div class="partner-logo ali"></div>
        <div class="partner-logo ten"></div>
        <div class="partner-logo honeywell"></div>
      </div>
      <div class="partners-row" data-aos="fade-up" data-aos-delay="100">
        <div class="partner-logo zhong"></div>
        <div class="partner-logo kin"></div>
        <div class="partner-logo qing"></div>
        <div class="partner-logo hua"></div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="social-links">
        <a href="#" class="social-icon"><i class="el-icon-s-promotion"></i></a>
        <a href="#" class="social-icon">f</a>
        <a href="#" class="social-icon"><i class="el-icon-s-grid"></i></a>
      </div>
      <div class="footer-text">
        <p>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <div class="beian">
          <a :href="BEIAN.gongan.url" target="_blank">
            <img src="../assets/beian.png" alt="">
            <span>{{ BEIAN.gongan.text }}</span>
          </a>
          <a :href="BEIAN.icp.url" target="_blank">{{ BEIAN.icp.code }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { BEIAN } from '@/constants'

const { t } = useI18n()
</script>

<style scoped lang="less">
.HOME {
  width: 100%;
}

// Image sections
.img-section {
  position: relative;
  width: 100%;

  .bg-full {
    width: 100%;
    height: 5.6rem;
    object-fit: cover;
    display: block;
  }

  .text {
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 600;
    color: #1a1a2e;
    text-align: left;
    letter-spacing: -0.02em;

    &-top {
      top: 0.48rem;
      left: 28%;
      width: 60%;
      font-size: 0.32rem;
      line-height: 1.4;
      animation: fadeInDown 1s ease-out;
    }

    &-bottom {
      bottom: 0.48rem;
      left: 28%;
      width: 60%;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    &-top-right {
      top: 50%;
      right: 28%;
      width: 60%;
      text-align: right;
      font-size: 0.65rem;
      line-height: 1.3;
      transform: translateY(-130%);
      animation: fadeInDown 1s ease-out;
    }

    &-bottom-right {
      bottom: 0.64rem;
      right: 28%;
      width: 60%;
      text-align: right;
      animation: fadeInUp 1s ease-out 0.3s both;
    }
  }

  .text-min {
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 700;
    color: #FF501E;
    font-size: 0.4rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.text-bottom {
      bottom: 2.8rem;
      left: 28%;
      width: 65%;
      text-align: left;
    }

    &.text-bottom-right {
      position: absolute;
      top: 50%;
      bottom: auto;
      right: 28%;
      width: 65%;
      text-align: right;
      font-size: 0.4rem;
      line-height: 1.2;
      transform: translateY(30%);
      opacity: 1;
      transition: none;
    }
  }
}

// Section 1 specific (isolated)
.img1 {
  .text-group {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%);
    width: 65%;
    text-align: left;
  }

  .text-main {
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 700;
    color: #1a1a2e;
    font-size: 0.4rem;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin-bottom: 0.8rem;
    animation: fadeInDown 1s ease-out;
  }

  .text-accent {
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    font-weight: 700;
    color: #FF501E;
    font-size: 0.4rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
    opacity: 0;
    animation: fadeInUp 0.8s ease-out 0.6s forwards;
  }

  // Disable .text-min styles in section 1 since we use .text-group instead
  .text-min {
    display: none;
  }
}

// Section 2 specific
.img2 {
  position: relative;
  min-height: 43.75vw;
  overflow: visible;

  .bg-full {
    width: 100%;
    height: auto;
    min-height: 43.75vw;
    object-fit: cover;
  }

  .overlay-people {
    position: absolute;
    top: -5vw;
    left: 5%;
    width: 50%;
    max-width: 700px;
    height: auto;
    z-index: 2;
    object-fit: contain;
    filter: drop-shadow(0 0.2rem 0.4rem rgba(0, 0, 0, 0.15));
  }
}

// Section 4 specific
.img4 {
  height: 43.75vw;
  background: #000;
  position: relative;

  .bg-dark {
    width: 75.15%;
    height: 100%;
    margin-left: 12.5%;
    background: url(../assets/7.png) no-repeat center;
    background-size: 100%;
  }

  .overlay-target {
    position: absolute;
    top: -13.75vw;
    left: 26.6%;
    width: 62.5%;
    height: 62.5vw;
    z-index: 2;
  }
}

// Section 5 specific
.img5 {
  position: relative;

  .bg-gradient {
    width: 100%;
    height: 5.6rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  }

  // Override text-top for section 5
  .text.text-top {
    top: 0.8rem;
    left: 12.5%;
    width: 75%;
    font-size: 0.48rem;
  }

  // Override text-min for section 5
  .text-min.text-bottom {
    bottom: 0.8rem;
    left: 12.5%;
    width: 75%;
    font-size: 0.4rem;
  }
}

// Products section
.products-section {
  background: #FF501E;
  padding: 0.32rem 0;
  overflow: hidden;
}

.product-item {
  width: 90%;
  max-width: 9.6rem;
  min-height: 9.6rem;
  margin: 1.28rem auto 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.16rem 0.32rem rgba(0, 0, 0, 0.1);
  border-radius: 12vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 1.28rem;
  }
}

.product-header {
  display: flex;
  align-items: center;
  padding: 5%;
}

.product-icon {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 5%;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  flex-shrink: 0;

  &.housequant {
    background: #fff url(../assets/HouseQuant.png) no-repeat center;
    background-size: 50%;
  }

  &.stockquant {
    background: #fff url(../assets/StockQuant.png) no-repeat center;
    background-size: 50%;
  }

  &.collectiblequant {
    background: #fff url(../assets/CollectibleQuant.png) no-repeat center;
    background-size: 50%;
  }
}

.product-title {
  font-size: 0.36rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #fff;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.product-desc {
  width: 83%;
  font-size: 0.16rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-left: 8%;
  text-align: left;
  position: relative;
  z-index: 22;
  transform: translateY(-0.25rem);
}

.product-img-right {
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 0 12vw 0;
}

.product-img-center {
  width: 80%;
  position: absolute;
  left: 10%;
  bottom: -1vw;
  z-index: 2;
}

.product-img-bottom {
  width: 100%;
  position: relative;
  align-self: flex-end;
  margin-top: 1.5rem;
  z-index: 3;
}

// Why Us section
.why-section {
  background: #fff;
  padding-bottom: 5.7vw;
}

.section-title {
  font-size: 0.36rem;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #1a1a2e;
  text-align: left;
  font-weight: 600;
  margin-left: 12.5%;
  margin-top: 12.5vw;
  letter-spacing: -0.02em;

  &.sub-title {
    margin-top: 5vw;
  }
}

.feature-item {
  overflow: hidden;
  margin-top: 3vw;
}

.feature-icon {
  width: 12.5%;
  height: 12.5vw;
  margin-left: 12.5%;
  float: left;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;

  &.lock {
    background-image: url(../assets/image/lock.png);
  }

  &.pie-chart {
    background-image: url(../assets/image/pie_chart.png);
  }

  &.server {
    background-image: url(../assets/image/server.png);
  }
}

.feature-content {
  float: left;
  margin-left: 2.5vw;

  h4 {
    font-size: 0.22rem;
    width: 60%;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    color: #1a1a2e;
    line-height: 1.3;
    margin-top: 0;
    text-align: left;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    margin-top: 1.4vw;
    width: 60%;
    font-size: 0.15rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    color: #5a5a6e;
    line-height: 1.6;
    text-align: left;
  }
}

.about-content {
  margin-left: 12.5%;
  margin-top: 3vw;

  h4 {
    font-size: 0.22rem;
    color: #1a1a2e;
    margin-bottom: 0.16rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    width: 75%;
    font-size: 0.15rem;
    color: #5a5a6e;
    line-height: 1.6;
  }
}

.partners-row {
  width: 100%;
  height: 8.8vw;
  padding: 1.9vw 13.6%;
  overflow: hidden;
  box-sizing: border-box;
}

.partner-logo {
  width: 24.4%;
  height: 100%;
  float: left;
  margin: 0 0.17%;
  background-repeat: no-repeat;
  background-position: center;

  &.baidu {
    background-image: url(../assets/image/baidu.png);
    background-size: 85%;
  }

  &.ali {
    background-image: url(../assets/image/ali.png);
    background-size: 85%;
  }

  &.ten {
    background-image: url(../assets/image/ten.png);
    background-size: 85%;
  }

  &.honeywell {
    background-image: url(../assets/image/honeywell.png);
    background-size: 85%;
  }

  &.zhong {
    background-image: url(../assets/image/zhong.png);
    background-size: 65%;
  }

  &.kin {
    background-image: url(../assets/image/kin.png);
    background-size: 85%;
  }

  &.qing {
    background-image: url(../assets/image/qing.png);
    background-size: 60%;
  }

  &.hua {
    background-image: url(../assets/image/hua.png);
    background-size: 65%;
  }
}

// Footer
.footer {
  width: 100%;
  height: 3rem;
  background: #003ABC;
  position: relative;
}

.social-links {
  position: absolute;
  width: 100%;
  bottom: 50%;
  padding-right: 12.5%;
  box-sizing: border-box;
  text-align: right;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  height: 7vw;
  max-width: 0.56rem;
  max-height: 0.56rem;
  margin-left: 3.75%;
  background: #000;
  border-radius: 50%;
  font-size: 0.32rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
}

.footer-text {
  position: absolute;
  bottom: 0.2rem;
  width: 100%;
  text-align: center;
  font-size: 0.13rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;

  p {
    margin-bottom: 0.08rem;
  }
}

.beian {
  display: flex;
  justify-content: center;
  gap: 0.16rem;

  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 0.12rem;

    img {
      height: 0.14rem;
      margin-right: 0.04rem;
    }
  }
}

// Animations
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes colorPulse {
  0%, 100% {
    color: #FF501E;
  }
  50% {
    color: #0047AB;
  }
}

// Responsive
@media (max-width: 768px) {
  .img-section {
    .text {
      font-size: 0.24rem;
      line-height: 0.32rem;

      &-top, &-top-right {
        font-size: 0.24rem;
        line-height: 0.32rem;
      }
    }

    .text-min {
      font-size: 0.18rem;
      line-height: 0.24rem;
    }
  }

  .overlay-people {
    width: 80%;
    left: 10%;
  }

  .overlay-target {
    width: 80%;
    left: 10%;
  }

  .product-item {
    border-radius: 8vw;
  }

  .feature-icon {
    width: 20%;
    margin-left: 5%;
  }

  .feature-content {
    h4, p {
      width: 70%;
    }
  }

  .partners-row {
    padding: 1.9vw 5%;
  }
}
</style>