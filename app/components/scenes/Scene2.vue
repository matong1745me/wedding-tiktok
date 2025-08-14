<script setup>
import { watch, onMounted, ref } from 'vue'
import SplitType from 'split-type'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-2', {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
  gsap.to('#dot-2', {
    x: '-50%',
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    onComplete: () => {
      gsap.to('#dot-2', {
        rotate: 360,
        duration: 4,
        repeat: -1,
        ease: "linear"
      })
    }
  })
  const stickers = [
    '#flower-2',
    '#smile-2',
    '#sharp-2',
    '#roller-2',
  ]
  const tl = gsap.timeline()
  stickers.forEach((sticker, i) => {
    tl.to(sticker, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, i === 0 ? 0 : "-=0.5")
  })

  gsap.to('#character-2', {
    scale: 1,
    opacity: 1,
    duration: 1,
    rotate: -2,
    ease: "power3.out",
    onComplete: () => {
      gsap.to('#character-2', {
        rotation: 4,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      })
    }
  })
}
const resetAnimation = () => {
  gsap.set('#popup-2', {
    y: '400%',
  })
  gsap.set('#dot-2', {
    x: '-100%'
  })
  gsap.set([
    '#flower-2',
    '#smile-2',
    '#sharp-2',
    '#roller-2',
  ], {
    opacity: 0,
    scale: 2,
  })
  gsap.set('#character-2', {
    opacity: 0,
    scale: 1.2
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
    <span animate id="mainText" class="text-6xl font-c absolute top-[10%] right-[10%] rotate-[2deg] text-white z-50">แต่งงานแล้ว</span>
    <img id="character-2" src="/images/character-2.png" class="w-9/12 absolute z-10 left-[5%] bottom-[15%]"
      alt="character-2" />
    <img id="smile-2" src="/images/stickers/yellow-smile.png" alt="smile"
      class="absolute top-[5%] rotate-[5deg] w-[10%] left-[5%]">
    <img id="dot-2" src="/images/stickers/flower-dot.png" alt="flower"
      class="absolute top-[20%] rotate-[5deg] w-[50%] left-[0%] translate-x-[-100%]">
    <img id="sharp-2" src="/images/stickers/sharp.png" alt="smile" class="absolute top-[25%] w-[15%] right-[5%]">
    <img id="roller-2" src="/images/stickers/roller.png" alt="smile"
      class="absolute top-[4%] w-[14%] right-[5%] rotate-[45deg]">
    <img id="flower-2" src="/images/stickers/white-flower.png" alt="smile" class="absolute top-[5%] w-[9%] right-[20%]">
    <img id="popup-2" src="/images/overlay-popup.png" alt="popup"
      class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
