<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import PhotoSlideshowItem from '../components/PhotoSlideshowItem.vue'

defineProps({
  data: Object,
})

const activePhoto = ref(null)
const photos = ref(null)
const totalPhotos = ref(null)
let slideshowInt

const startSlideshow = () => {
  photos.value = document.querySelectorAll('.slideshowItem')
  totalPhotos.value = photos.value.length

  if (!activePhoto.value) {
    setPhoto(0)
  } else {
    nextPhoto()
  }

  slideshowInt = setInterval(() => {
    nextPhoto()
  }, 5000)
}

const stopSlideShow = () => {
  clearInterval(slideshowInt)
}

const nextPhoto = () => {
  if (activePhoto.value === totalPhotos.value - 1) {
    setPhoto(0)
  } else {
    setPhoto(activePhoto.value + 1)
  }
}

const setPhoto = (id) => {
  activePhoto.value = id
}

const checkImage = (id) => {
  return activePhoto.value === id
}

onMounted(() => {
  startSlideshow()
})

onBeforeRouteLeave(() => {
  stopSlideShow()
})
</script>

<template>
  <TransitionGroup name="slide-fade" tag="ul">
    <PhotoSlideshowItem
      v-for="(image, index) in data"
      :key="image"
      :imageSrc="image.fields.file.url"
      v-show="checkImage(index)"
    />
  </TransitionGroup>
</template>

<style scoped>
ul {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
  background-position: center;
  z-index: 2;
  padding: 0;
  margin: 0;
  list-style: none;
}

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: opacity 0.5s;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-from {
  opacity: 1;
}

.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
