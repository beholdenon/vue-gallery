<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import PhotoGalleryItem from '../components/PhotoGalleryItem.vue';

const route = useRoute();
const data = ref(null);
const error = ref(null);

const { data: galleryAllData } = inject('gallery');


//data.value = getEntry(getGalleryId());
const filterKey = ref([]);

function fetchData() {
  data.value = galleryAllData.value.find(({fields}) => {
    return fields.slug === route.params.slug;
  });
}

watch(() => route.params.slug, fetchData)

watch( data, () => {
    document.title = data.value.fields.navTitle + ' - Whitney Alexandra';
  }
)

const triggerAnimation = () => {
  const items = document.querySelectorAll('.gallery li');
  items.forEach((item, index) => {
    item.classList.remove('show');
    item.style.setProperty('animation-delay', (index *.06) +'s');
    setTimeout(() => {
      item.classList.add('show');
    }, 250);
  })
}

const uniqueTags = computed(() => {
  let uData = [];
  data.value.fields.items.forEach(item => {
    if(item.fields.tags) {
      uData = uData.concat(item.fields.tags);
    }
  })
  return [...new Set(uData)];
})

const filteredData = computed(() => {
 let fData = data.value.fields.items;
 if(filterKey.value.length) {
    fData = fData.filter(item => {
    if(item.fields.tags) {
      return filterKey.value.every(tag => item.fields.tags.includes(tag))
    }
    return false;
   })
  }
 return fData;
})

const filterGrid = (tag) => {
  if(filterKey.value.includes(tag)) {
    const index = filterKey.value.indexOf(tag);
    filterKey.value.splice(index, 1);
  }
  else {
    filterKey.value.push(tag);
  }
}

const getClass = (tag) => {
  const classes = ['filterBtn'];
  if(filterKey.value.includes(tag)) {
   classes.push('active');
  }
  return classes;
}

onMounted(() => {
  fetchData();
  triggerAnimation();
});

onUpdated(() => {
  triggerAnimation();
});


</script>
<template>
<div v-if="error">Oops! Error encountered: Unable to load data.</div>
  <div v-else-if="data">
    <button v-show="false" v-for="(tag, index) in uniqueTags" :key="index" @click="filterGrid(tag)" :class="getClass(tag)" >{{tag}}</button>
    <ul class="gallery">
      <PhotoGalleryItem 
        v-for="(item, index) in filteredData"
        :item="item"
        :index="index"
        :key="item.sys.id"
      />
    </ul>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.gallery {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
}

.gallery.show {
  opacity: 1;
   animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-fill-mode: backwards;
}

.filterBtn {
  background: #efefef;
  font-size: .7em;
  padding: 6px 12px;
  border: 0;
  margin: 20px 5px 20px 0;
  text-transform: uppercase;
  font-weight: bold;
}

.filterBtn.active {
  background: #000;
  color: #fff;
}

.filterByTitle {
  font-size: .8em;
  display: inline;
  font-weight: bold;
  text-transform: uppercase;
}


@media screen and (min-width: 40em) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 64em) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

</style>