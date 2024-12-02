<script setup>
defineProps({
  imageSrc: String,
})
</script>

<template>
  <li class="slideshowItem" :style="{ '--bkgImage': 'url(' + imageSrc + ')' }"></li>
</template>

<style scoped>
.slideshowItem {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bkgImage);
  background-size: cover;
  background-position: center;
}
</style>
