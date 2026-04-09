import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface TiltOptions {
  max?: number
  perspective?: number
  scale?: number
  speed?: number
  glare?: boolean
}

export function useTilt(elementRef: Ref<HTMLElement | null>, options: TiltOptions = {}) {
  const {
    max = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glare = true
  } = options

  const tiltStyle = ref({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: `transform ${speed}ms ease-out`
  })

  const glareStyle = ref({
    opacity: 0,
    background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
    transform: 'translateX(-100%)'
  })

  let rafId: number | null = null

  const handleMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return

    if (rafId) cancelAnimationFrame(rafId)

    rafId = requestAnimationFrame(() => {
      const rect = elementRef.value!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -max
      const rotateY = ((x - centerX) / centerX) * max

      tiltStyle.value = {
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms ease-out`
      }

      if (glare) {
        const glareX = (x / rect.width) * 100
        const glareY = (y / rect.height) * 100
        glareStyle.value = {
          opacity: 1,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          transform: 'none'
        }
      }
    })
  }

  const handleMouseLeave = () => {
    if (rafId) cancelAnimationFrame(rafId)

    tiltStyle.value = {
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms ease-out`
    }

    glareStyle.value = {
      opacity: 0,
      background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
      transform: 'translateX(-100%)'
    }
  }

  onMounted(() => {
    if (elementRef.value) {
      elementRef.value.addEventListener('mousemove', handleMouseMove)
      elementRef.value.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    if (elementRef.value) {
      elementRef.value.removeEventListener('mousemove', handleMouseMove)
      elementRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return { tiltStyle, glareStyle }
}
