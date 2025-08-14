<template>
  <div class="text-white pointer-events-none">
    <u-icon name="i-tdesign-gesture-click" class="size-8 text-white shadow-2xl rotate-[180deg] animate-up-wiggle" />
  </div>
</template>

<style scoped>

@keyframes up-wiggle {
  0%, 100% { transform: translateY(-10px); }
  50% { transform: translateY(-20px); }
}
.animate-up-wiggle {
  animation: up-wiggle 1.6s ease-in-out infinite;
}
</style>