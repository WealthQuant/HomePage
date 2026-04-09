<template>
  <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
    <div class="arrows">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p class="scroll-text">{{ t('scroll') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    zh: { scroll: '向下滚动' },
    en: { scroll: 'Scroll Down' }
  }
})
</script>

<style scoped lang="less">
.scroll-indicator {
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.mouse {
  width: 0.3rem;
  height: 0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 0.25rem;
  position: relative;
  animation: bounce 2s infinite;
}

.wheel {
  width: 0.06rem;
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.03rem;
  position: absolute;
  top: 0.08rem;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s ease-in-out infinite;
}

.arrows {
  margin-top: 0.08rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.04rem;

  span {
    width: 0.1rem;
    height: 0.1rem;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
    animation: arrowPulse 1.5s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
}

.scroll-text {
  margin-top: 0.08rem;
  font-size: 0.12rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  animation: fadeInOut 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-0.08rem); }
}

@keyframes scrollWheel {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(0.2rem); }
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.3; transform: rotate(45deg) translateY(0); }
  50% { opacity: 1; transform: rotate(45deg) translateY(0.04rem); }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
</style>
