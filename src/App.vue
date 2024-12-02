<script setup lang="ts">
import { ref} from 'vue';
import { useRouter, RouterView } from 'vue-router';

const router = useRouter()
const sidebar = ref(false);


const openNav = () => {
  document.body.classList.add("nav-active");
}

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
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
</svg>
</div>

  <router-view class="view left-sidebar" :class="sidebar ? '' : 'hide'" name="LeftSidebar" />
  <router-view v-slot="{ Component }">
        <component 
          :is="Component" 
          class="view main-content" 
          :class="sidebar ? '' : 'full-width'" />
  </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  position:relative;
}
</style>