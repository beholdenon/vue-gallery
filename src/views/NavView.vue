<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
const { data: galleryAllData } = inject('gallery')
import { closeNav } from '../composables/navControls.js'
import LoaderView from '../components/LoaderView.vue'

import IconClose from '../components/icons/IconClose.vue'
import logoImage from '../assets/logo.jpg'
</script>

<template>
  <div v-if="error">Oops! Error encountered: Unable to load data.</div>
  <div v-else-if="galleryAllData">
    <div class="outer">
      <div class="inner">
        <div id="nav-x" class="nav-close-btn" @click="closeNav">
          <IconClose />
        </div>
        <RouterLink to="/" class="logo-link">
          <img :src="logoImage" alt="Whitney Alexandra" class="logo" />
        </RouterLink>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink
            v-for="(gallery, index) in galleryAllData"
            :to="'/work/' + gallery.fields.slug"
            :key="index"
          >
            {{ gallery.fields.navTitle }}
          </RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

nav a {
  font-size: 1.2em;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  padding: 3px 0;
  text-transform: uppercase;
}

nav a.active {
  color: var(--accent-color);
}

.logo-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 80%;
  height: auto;
}
</style>
