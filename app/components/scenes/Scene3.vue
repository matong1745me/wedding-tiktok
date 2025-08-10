<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-3', {
    y: '0%',
    duration: 1,
    ease: "power3.out",
  })
  
  const nameTl = gsap.timeline()
  nameTl.to('#character-3', {
    x: '0%',
    opacity: 1,
    duration: 1.2,
    ease: "bounce.out"
  })
  .to("#name", {
    y: '0%',
    opacity: 1,
    duration: 1.2,
    ease: "bounce.out"
  })
}
const resetAnimation = () => {
  gsap.set('#character-3', {
    x: '-175%'
  })
  gsap.set('#name', {
    y: '-200%'
  })
  gsap.set('#popup-3', {
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
  <div class="relative h-[100dvh] w-screen overflow-hidden">
    <img src="/images/bg.png" class="h-[100dvh] w-full object-cover" alt="bg" />
    <p id="name" class="text-6xl font-c absolute top-[10%] right-[5%] rotate-[2deg] z-10">มะต้อง<br/>Matong</p>
    <img
      id="character-3"
      src="/images/character-3.png"
      class="w-5/12 absolute z-10 left-[50%] bottom-[10%] translate-x-[-50%]"
      alt="character-3"
    />
    <img id="green-flower" src="/images/stickers/green-flower.png" alt="green-flower" class="absolute top-[10%] rotate-[5deg] w-[40%] left-[5%]">
    <img id="four-smile" src="/images/stickers/four-smile.png" alt="four-smile" class="absolute top-[50%] w-[10%] left-[5%]">
    <img id="star" src="/images/stickers/star.png" alt="star" class="absolute top-[5%] rotate-[5deg] w-[10%] right-[5%]">
    <img id="roller" src="/images/stickers/roller.png" alt="roller" class="absolute top-[70%] rotate-[5deg] w-[20%] right-[5%]">
    <img id="popup-3" src="/images/overlay-popup.png" alt="popup"
      class="absolute top-[75%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>

<style>
</style>