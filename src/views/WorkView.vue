<script setup>
import { inject } from 'vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import LoaderView from '../components/LoaderView.vue'
const { data: galleryAllData } = inject('gallery')
</script>

<template>
  <main>
    <div v-if="error">Oops! Error encountered: Unable to load data.</div>
    <div v-else-if="galleryAllData">
      <PhotoGallery />
    </div>
    <div v-else><LoaderView /></div>
  </main>
</template>
