<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to('#click-indicator', {
    y: 10,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  })
})
</script>

<template>
  <div class="text-white pointer-events-none">
    <u-icon id="click-indicator" name="i-tdesign-gesture-click" class="size-8 text-white shadow-2xl rotate-[180deg]" />
  </div>
</template>
