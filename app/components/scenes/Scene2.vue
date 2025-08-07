<script setup>
import { watch, onMounted, ref } from 'vue'
import gsap from 'gsap'
import CutoutText from '../CutoutText.vue'

const props = defineProps({
  isActive: Boolean
})

const textRef = ref(null)

const tl = gsap.timeline({ paused: true })
watch(() => props.isActive, (active) => {
  if (textRef.value.el) {
    console.log(textRef.value)
    if (tl.isActive()) tl.kill() // kill ongoing animation
    if (active) {
      tl.to(textRef.value.el, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }).play()
    } else {
      tl.reverse()
    }
  }
})
</script>

<template>
  <div class="relative h-[100dvh] w-screen">
    <img src="/images/bg.png" class="h-[100dvh] w-full object-cover" alt="bg" />
  </div>
</template>
