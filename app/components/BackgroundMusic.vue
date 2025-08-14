<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const audio = ref(null)
let waitingForInteraction = false

const tryPlay = () => {
  audio.value.play().then(() => {
    console.log('Audio started')
    removeInteractionListeners()
    waitingForInteraction = false
  }).catch(() => {
    console.log('Playback blocked — waiting for user interaction...')
    waitingForInteraction = true
  })
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    audio.value.pause()
  } else {
    tryPlay()
  }
}

const onUserInteraction = () => {
  if (waitingForInteraction) {
    tryPlay()
  }
}

const addInteractionListeners = () => {
  document.addEventListener('click', onUserInteraction)
  document.addEventListener('keydown', onUserInteraction)
  document.addEventListener('touchstart', onUserInteraction)
}

const removeInteractionListeners = () => {
  document.removeEventListener('click', onUserInteraction)
  document.removeEventListener('keydown', onUserInteraction)
  document.removeEventListener('touchstart', onUserInteraction)
}

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange)
  addInteractionListeners()
  tryPlay()
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  removeInteractionListeners()
})
</script>

<template>
  <audio
    ref="audio"
    src="/music/background.mp3"
    loop
    autoplay
    hidden
  ></audio>
</template>
