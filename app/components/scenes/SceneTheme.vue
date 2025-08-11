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
  gsap.to('#chujai', { rotation: 20, repeat: -1, yoyo: true, duration: 1.5, ease: 'sine.inOut' })
  gsap.to('#manee', { rotation: -20, repeat: -1, yoyo: true, duration: 1.5, ease: 'sine.inOut' })
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
    <div class="absolute top-[10%] left-[5%] h-[8%] w-[80%]">
      <p class="font-c text-6xl mb-[15%] text-center text-white">Theme</p>
      <div class="flex w-[100%] h-[100%] gap-[1%] ml-[6%]">
        <div class="rounded-t-4xl w-[80px] h-[100%] bg-white">
          <div class="rounded-t-4xl bg-[rgb(100,107,56)] h-[80%]">
          </div>
        </div>
        <div class="rounded-t-4xl w-[80px] h-[100%] bg-white">
          <div class="rounded-t-4xl bg-[rgb(118,78,35)] h-[80%]">
          </div>
        </div>
        <div class="rounded-t-4xl w-[80px] h-[100%] bg-white">
          <div class="rounded-t-4xl bg-[rgb(202,151,60)] h-[80%]">
          </div>
        </div>
        <div class="rounded-t-4xl w-[80px] h-[100%] bg-white">
          <div class="rounded-t-4xl bg-[rgb(247,219,117)] h-[80%]">
          </div>
        </div>
        <div class="rounded-t-4xl w-[80px] h-[100%] bg-white">
          <div class="rounded-t-4xl bg-[rgb(250,240,190)] h-[80%]">
          </div>
        </div>
      </div>
    </div>
    <img
      id="character-theme"
      src="/images/character-theme.png"
      class="w-9/12 absolute z-10 left-[50%] bottom-[50%] translate-x-[-50%] translate-y-[50%]"
      alt="character-5"
    />
    <div class="flex justify-center absolute bottom-[18%]">
      <img id="manee" src="/images/preload/manee.png" class="w-[30%]" />
      <img id="chujai" src="/images/preload/chujai.png" class="w-[30%]" />
    </div>
    <img id="white-flower-theme" src="/images/stickers/white-flower.png" alt="white" class="absolute top-[16%] left-[18%] w-[10%]">
    <img id="cloud-theme" src="/images/stickers/cloud.png" alt="white" class="absolute top-[10%] right-[18%] w-[20%]">
    <img id="roller-theme" src="/images/stickers/roller.png" alt="white" class="absolute top-[15%] right-[10%] w-[15%]">
    <img id="plant-theme" src="/images/stickers/plant.png" alt="white" class="absolute top-[5%] left-[5%] w-[15%]">
    <img id="popup-calendar" src="/images/overlay-popup.png" alt="popup" class="absolute top-[100%] left-[-10%] z-50 scale-400 origin-top">
  </div>
</template>
