<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import HeartIcon from './HeartIcon.vue'

import Scene1 from './scenes/Scene1.vue'
import Scene2 from './scenes/Scene2.vue'
import Scene3 from './scenes/Scene3.vue'
import Scene4 from './scenes/Scene4.vue'
import SceneCalendar from './scenes/SceneCalendar.vue'
import Scene6 from './scenes/Scene6.vue'
import Scene7 from './scenes/Scene7.vue'
import SceneTheme from './scenes/SceneTheme.vue'
import SceneContact from './scenes/SceneContact.vue'
import SceneGift from './scenes/SceneGift.vue'
import MusicDisc from './MusicDisc.vue'
import SwipeIndicator from './SwipeIndicator.vue'
import ClickIndicator from './ClickIndicator.vue'

const activeIndex = ref(0)
const swiperInstance = ref(null)
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

const goToSign = () => {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-yENjLCk5WP29UBdQfYNCOMLONkz6z84CTYWNIXYWtJvydw/viewform?usp=header')
}

const goToMap = () => {
  window.open('https://maps.app.goo.gl/L9SJtgotyUfJCMBd7')
}

const goToGift = () => {
  swiperInstance.value?.slideTo(9)
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

</script>

<template>
  <div class="relative h-[100dvh] w-screen overflow-hidden">
    <swiper @swiper="onSwiper" direction="vertical" :slides-per-view="1" :space-between="0" :mousewheel="true" :keyboard="true"
      :grab-cursor="true" :threshold="5" :speed="400" class="h-[100dvh] w-screen swiper-slider" @slideChange="onSlideChange">
      <SwiperSlide>
        <scene-1 :is-active="activeIndex === 0" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-2 :is-active="activeIndex === 1" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-3 :is-active="activeIndex === 2" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-4 :is-active="activeIndex === 3" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-6 :is-active="activeIndex === 4" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-7 :is-active="activeIndex === 5" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-calendar :is-active="activeIndex === 6" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-theme :is-active="activeIndex === 7" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-contact :is-active="activeIndex === 8" />
      </SwiperSlide>
      <SwiperSlide>
        <scene-gift :is-active="activeIndex === 9" />
      </SwiperSlide>
    </swiper>
    <div class="absolute bottom-[15%] right-[2%] z-50 flex flex-col-reverse items-center gap-3">
      <music-disc />
      <div class="flex flex-col items-center" @click="goToGift">
        <u-icon name="i-tabler-gift-filled" class="size-10 text-white" />
        <span class="text-white">ของขวัญ</span>
      </div>
      <div class="flex flex-col items-center" @click="goToSign">
        <u-icon name="i-bitcoin-icons-sign-filled" class="size-10 text-white" />
        <span class="text-white">ลงชื่อ</span>
      </div>
      <div class="flex flex-col items-center" @click="goToMap">
        <u-icon name="i-ion-navigate-circle" class="size-10 text-white" />
        <span class="text-white">พิกัด</span>
      </div>
      <heart-icon />
      <click-indicator />
    </div>
    <swipe-indicator />
  </div>
</template>


<style scoped>
.touch-pan-y {
  touch-action: pan-y;
}
</style>
