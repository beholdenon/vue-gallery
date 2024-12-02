<script setup lang="ts">
import { inject, ref } from 'vue';

import imgUrl from '../assets/white-logo.png';
import router from '../router'
import Slideshow from '../components/Slideshow.vue';
import { getEntry } from '../composables/getEntry.js';
let { data , error } = getEntry('48eVyUhkv74oHnUGladtsm');

const { data: galleryAllData, data: galleryData, error: galleryError } = inject('gallery');

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
        <button class="button large outline hollow" @click="goToWork">
        View Work
        </button>
      </div>
      <div class="overlay"></div>
      <Slideshow :data="data.fields.photos" @click="goToWork" />
    </div>
    <div v-else>Loading...</div>
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
  opacity: .3;
}
</style>
