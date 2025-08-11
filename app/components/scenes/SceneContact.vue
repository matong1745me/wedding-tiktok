<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const p2 = ref(null)
const a21 = ref(null)
const a22 = ref(null)
const a23 = ref(null)
const a24 = ref(null)
const a25 = ref(null)

const playAnimation = () => {
  gsap.to('#popup-contact', {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
  gsap.to('#character-contact', {
    rotation: 184,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
  })
}
const resetAnimation = () => {
  gsap.set('#popup-contact', {
    y: '400%',
  })
}

onMounted(() => {
  if (props.isActive) playAnimation()
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
    <div class="absolute top-[5%] left-[50%] translate-x-[-50%] flex flex-col items-center">
      <div class="flex scale-[80%]">
        <cutout-text :style-no="2" text="l" class="" />
        <cutout-text :style-no="1" text="o" class="" />
        <cutout-text :style-no="0" text="c" class="" />
        <cutout-text :style-no="6" text="a" class="" />
        <cutout-text :style-no="5" text="t" class="" />
        <cutout-text :style-no="4" text="i" class="" />
        <cutout-text :style-no="3" text="o" class="" />
        <cutout-text :style-no="6" text="n" class="" />
      </div>
      <img src="/images/qr-location.png" alt="qr-code" class="max-h-[100px]">
      <p class="text-2xl font-c m-[4%] text-white">สถานีมีผัก คาเฟ่</p>
      <div class="flex scale-[70%]">
        <cutout-text :style-no="0" text="c" class="" />
        <cutout-text :style-no="1" text="o" class="" />
        <cutout-text :style-no="2" text="n" class="" />
        <cutout-text :style-no="3" text="t" class="" />
        <cutout-text :style-no="4" text="a" class="" />
        <cutout-text :style-no="5" text="c" class="" />
        <cutout-text :style-no="6" text="t" class="" />
      </div>

      <div class="w-[100%] flex flex-col items-center">
        <div>
          <p class="text-3xl font-c text-white">094 - 2144455 (มะต้อง)</p>
          <p class="text-3xl font-c text-white">080 - 5453519 (วาด)</p>
        </div>
      </div>
    </div>
    <img
      id="character-contact"
      src="/images/character-contact-1.png"
      class="w-8/12 absolute z-10 left-[50%] bottom-[7%] translate-x-[-50%]"
      style="transform: scaleX(-1);"
      alt="character-contact"
    />
    <img id="popup-contact" src="/images/overlay-popup.png" alt="popup"
      class="absolute top-[100%] left-[-15%] z-50 scale-400 origin-top">
  </div>
</template>
