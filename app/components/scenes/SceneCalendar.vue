<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-calendar', {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
}
const resetAnimation = () => {
  gsap.set('#popup-calendar', {
    y: '400%',
  })
}

onMounted(() => {
  if (props.isActive) playAnimation()
  resetAnimation()
})

watch(() => props.isActive, (newVal) => {
  if (newVal) {
    playAnimation()
  } else {
    resetAnimation()
  }
})
</script>

<template>
  <div class="relative h-[100dvh] w-screen">
    <img src="/images/bg.png" class="h-[100dvh] w-full object-cover" alt="bg" />
    <img
      id="character-calendar"
      src="/images/character-calendar.png"
      class="w-8/12 absolute z-10 left-[45%] bottom-[20%] translate-x-[-50%]"
      alt="character-5"
    />
    <img id="popup-calendar" src="/images/overlay-popup.png" alt="popup" class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
