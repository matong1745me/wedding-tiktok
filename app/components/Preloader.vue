<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done'])

const visible = ref(true)
const preloader = ref(null)
const loader = ref(null)
const text = ref(null)
const manee = ref(null)
const chujai = ref(null)

function startLoopAnimation() {
  gsap.to(chujai.value, { rotation: 4, repeat: -1, yoyo: true, duration: 1, ease: 'sine.inOut' })
  gsap.to(manee.value, { rotation: -4, repeat: -1, yoyo: true, duration: 1, ease: 'sine.inOut' })
  const chars = text.value.textContent.split('')
  text.value.innerHTML = chars.map(c => `<span class="inline-block font-c">${c}</span>`).join('')
  gsap.to(text.value.querySelectorAll('span'), {
    y: -8,
    repeat: -1,
    yoyo: true,
    stagger: 0.08,
    ease: 'sine.inOut'
  })
  gsap.to(".loader-fill", {
    duration: 4.2,
    right: "2px",
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(".loader", {
        opacity: 0,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "steps(1)"
      })
    }
  })
}

function runExitAnimation() {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('done') // tell parent to mount main page
    }
  })
  tl.fromTo(loader.value, { scale: 0.8, opacity: 0 }, { scale: 1.2, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' })
    .to(loader.value, { scale: 0, duration: 0.4, ease: 'power2.inOut' })
    .to(preloader.value, { opacity: 0, duration: 0.6, ease: 'power2.out' }, '+=0.2')
}

onMounted(async () => {
  await nextTick()
  startLoopAnimation() // Start immediately

  if (document.readyState === 'complete') {
    setTimeout(() => {
      runExitAnimation()
    }, 5000)
  } else {
    window.addEventListener('load', runExitAnimation, { once: true })
  }
})
</script>

<template>
  <div v-if="visible" ref="preloader" class="fixed inset-0 bg-[#d1d1d1] flex items-center justify-center z-[9999]">
    <div ref="loader" class="flex flex-col items-center gap-4">
      <div class="flex justify-center">
        <img ref="manee" src="/images/preload/manee.png" class="w-[30%]" />
        <img ref="chujai" src="/images/preload/chujai.png" class="w-[30%]" />
      </div>
      <p ref="text" class="text-gray-600 text-3xl font-c">รอแป๊ปนึงนะ นู้ดดด ...</p>
      <div class="loader">
        <div class="loader-fill"></div>
      </div>
    </div>
  </div>
</template>


<style>
.loader {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: #514b82;
  border: 2px solid;
  position: relative;
}
.loader-fill {
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: 100%;
  left: 2px;
  border-radius: 18px;
  background: currentColor;
}
@keyframes l6 {
    100% {inset:0}
}
</style>