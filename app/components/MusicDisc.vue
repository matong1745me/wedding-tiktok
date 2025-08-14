<script setup>
import gsap from 'gsap'

import SpotifyCard from './SpotifyCard.vue'

const show = ref(false)

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
    <u-icon name="i-tabler:disc-filled" class="size-10 animate-spin text-white" @click="show = !show"/>
    <spotify-card id="spotify" class="absolute bottom-[100%] right-[100%] opacity-0"/>
  </div>
</template>
