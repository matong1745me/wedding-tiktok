<script setup>
import { onMounted, ref } from 'vue'
import { useNuxtApp } from '#app'

import HeartIcon from './HeartIcon.vue'

import Scene1 from './scenes/Scene1.vue'

const selected = ref(0)
const slides = [Scene1]
</script>

<template>
  <div class="relative h-screen w-screen">
    <UCarousel
      class="w-full h-full"
      orientation="vertical"
      v-model="selected"
      :items="slides"
    >
      <template #default="{ item }" class="h-full w-full">
        <component :is="item"/>
      </template>
    </UCarousel>
    <div class="absolute bottom-1 right-1 z-50 flex flex-col-reverse items-center gap-3">
      <div class="flex flex-col items-center">
        <u-icon name="i-tabler-gift-filled" class="size-10" />
        <span>ของขวัญ</span>
      </div>
      <div class="flex flex-col items-center">
        <u-icon name="i-bitcoin-icons-sign-filled" class="size-10" />
        <span>ลงชื่อ</span>
      </div>
      <div class="flex flex-col items-center">
        <u-icon name="i-ion-navigate-circle" class="size-10" />
        <span>พิกัด</span>
      </div>
      <heart-icon />
    </div>
  </div>
</template>


<style scoped>
.section {
  height: 100vh;
  font-size: 2rem;
}

.fp-overflow {
  height: 100vh !important;
}
</style>
