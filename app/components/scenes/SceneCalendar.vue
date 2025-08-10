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
  gsap.to(p2.value, {
    y: '0%',
    duration: 1,
    ease: "power3.out",
  })
  gsap.to(a22.value, {
    x: '-50%',
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(a22.value, {
        rotate: 360,
        duration: 4,
        repeat: -1,
        ease: "linear"
      })
    }
  })
}
const resetAnimation = () => {
  gsap.set(p2.value, {
    y: '400%',
  })
  gsap.set(a22.value, {
    x: '-100%',
    opacity: 0,
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
    <p class="text-6xl font-c absolute top-[10%] right-[5%] rotate-[2deg]">วาด</p>
    <img
      ref="characterRef"
      src="/images/character-calendar.png"
      class="w-8/12 absolute z-10 left-[50%] bottom-[50%] translate-x-[-50%] translate-y-[50%]"
      alt="character-5"
    />
    <img ref="a21" src="/images/stickers/yellow-smile.png" alt="smile" class="absolute top-[10%] rotate-[5deg] w-[20%] left-[5%]">
    <img ref="a22" src="/images/stickers/flower-dot.png" alt="flower" class="absolute top-[20%] rotate-[5deg] w-[50%] left-[0%]">
    <img ref="a23" src="/images/stickers/sharp.png" alt="smile" class="absolute top-[30%] w-[15%] right-[5%]">
    <img ref="a24" src="/images/stickers/roller.png" alt="smile" class="absolute top-[4%] w-[14%] right-[5%] rotate-[45deg]">
    <img ref="a25" src="/images/stickers/white-flower.png" alt="smile" class="absolute top-[20%] w-[18%] right-[35%]">
    <img ref="p2" src="/images/overlay-popup.png" alt="popup" class="absolute top-[75%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
