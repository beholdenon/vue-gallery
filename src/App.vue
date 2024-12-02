<script setup>
import { ref, provide } from 'vue'
import { useRouter, RouterView } from 'vue-router'
import IconHamburger from './components/icons/IconHamburger.vue'
import { openNav, closeNav } from './composables/navControls.js'
const router = useRouter()
const sidebar = ref(false)
import LoaderView from './components/LoaderView.vue'

import { createClient } from './composables/createClient.js'
const { client } = createClient()
const error = ref(null)
const data = ref(null)

setTimeout(function () {
  client
    .getEntries({ content_type: 'gallery' })
    .then((response) => (data.value = response.items))
    .catch((err) => (error.value = err))
}, 0)

provide('gallery', { data, error })

router.beforeEach((to, from, next) => {
  closeNav()
  if (to.name === 'home') {
    sidebar.value = false
  } else {
    sidebar.value = true
  }
  next()
})
</script>

<template>
  <div v-if="error">Oops! Error encountered: Unable to load data.</div>
  <div v-else-if="data"></div>
  <div v-else><LoaderView /></div>

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
