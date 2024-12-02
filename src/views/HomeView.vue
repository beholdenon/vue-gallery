<script setup>
import { inject } from 'vue'
import router from '../router'
import PhotoSlideshow from '../components/PhotoSlideshow.vue'
import { getEntry } from '../composables/getEntry.js'
import LoaderView from '../components/LoaderView.vue'
const { data, error } = getEntry('48eVyUhkv74oHnUGladtsm')
const { data: galleryAllData } = inject('gallery')

import imgUrl from '../assets/white-logo.png'

const goToWork = () => {
  router.push({ path: '/work/' + galleryAllData.value[0].fields.slug })
}
</script>

<template>
  <main>
    <div v-if="error">Oops! Error encountered: Unable to load data.</div>
    <div v-else-if="data">
      <div class="content absolute-center">
        <img :src="imgUrl" alt="Whitney Alexandra" class="logo" />
        <button class="button large outline hollow" @click="goToWork">View Work</button>
      </div>
      <div class="overlay"></div>
      <PhotoSlideshow :data="data.fields.photos" @click="goToWork" />
    </div>
    <div v-else><LoaderView /></div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 500px;
}

.logo {
  width: 100%;
  height: auto;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  background: #000;
  opacity: 0.3;
}
</style>
