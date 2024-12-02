<script setup lang="ts">
import { inject, ref, reactive, computed, watch, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

import Gallery from '../components/Gallery.vue';

const { data: galleryAllData, data: galleryData, error: galleryError } = inject('gallery');


</script>

<template>
  <main>
    <div v-if="galleryAllData">
    <Gallery />
    </div>
  </main>
</template>

<style scoped>
</style>