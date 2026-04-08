/**
 * Utility Functions
 */

/**
 * Debounce function
 * @param func - Function to debounce
 * @param wait - Milliseconds to wait
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function
 * @param func - Function to throttle
 * @param limit - Milliseconds limit
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit = 300
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if element is in viewport
 * @param element - Element to check
 * @returns Is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Lazy load images
 * @param selector - Image selector
 */
export function lazyLoadImages(selector = 'img[data-src]'): void {
  const images = document.querySelectorAll<HTMLImageElement>(selector)

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      }
    })
  }
}

/**
 * Format phone number
 * @param phone - Raw phone number
 * @returns Formatted phone number
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{3})\s*-\s*(\d{11})/, '$1 - $2')
}

/**
 * Get current year
 * @returns Current year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}

/**
 * Scroll to element smoothly
 * @param elementId - Element ID to scroll to
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default {
  debounce,
  throttle,
  isInViewport,
  lazyLoadImages,
  formatPhone,
  getCurrentYear,
  scrollToElement
}
