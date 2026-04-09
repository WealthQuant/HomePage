import { ref, onMounted, onUnmounted } from 'vue'

interface ParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical' } = options
  const offset = ref(0)

  let rafId: number | null = null
  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(() => {
        if (direction === 'vertical') {
          offset.value = window.scrollY * speed
        } else {
          offset.value = window.scrollX * speed
        }
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('scroll', handleScroll)
  })

  return { offset }
}
