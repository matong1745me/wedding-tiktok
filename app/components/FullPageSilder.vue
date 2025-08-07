<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import HeartIcon from './HeartIcon.vue'

import Scene1 from './scenes/Scene1.vue'
import Scene2 from './scenes/Scene2.vue'

const activeIndex = ref(0)
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

</script>

<template>
  <div class="relative h-[100dvh] w-screen overflow-hidden">
    <swiper
      direction="vertical"
      :slides-per-view="1"
      :space-between="0"
      :mousewheel="true"
      :keyboard="true"
      :grab-cursor="true"
      :threshold="5"
      :speed="400"
      class="h-[100dvh] w-screen"
      @slideChange="onSlideChange"
    >
      <SwiperSlide>
        <scene-1 :is-active="activeIndex === 0" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-2 :is-active="activeIndex === 1" />
      </SwiperSlide>
    </swiper>
    <div class="absolute bottom-[15%] right-[2%] z-50 flex flex-col-reverse items-center gap-3">
      <div class="flex flex-col items-center">
        <u-icon name="i-tabler:disc-filled" class="size-10 animate-spin text-white" />
      </div>
      <div class="flex flex-col items-center">
        <u-icon name="i-tabler-gift-filled" class="size-10 text-white" />
        <span class="text-white">ของขวัญ</span>
      </div>
      <div class="flex flex-col items-center">
        <u-icon name="i-bitcoin-icons-sign-filled" class="size-10 text-white" />
        <span class="text-white">ลงชื่อ</span>
      </div>
      <div class="flex flex-col items-center">
        <u-icon name="i-ion-navigate-circle" class="size-10 text-white" />
        <span class="text-white">พิกัด</span>
      </div>
      <heart-icon />
    </div>
  </div>
</template>


<style scoped>
.touch-pan-y {
  touch-action: pan-y;
}
</style>
