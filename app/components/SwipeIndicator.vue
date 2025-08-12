<template>
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white pointer-events-none z-[999]">
    <u-icon id="swipe-indicator" name="i-material-symbols-swipe-vertical-rounded" class="size-10 text-white shadow-2xl rotate-[-15deg] animate-swipe-wiggle" />
  </div>
</template>

<style scoped>

@keyframes swipe-wiggle {
  0%, 100% { transform: rotate(-15deg); }
  50% { transform: rotate(30deg); }
}
.animate-swipe-wiggle {
  animation: swipe-wiggle 1.6s ease-in-out infinite;
}
</style>
