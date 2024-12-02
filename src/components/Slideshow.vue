<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SlideshowItem from '../components/SlideshowItem.vue';

defineProps({
  data: Object
})

let activePhoto = ref(null);
let photos = ref(null);
let totalPhotos = ref(null);

const startSlideshow = () => {
  photos.value = document.querySelectorAll('.slideshowItem');
  totalPhotos.value = photos.value.length;
  setPhoto(0);

  let slideshowInt = setInterval(() => {
    nextPhoto();
  }, 5000);
}

const nextPhoto = () => {
  if(activePhoto.value === (totalPhotos.value - 1)) {
    setPhoto(0);
  }
  else {
    setPhoto(activePhoto.value + 1);
  }
}

const setPhoto = (id) => {
  activePhoto.value = id;
}

const checkImage = (id) => {
  return activePhoto.value === id;
}

onMounted(() => {
  startSlideshow();
})

</script>

<template>
<TransitionGroup name="slide-fade" tag="ul">
    <SlideshowItem v-for="(image, index) in data" :key="image" :imageSrc="image.fields.file.url" v-show="checkImage(index)" />
    </TransitionGroup>
</template>

<style scoped>
ul {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url('./carrots.jpg');
  background-size: cover;
  background-position: center;
  z-index: 2;
  padding: 0;
  margin: 0;
  list-style: none;
}

.slide-fade-leave-active, .slide-fade-enter-active {
  transition: opacity .5s;;
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