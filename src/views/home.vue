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
      <img src="../assets/29.png" class="bg-full" alt="">
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

      <div class="features-grid">
        <div class="feature-item" data-aos="fade-up">
          <img src="../assets/image/lock.png" class="feature-icon" alt="Research-Driven" />
          <div class="feature-content">
            <h4>{{ t('whyUs.researchDriven.title') }}</h4>
            <p>{{ t('whyUs.researchDriven.description') }}</p>
          </div>
        </div>

        <div class="feature-item" data-aos="fade-up" data-aos-delay="100">
          <img src="../assets/image/pie_chart.png" class="feature-icon" alt="AI & Big Data" />
          <div class="feature-content">
            <h4>{{ t('whyUs.aiBigData.title') }}</h4>
            <p>{{ t('whyUs.aiBigData.description') }}</p>
          </div>
        </div>

        <div class="feature-item" data-aos="fade-up" data-aos-delay="200">
          <img src="../assets/image/server.png" class="feature-icon" alt="World-class Engineering" />
          <div class="feature-content">
            <h4>{{ t('whyUs.engineering.title') }}</h4>
            <p>{{ t('whyUs.engineering.description') }}</p>
          </div>
        </div>
      </div>

      <h2 class="section-title sub-title" data-aos="fade-up">{{ t('about.title') }}</h2>

      <div class="about-content" data-aos="fade-up">
        <p>{{ t('about.description') }}</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="social-links">
        <a href="#" class="social-icon" aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="#" class="social-icon" aria-label="Meta (Facebook)">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" class="social-icon" aria-label="Telegram">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
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

  .bg-full {
    width: 100%;
    height: 5.6rem;
    object-fit: cover;
    display: block;
  }

  // Override text-top for section 5
  .text.text-top {
    top: 0.8rem;
    left: 25%;
    width: 65%;
    font-size: 0.48rem;
  }

  // Override text-min for section 5
  .text-min.text-bottom {
    bottom: 0.8rem;
    left: 25%;
    width: 65%;
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
  margin-top: 4vw;
  letter-spacing: -0.02em;

  &.sub-title {
    margin-top: 5vw;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  padding: 0 10% 0 12.5%;
  margin-top: 2vw;
  overflow: visible;
}

.feature-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.4rem;
  overflow: visible;
}

.feature-icon {
  max-width: 80px;
  max-height: 80px;
  width: auto;
  height: auto;
  flex-shrink: 0;
  object-fit: contain;
  display: block;
  border-radius: 0 !important;
  clip-path: none !important;
  mask: none !important;
  -webkit-mask: none !important;
  overflow: visible !important;
  border: none !important;
}

.feature-content {
  flex: 1;
  min-width: 0;

  h4 {
    font-size: 0.2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    color: #1a1a2e;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 0.8vw;
    text-align: left;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    margin-top: 0;
    font-size: 0.14rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    color: #5a5a6e;
    line-height: 1.6;
    text-align: left;
  }
}

.about-content {
  margin-left: 12.5%;
  margin-top: 3vw;
  text-align: left;
  max-width: 45rem;
  width: 90%;

  p {
    width: 100%;
    font-size: 0.18rem;
    color: #4a4a5e;
    line-height: 1.75;
    text-align: left;
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
  transition: all 0.3s ease;

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

  .features-grid {
    grid-template-columns: 1fr;
    gap: 4vw;
    padding: 0 5%;
  }

  .feature-item {
    flex-direction: row;
    gap: 1.2vw;
  }

  .feature-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .partners-row {
    padding: 1.9vw 5%;
  }
}
</style>