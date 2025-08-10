<script setup>
import { onMounted, watch, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

// รับ props สำหรับ active state
const props = defineProps({
  isActive: Boolean
})

const characterRef = ref(null)
const text_0 = ref(null)
const text_1 = ref(null)
const text_2 = ref(null)
const text_3 = ref(null)
const text_4 = ref(null)
const text_5 = ref(null)
const text_6 = ref(null)
const text_7 = ref(null)
const popupRef = ref(null)
let textWiggleTimelines = []

const stickers = [
  '#smile-1',
  '#heart-1',
  '#face-1',
  '#roller-1',
  '#flower-1',
  '#star-1',
]

function playAnimation() {
  // ตัวละคร
  playStickers()
  gsap.set(characterRef.value, {
    top: '100%',
    opacity: 1,
    rotate: -2,
  })

  gsap.to(characterRef.value, {
    y: '-115%',
    opacity: 1,
    duration: 3.5,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(characterRef.value, {
        rotation: 4,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      })
    }
  })

  // ข้อความ
  let tl = gsap.timeline()
  const textRefs = [text_0.value, text_1.value, text_2.value, text_3.value, text_4.value, text_5.value, text_6.value]
  gsap.to(popupRef.value, {
    y: '-400%',
    duration: 0.5,
    ease: "power3.out",
  })
  textRefs.forEach((elRef, i) => {
    tl.to(elRef.el, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }, i === 0 ? 0 : "-=0.5")
  })
  tl.to(text_7.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  })

  let stickerTl = gsap.timeline()
  stickerTl.to('#star-1', {

  })
}

function resetAnimation() {
  const textRefs = [text_0.value, text_1.value, text_2.value, text_3.value, text_4.value, text_5.value, text_6.value]
  gsap.killTweensOf("*")
  gsap.set(characterRef.value, {
    clearProps: "all"
  })
  textRefs.forEach((elRef) => {
    gsap.set(elRef.el, {
      clearProps: "all"
    })
  })
  gsap.set(text_7.value, {
    clearProps: 'all'
  })

  gsap.set(popupRef.value, {
    clearProps: 'all'
  })
  // ล้าง timeline ที่ wiggle
  textWiggleTimelines.forEach(tl => tl.kill())
  textWiggleTimelines = []
}

onMounted(() => {
  if (props.isActive) playAnimation()
  setSticker()
})

watch(() => props.isActive, (newVal) => {
  if (newVal) {
    playAnimation()
  } else {
    resetAnimation()
    setSticker()
  }
})

const setSticker = () => {
  gsap.set(stickers, {
    opacity: 0,
    scale: 2,
  })
}

const playStickers = () => {
  const tl = gsap.timeline()
  stickers.forEach((sticker, i) => {
    tl.to(sticker, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, i === 0 ? 0 : "-=0.5")
  })
}
</script>

<template>
  <img src="/images/bg.png" class="h-screen object-cover" alt="bg" />
  <img
    ref="characterRef"
    src="/images/character-1.png"
    class="w-10/12 absolute z-10 left-[3%]"
    alt="character-1"
  />

  <cutout-text ref="text_0" :style-no="0" text="w" class="absolute z-10 top-[10%] left-[5%] opacity-0 scale-200" />
  <cutout-text ref="text_1" :style-no="1" text="e" class="absolute z-10 top-[12%] left-[25%] opacity-0 scale-200" />
  <cutout-text ref="text_2" :style-no="2" text="d" class="absolute z-10 top-[11%] left-[35%] opacity-0 scale-200" />
  <cutout-text ref="text_3" :style-no="3" text="d" class="absolute z-10 top-[12%] left-[45%] opacity-0 scale-200" />
  <cutout-text ref="text_4" :style-no="4" text="i" class="absolute z-10 top-[11%] left-[55%] opacity-0 scale-200" />
  <cutout-text ref="text_5" :style-no="5" text="n" class="absolute z-10 top-[12%] left-[65%] opacity-0 scale-200" />
  <cutout-text ref="text_6" :style-no="6" text="g" class="absolute z-10 top-[11%] left-[82%] opacity-0 scale-200" />
  <div ref="text_7" class="absolute z-10 top-[5%] right-[6%] opacity-0 scale-200 text-5xl text-white font-c">
    Invitaion
  </div>
  <img src="/images/stickers/star.png" alt="star" id="star-1" class="absolute top-[30%] left-[10%] w-[10%]">
  <img src="/images/stickers/yellow-heart.png" alt="heart-1" id="heart-1" class="absolute top-[25%] right-[20%] w-[13%]">
  <img src="/images/stickers/white-flower.png" alt="flower-1" id="flower-1" class="absolute top-[25%] left-[30%] w-[12%]">
  <img src="/images/stickers/green-face.png" alt="face" id="face-1" class="absolute top-[40%] right-[18%] w-[13%]">
  <img src="/images/stickers/roller.png" alt="roller" id="roller-1" class="absolute top-[35%] left-[40%] w-[20%]">
  <img src="/images/stickers/yellow-smile.png" alt="smile" id="smile-1" class="absolute top-[40%] left-[10%] w-[13%]">
  <img ref="popupRef" src="/images/overlay-popup.png" alt="popup" class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
</template>
