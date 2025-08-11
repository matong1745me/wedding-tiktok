<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const playAnimation = () => {
  gsap.to('#popup-gift', {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
  gsap.to('#character-gift', {
    y: '-115%',
    opacity: 1,
    duration: 3.5,
    ease: "power3.out",
    onComplete: () => {
      gsap.to('#character-gift', {
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
  gsap.set('#popup-gift', {
    y: '400%',
  })
  gsap.set('#character-gift', {
    top: '100%',
    opacity: 1,
    rotate: -2,
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
    <div class="flex absolute top-[5%] left-[50%] translate-x-[-50%]">
      <cutout-text :style-no="0" text="g" class="" />
      <cutout-text :style-no="1" text="i" class="" />
      <cutout-text :style-no="2" text="f" class="" />
      <cutout-text :style-no="3" text="t" class="" />
    </div>
    <img src="/images/qr-gift.jpg" alt="qr-gift" class="absolute left-[50%] top-[20%] translate-x-[-50%] w-[35%]">
    <img
      id="character-gift"
      src="/images/character-gift.png"
      class="w-8/12 absolute z-10 left-[45%] bottom-[8%] translate-x-[-50%]"
      alt="character-5"
    />
    <div class="flex absolute top-[42%] left-[50%] translate-x-[-50%] scale-[50%]">
      <cutout-text :style-no="0" text="t" class="" />
      <cutout-text :style-no="1" text="h" class="" />
      <cutout-text :style-no="2" text="a" class="" />
      <cutout-text :style-no="3" text="n" class="" />
      <cutout-text :style-no="4" text="k" class="" />
      <div></div>
      <cutout-text :style-no="5" text="y" class="" />
      <cutout-text :style-no="6" text="o" class="" />
      <cutout-text :style-no="0" text="u" class="" />
    </div>
    <img src="/images/stickers/yellow-heart.png" alt="smile" class="absolute w-[15%] top-[30%] left-[5%]">
    <img src="/images/stickers/red-glasses.png" alt="smile" class="absolute w-[15%] top-[15%] left-[10%] rotate-[30deg]">
    <img src="/images/stickers/pink-flower.png" alt="smile" class="absolute w-[20%] top-[20%] left-[75%]">
    <img src="/images/stickers/roller.png" alt="smile" class="absolute w-[15%] top-[10%] right-[5%]">
    <img id="popup-gift" src="/images/overlay-popup.png" alt="popup" class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
