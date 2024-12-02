<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink } from 'vue-router';
const { data: galleryAllData } = inject('gallery');

import IconClose from '../components/icons/IconClose.vue';
import logoImage from '../assets/logo.jpg';

const closeNav = () => {
  document.body.classList.remove("nav-active");
}
</script>

<template>
  <div class="outer">
    <div class="inner">
      <div id="nav-x" class="nav-close-btn" @click="closeNav">
        <IconClose />
      </div>
      <img :src="logoImage" alt="Whitney Alexandra" class="logo" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink 
          v-for="(gallery, index) in galleryAllData" 
          :to="'/work/' + gallery.fields.slug" :key="index">
          {{gallery.fields.navTitle}}
        </RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="bottom"></div>
    </div>
  </div>
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
  font-size: 22px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 0;
  text-transform: uppercase;
}

nav a.active {
  color: var(--accent-color);
}

.logo {
  width: 80%;
  height: auto;
}
</style>