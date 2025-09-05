<template>
  <div class="page-counter-wrapper absolute top-[10px] right-[10px] z-[999]">
    <p class="text-2xl text-white">
      <b>
        {{ props.current }}/10
      </b>
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['current'])


</script>

<style>

</style>
