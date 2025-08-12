<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-4', {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
  const nameTl = gsap.timeline()
  
  nameTl.to('#character-4', {
    x: '-50%',
    opacity: 1,
    duration: 1.2,
    ease: "bounce.out"
  }).to("#name-4", {
    y: '0%',
    opacity: 1,
    duration: 1.2,
    ease: "bounce.out"
  })

}
const resetAnimation = () => {
  gsap.set('#character-4', {
    x: '150%'
  })
  gsap.set('#name-4', {
    y: '-250%'
  })
  gsap.set('#popup-4', {
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
      <cutout-text :style-no="0" text="b" class="" />
      <cutout-text :style-no="1" text="r" class="" />
      <cutout-text :style-no="2" text="i" class="" />
      <cutout-text :style-no="3" text="d" class="" />
      <cutout-text :style-no="4" text="e" class="" />
    </div>
    <p id="name-4" class="text-5xl font-c absolute top-[15%] right-[5%] rotate-[2deg] z-10 text-white">วาด<br/>Waad</p>
    <img
      id="character-4"
      src="/images/character-4.png"
      class="w-6/12 absolute z-10 left-[50%] bottom-[15%] translate-x-[-30%]"
      alt="character-4"
    />
    <img id="green-face" src="/images/stickers/green-face.png" alt="green-face" class="absolute top-[15%] rotate-[5deg] w-[20%] left-[5%]">
    <img id="rainbow" src="/images/stickers/rainbow.png" alt="rainbow" class="absolute top-[50%] w-[20%] left-[5%]">
    <img id="star" src="/images/stickers/star.png" alt="star" class="absolute top-[5%] rotate-[5deg] w-[10%] right-[5%]">
    <img id="star-2" src="/images/stickers/star.png" alt="star" class="absolute top-[25%] rotate-[5deg] w-[10%] left-[25%]">
    <img id="plant" src="/images/stickers/plant.png" alt="plant" class="absolute bottom-[20%] rotate-[5deg] w-[20%] left-[5%]">
    <img id="roller-2" src="/images/stickers/roller.png" alt="roller" class="absolute top-[35%] rotate-[5deg] w-[20%] left-[5%]">
    <img id="popup-4" src="/images/overlay-popup.png" alt="popup"
      class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>

