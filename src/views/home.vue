<template>
  <div class="content">
    <!-- Section 1: Our Backgrounds -->
    <div class="img1" data-aos="fade-up" data-aos-duration="1000">
      <span class="title">{{ t('about.backgrounds') }}</span>
      <div class="img1_content">
        <p class="desc">{{ t('home.backgrounds.desc1') }}</p>
        <p class="desc bold">{{ t('home.backgrounds.desc2') }}</p>
        <p class="desc">{{ t('mission.statement') }}</p>
        <p class="desc">{{ t('mission.subtitle') }}</p>
        <p class="desc">{{ t('mission.description') }}</p>
        <p class="desc small">{{ t('mission.aiDescription') }}</p>
      </div>
    </div>

    <!-- Section 2: Products -->
    <div class="img2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <div class="img2_content">
        <div class="product-card" data-aos="fade-right" data-aos-delay="200" @click="goToProduct('house')">
          <img src="../assets/25.png" class="product-bg" alt="HouseQuant">
          <div class="product-info">
            <h3>{{ t('products.houseQuant.name') }}</h3>
            <p>{{ t('products.houseQuant.description') }}</p>
          </div>
        </div>
        <div class="product-card" data-aos="fade-up" data-aos-delay="300" @click="goToProduct('stock')">
          <img src="../assets/26.png" class="product-bg" alt="StockQuant">
          <div class="product-info">
            <h3>{{ t('products.stockQuant.name') }}</h3>
            <p>{{ t('products.stockQuant.description') }}</p>
          </div>
        </div>
        <div class="product-card" data-aos="fade-left" data-aos-delay="400" @click="goToProduct('collectible')">
          <img src="../assets/27.png" class="product-bg" alt="CollectibleQuant">
          <div class="product-info">
            <h3>{{ t('products.collectibleQuant.name') }}</h3>
            <p>{{ t('products.collectibleQuant.description') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: Why Us -->
    <div class="img3" data-aos="fade-up" data-aos-duration="1000">
      <span class="title">{{ t('whyUs.title') }}</span>
      <div class="img3_content">
        <div class="feature-item" data-aos="fade-up" data-aos-delay="100">
          <img src="../assets/code/001.png" alt="Track Record">
          <h4>{{ t('whyUs.aiBigData.title') }}</h4>
          <p>{{ t('whyUs.aiBigData.description') }}</p>
        </div>
        <div class="feature-item" data-aos="fade-up" data-aos-delay="200">
          <img src="../assets/code/002.png" alt="Research-Driven">
          <h4>{{ t('whyUs.researchDriven.title') }}</h4>
          <p>{{ t('whyUs.researchDriven.description') }}</p>
        </div>
        <div class="feature-item" data-aos="fade-up" data-aos-delay="300">
          <img src="../assets/code/003.png" alt="World-class Engineering">
          <h4>{{ t('whyUs.engineering.title') }}</h4>
          <p>{{ t('whyUs.engineering.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Section 4: Who We Are -->
    <div class="img4" data-aos="fade-up" data-aos-duration="1000">
      <div class="img4_content">
        <div class="text-content" data-aos="fade-right" data-aos-delay="200">
          <span class="title">{{ t('about.title') }}</span>
          <p>{{ t('about.description') }}</p>
        </div>
        <div class="image-content" data-aos="fade-left" data-aos-delay="300">
          <img src="../assets/image/people.png" alt="Who We Are">
        </div>
      </div>
    </div>

    <!-- Section 5: Contact / Target -->
    <div class="img5" data-aos="fade-up" data-aos-duration="1000">
      <div class="img5_content">
        <div class="image-content" data-aos="fade-right" data-aos-delay="200">
          <img src="../assets/image/target.png" alt="Our Target">
        </div>
        <div class="text-content" data-aos="fade-left" data-aos-delay="300">
          <span class="title light">{{ t('hero.slogan') }}</span>
          <p class="subtitle">{{ t('mission.statement') }}</p>
          <div class="cta-button" @click="scrollToTop">
            {{ t('about.cta') }}
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <span>{{ t('footer.legal') }}</span>
          <span>{{ t('footer.privacy') }}</span>
          <span>{{ t('footer.terms') }}</span>
        </div>
        <div class="footer-brand">{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const goToProduct = (type: string) => {
  router.push(`/products/${type}`)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped lang="less">
.content {
  width: 100%;
  background: #F2F2F2;
}

// Common title style
.title {
  font-size: 0.48rem;
  font-weight: 600;
  color: #0047AB;
  display: block;
  margin-bottom: 0.4rem;

  &.light {
    color: #fff;
  }
}

// Section 1: Our Backgrounds
.img1 {
  width: 100%;
  min-height: 6rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.2rem 0.8rem;
  text-align: center;

  .img1_content {
    max-width: 12rem;
    margin: 0 auto;

    .desc {
      font-size: 0.24rem;
      color: #333;
      line-height: 1.8;
      margin-bottom: 0.2rem;

      &.bold {
        font-weight: 600;
        font-size: 0.28rem;
        color: #0047AB;
      }

      &.small {
        font-size: 0.2rem;
        color: #666;
        margin-top: 0.4rem;
      }
    }
  }
}

// Section 2: Products
.img2 {
  width: 100%;
  padding: 1.2rem 0.4rem;
  background: #fff;

  .img2_content {
    max-width: 14rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;

    .product-card {
      position: relative;
      border-radius: 0.16rem;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s ease;
      box-shadow: 0 0.08rem 0.24rem rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 0.16rem 0.48rem rgba(0, 0, 0, 0.2);

        .product-bg {
          transform: scale(1.05);
        }
      }

      .product-bg {
        width: 100%;
        height: 4rem;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .product-info {
        padding: 0.32rem;
        background: #fff;

        h3 {
          font-size: 0.32rem;
          color: #0047AB;
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        p {
          font-size: 0.16rem;
          color: #666;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}

// Section 3: Why Us
.img3 {
  width: 100%;
  padding: 1.2rem 0.4rem;
  background: #f8f9fa;
  text-align: center;

  .img3_content {
    max-width: 14rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;

    .feature-item {
      background: #fff;
      padding: 0.48rem 0.32rem;
      border-radius: 0.16rem;
      transition: all 0.3s ease;
      box-shadow: 0 0.04rem 0.12rem rgba(0, 0, 0, 0.08);

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 0.12rem 0.32rem rgba(0, 0, 0, 0.12);
      }

      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-bottom: 0.24rem;
      }

      h4 {
        font-size: 0.24rem;
        color: #0047AB;
        margin-bottom: 0.16rem;
        font-weight: 600;
      }

      p {
        font-size: 0.16rem;
        color: #666;
        line-height: 1.6;
      }
    }
  }
}

// Section 4: Who We Are
.img4 {
  width: 100%;
  padding: 1.2rem 0.4rem;
  background: #fff;

  .img4_content {
    max-width: 14rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0.8rem;
    align-items: center;

    .text-content {
      .title {
        text-align: left;
        margin-bottom: 0.32rem;
      }

      p {
        font-size: 0.18rem;
        color: #666;
        line-height: 1.8;
      }
    }

    .image-content {
      img {
        width: 100%;
        border-radius: 0.16rem;
        transition: transform 0.4s ease;

        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }
}

// Section 5: Target
.img5 {
  width: 100%;
  padding: 1.2rem 0.4rem;
  background: linear-gradient(135deg, #0047AB 0%, #003A8C 100%);

  .img5_content {
    max-width: 14rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 0.8rem;
    align-items: center;

    .image-content {
      img {
        width: 100%;
        border-radius: 0.16rem;
      }
    }

    .text-content {
      color: #fff;

      .title {
        color: #fff;
        text-align: left;
        margin-bottom: 0.32rem;
      }

      .subtitle {
        font-size: 0.24rem;
        margin-bottom: 0.4rem;
        opacity: 0.9;
      }

      .cta-button {
        display: inline-block;
        padding: 0.16rem 0.48rem;
        background: #FF501E;
        color: #fff;
        font-size: 0.2rem;
        border-radius: 0.32rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #E04718;
          transform: translateY(-2px);
          box-shadow: 0 0.08rem 0.24rem rgba(255, 80, 30, 0.4);
        }
      }
    }
  }
}

// Footer
.footer {
  width: 100%;
  padding: 0.48rem 0.4rem;
  background: #1a1a1a;

  .footer-content {
    max-width: 14rem;
    margin: 0 auto;
    text-align: center;

    .footer-links {
      margin-bottom: 0.24rem;

      span {
        font-size: 0.16rem;
        color: #999;
        margin: 0 0.24rem;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }
    }

    .footer-brand {
      font-size: 0.14rem;
      color: #666;
    }
  }
}

// Responsive Design
@media (max-width: 992px) {
  .img2 .img2_content {
    grid-template-columns: 1fr;
  }

  .img3 .img3_content {
    grid-template-columns: 1fr;
  }

  .img4 .img4_content {
    grid-template-columns: 1fr;
  }

  .img5 .img5_content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 0.36rem;
  }

  .img1 .img1_content .desc {
    font-size: 0.2rem;

    &.bold {
      font-size: 0.24rem;
    }
  }

  .img2 .img2_content .product-card .product-info h3 {
    font-size: 0.28rem;
  }

  .img3 .img3_content .feature-item h4 {
    font-size: 0.22rem;
  }
}
</style>
