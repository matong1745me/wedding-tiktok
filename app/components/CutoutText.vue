<script setup>
const { text, styleNo } = defineProps(['text', 'styleNo'])
const style = computed(() => Number.isSafeInteger(styleNo) ? `mlvx-${styleNo}` : `mlvx-${Math.floor(Math.random() * 7)}`)
</script>
<template>
  <div class="texturizer-content">
    <div id="ransomizer-kpmayrnz" style="text-align: var(--global-text-align); font-size: var(--global-font-size);">
      <div :data-text="text" :class="`tc ${style}`" style="">
        <div :data-text="text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>