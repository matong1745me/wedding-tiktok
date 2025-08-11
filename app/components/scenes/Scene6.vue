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
}
const resetAnimation = () => {
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
    <img src="/images/character-6.jpg" class="h-[100dvh] w-full object-cover" alt="bg" />
  </div>
</template>
