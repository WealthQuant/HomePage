import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for lazy loading images using Intersection Observer
 */
export function useLazyLoad(
  options: IntersectionObserverInit = {}
) {
  const isVisible = ref(false)
  const targetRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Stop observing once visible
            if (observer && targetRef.value) {
              observer.unobserve(targetRef.value)
            }
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before element enters viewport
        threshold: 0.1,
        ...options,
      }
    )

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })

  return {
    isVisible,
    targetRef,
  }
}

export default useLazyLoad
