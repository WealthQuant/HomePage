import { describe, it, expect } from 'vitest'
import { debounce, throttle, getCurrentYear, formatPhone } from '../index'

describe('utils', () => {
  describe('debounce', () => {
    it('should delay function execution', async () => {
      let count = 0
      const debouncedFn = debounce(() => {
        count++
      }, 50)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      expect(count).toBe(0)

      await new Promise(resolve => setTimeout(resolve, 100))
      expect(count).toBe(1)
    })
  })

  describe('throttle', () => {
    it('should limit function execution rate', async () => {
      let count = 0
      const throttledFn = throttle(() => {
        count++
      }, 50)

      throttledFn()
      throttledFn()
      throttledFn()

      expect(count).toBe(1)

      await new Promise(resolve => setTimeout(resolve, 100))
      throttledFn()
      expect(count).toBe(2)
    })
  })

  describe('getCurrentYear', () => {
    it('should return current year', () => {
      const year = getCurrentYear()
      expect(year).toBe(new Date().getFullYear())
    })
  })

  describe('formatPhone', () => {
    it('should format phone number correctly', () => {
      const formatted = formatPhone('+086-18800000000')
      expect(formatted).toBe('+086 - 18800000000')
    })
  })
})
