<script setup lang="ts">
import { ref} from 'vue';
import { useRouter, RouterView } from 'vue-router';
import IconHamburger from './components/icons/IconHamburger.vue'
import { openNav } from './composables/navControls.js'
const router = useRouter()
const sidebar = ref(false);

router.beforeEach((to, from, next) => {
 if(to.name === 'home') {
  sidebar.value = false;
 }
 else {
  sidebar.value = true;
 }
  next()
})
</script>

<template>
  <div id="main">
    <div class="nav-hamburger" @click="openNav">
      <IconHamburger />
    </div>
    
    <router-view class="view left-sidebar" :class="sidebar ? '' : 'hide'" name="LeftSidebar" />
    <router-view v-slot="{ Component }">
      <component :is="Component" class="view main-content" :class="sidebar ? '' : 'full-width'" />
    </router-view>
  </div>
</template>

