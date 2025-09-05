<template>
  <div class="absolute bottom-6 left-0 right-0 flex flex-col items-center text-white pointer-events-none z-[999]">
    <div class="relative">
      <u-icon id="swipe-indicator" name="i-material-symbols-swipe-vertical-rounded" class="absolute bottom-0 translate-x-[-50%] size-21 text-black text-shadow-lg rotate-[-15deg] animate-swipe-wiggle" />
      <u-icon id="swipe-indicator" name="i-material-symbols-swipe-vertical-rounded" class="absolute bottom-0 translate-x-[-50%] size-20 text-white text-shadow-lg rotate-[-15deg] animate-swipe-wiggle" />
    </div>
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
