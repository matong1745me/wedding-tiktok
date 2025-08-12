<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to('#swipe-indicator', {
    rotate: 30,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  })
})
</script>

<template>
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white pointer-events-none z-[999]">
    <u-icon id="swipe-indicator" name="i-material-symbols-swipe-vertical-rounded" class="size-10 text-white shadow-2xl rotate-[-15deg]" />
  </div>
</template>
