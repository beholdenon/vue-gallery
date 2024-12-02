<script setup>
import { inject } from 'vue'
import PhotoGallery from '../components/PhotoGallery.vue'
const { data: galleryAllData } = inject('gallery')
</script>

<template>
  <main>
    <div v-if="galleryAllData">
      <PhotoGallery />
    </div>
  </main>
</template>
