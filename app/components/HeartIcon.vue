<script setup>
import gsap from 'gsap'

const heartIconRef = ref(null)

const likeCount = ref(1000)
const isPressed = ref(false)

const formatNumberShort = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + 'k';
  }
  return num.toString();
}

const createHeart = () => {
  const heart = document.createElement('div')
  heart.innerText = '❤️'
  heart.className = 'absolute text-2xl select-none'

  const startLeft = Math.random() * 80 + 10 // 10% - 90%
  heart.style.left = `${startLeft}%`
  heart.style.bottom = `0px`

  document.body.appendChild(heart)

  const duration = 3 + Math.random() * 2
  const swayAmount = 20 + Math.random() * 30 // 20px - 50px

  const timeline = gsap.timeline({
    onComplete: () => heart.remove()
  })

  timeline.to(heart, {
    y: -window.innerHeight - 100,
    duration: duration,
    ease: "linear"
  }, 0)

  // ส่ายซ้ายขวาแบบสลับ
  timeline.to(heart, {
    x: () => `+=${swayAmount}`,
    yoyo: true,
    repeat: Math.floor(duration / 0.4), // ความถี่การส่าย
    duration: 0.4,
    ease: "sine.inOut"
  }, 0)

  timeline.to(heart, {
    opacity: 0,
    duration: 0.5
  }, duration - 0.5)
}

const handleClick = () => {
  createHeart()
}

</script>


<template>
   <div class="flex flex-col items-center">
        <button ref="heartIconRef" @click="handleClick"
          class="flex flex-col touch-manipulation"
          :class="['transition duration-100', isPressed ? 'scale-90' : '']"
          @touchstart="isPressed = true"
          @touchend="isPressed = false"
          @touchcancel="isPressed = false"
        >
          <UIcon name="i-mdi-cards-heart" class="size-10" />
        </button>
        <span>{{ formatNumberShort(likeCount) }}</span>
      </div>
</template>
