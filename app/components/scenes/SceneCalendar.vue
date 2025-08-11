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
  gsap.to('#character-calendar', {
    rotation: 8,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
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
      class="w-11/12 absolute z-10 left-[40%] bottom-[5%] translate-x-[-50%]"
      alt="character-5"
    />
    <img src="/images/stickers/yellow-heart.png" alt="yellow-heart" class="absolute w-[15%] top-[50%] right-[15%]">
    <img src="/images/stickers/green-flower.png" alt="green-flower" class="absolute w-[15%] top-[60%] left-[10%]">
    <img src="/images/stickers/smile-tag.png" alt="smile-tag" class="absolute w-[25%] top-[45%] left-[10%] rotate-[-20deg]">
    <img src="/images/calendar.png" alt="calendar" class="absolute w-[95%] top-[3%] left-[52%] translate-x-[-50%]" />
    <img id="popup-calendar" src="/images/overlay-popup.png" alt="popup" class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
