<template>
  <div class="product-detail">
    <div class="detail-hero">
      <div class="container">
        <h1>{{ t('products.collectibleQuant.name') }}</h1>
        <p class="lead">
          {{ t('products.collectibleQuant.description') }}
        </p>
      </div>
    </div>
    <div class="detail-content">
      <div class="container">
        <div class="feature-grid">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="feature-card"
          >
            <i :class="feature.icon" />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
        <div class="cta-section">
          <button
            class="btn-primary"
            @click="goBack"
          >
            <i class="el-icon-arrow-left" /> {{ t('common.back') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const features = [
  { icon: 'el-icon-collection', title: 'Digital Twin', desc: 'High-fidelity digital replicas of collectibles' },
  { icon: 'el-icon-check', title: 'AI Authentication', desc: 'Machine learning powered authenticity verification' },
  { icon: 'el-icon-link', title: 'Blockchain', desc: 'Immutable provenance and ownership tracking' }
]

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.product-detail {
  min-height: 100vh;
}
.detail-hero {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  color: white;
  padding: 120px 0 60px;
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
h1 {
  font-size: 48px;
  margin-bottom: 20px;
}
.lead {
  font-size: 20px;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}
.detail-content {
  padding: 60px 0;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}
.feature-card {
  text-align: center;
  padding: 40px 30px;
  background: #f8f9fa;
  border-radius: 16px;
  transition: transform 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
}
.feature-card i {
  font-size: 48px;
  color: #8B5CF6;
  margin-bottom: 20px;
}
.feature-card h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}
.feature-card p {
  color: #666;
}
.cta-section {
  text-align: center;
}
.btn-primary {
  background: #8B5CF6;
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: #7C3AED;
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  h1 {
    font-size: 32px;
  }
}
</style>
