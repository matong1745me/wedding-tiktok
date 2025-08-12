<script setup>
import gsap from 'gsap'
import { onMounted, onBeforeUnmount, ref } from 'vue'

import SpotifyCard from './SpotifyCard.vue'

const audioRef = ref(null)
let retryInterval = null
const show = ref(false)

function tryPlay() {
  audioRef.value.play().then(() => {
    console.log('Background music playing ✅')
    stopRetry()
  }).catch(() => {
    console.log('Still blocked ❌ — waiting for interaction')
  })
}

function userInteractionHandler() {
  tryPlay()
}

function startRetry() {
  // Keep trying every 2 seconds in case autoplay is unlocked
  retryInterval = setInterval(tryPlay, 2000)
  // Also listen for user actions to instantly retry
  window.addEventListener('click', userInteractionHandler)
  window.addEventListener('touchstart', userInteractionHandler)
  window.addEventListener('keydown', userInteractionHandler)
}

function stopRetry() {
  clearInterval(retryInterval)
  retryInterval = null
  window.removeEventListener('click', userInteractionHandler)
  window.removeEventListener('touchstart', userInteractionHandler)
  window.removeEventListener('keydown', userInteractionHandler)
}

onMounted(() => {
  startRetry()
})

onBeforeUnmount(() => {
  stopRetry()
})

watch(show, (newVal) => {
  if (newVal) {
    // Animate in
    gsap.fromTo(
      '#spotify',
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
    )
  } else {
    // Animate out
    gsap.to('#spotify', {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 0.3,
      ease: 'power3.in',
    })
  }
})
</script>

<template>
  <div class="flex flex-col items-center relative">
    <audio
      ref="audioRef"
      src="/music/background.mp3"
      loop
      preload="auto"
      autoplay
    ></audio>
    <u-icon name="i-tabler:disc-filled" class="size-10 animate-spin text-white" @click="show = !show"/>
    <spotify-card id="spotify" class="absolute bottom-[100%] right-[100%] opacity-0"/>
  </div>
</template>
