<script setup lang="ts">
import { inject, ref,} from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const id = ref(route.params.id);
</script>

<template>
  <main>
    
  </main>
</template>

<style scoped>
.project-photo {
  width: 100%;
  height: auto;
}
</style>
