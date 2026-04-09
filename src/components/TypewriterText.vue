<template>
  <span class="typewriter">
    <span class="text">{{ displayText }}</span>
    <span class="cursor" :class="{ blink: cursorBlink }">|</span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  text: string
  speed?: number
  delay?: number
}>()

const displayText = ref('')
const cursorBlink = ref(true)
const isTyping = ref(false)

const typeText = async () => {
  if (isTyping.value) return
  isTyping.value = true
  displayText.value = ''

  // Initial delay
  if (props.delay) {
    await new Promise(resolve => setTimeout(resolve, props.delay))
  }

  const chars = props.text.split('')
  for (let i = 0; i < chars.length; i++) {
    displayText.value += chars[i]
    await new Promise(resolve => setTimeout(resolve, props.speed || 50))
  }

  isTyping.value = false
}

const restart = () => {
  typeText()
}

onMounted(() => {
  typeText()
})

watch(() => props.text, () => {
  typeText()
})

defineExpose({ restart })
</script>

<style scoped lang="less">
.typewriter {
  display: inline;
}

.cursor {
  display: inline;
  color: #FF501E;
  font-weight: 300;

  &.blink {
    animation: blink 1s step-end infinite;
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
