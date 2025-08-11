<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-3', {
    y: '-400%',
    duration: 0.5,
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
    y: '-230%'
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
     <div class="flex absolute top-[5%] left-[50%] translate-x-[-50%] scale-[80%]">
      <cutout-text :style-no="0" text="g" class="" />
      <cutout-text :style-no="1" text="r" class="" />
      <cutout-text :style-no="2" text="o" class="" />
      <cutout-text :style-no="3" text="o" class="" />
      <cutout-text :style-no="4" text="m" class="" />
    </div>
    <p id="name" class="text-5xl font-c absolute top-[15%] right-[5%] rotate-[2deg] z-10 text-white">มะต้อง<br/>Matong</p>
    <img
      id="character-3"
      src="/images/character-3.png"
      class="w-4/12 absolute z-10 left-[50%] bottom-[15%] translate-x-[-50%]"
      alt="character-3"
    />
    <img id="green-flower" src="/images/stickers/green-flower.png" alt="green-flower" class="absolute top-[15%] rotate-[5deg] w-[30%] left-[5%]">
    <img id="four-smile" src="/images/stickers/four-smile.png" alt="four-smile" class="absolute top-[50%] w-[10%] left-[10%]">
    <img id="star" src="/images/stickers/star.png" alt="star" class="absolute top-[35%] rotate-[5deg] w-[10%] left-[15%]">
    <img id="star-2" src="/images/stickers/star.png" alt="star" class="absolute top-[30%] rotate-[5deg] w-[10%] right-[15%]">
    <img id="star-3" src="/images/stickers/star.png" alt="star" class="absolute bottom-[20%] rotate-[5deg] w-[10%] right-[20%]">
    <img id="roller" src="/images/stickers/roller.png" alt="roller" class="absolute top-[50%] rotate-[5deg] w-[20%] right-[15%]">
    <img id="popup-3" src="/images/overlay-popup.png" alt="popup"
      class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>

<style>
</style>