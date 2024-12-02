<script setup>
import { marked } from 'marked'

defineProps({
  item: Object,
  index: Number,
})

const mouseOver = (event) => {
  event.currentTarget.classList.add('active')
}

const mouseOut = (event) => {
  event.currentTarget.classList.remove('active')
}

const processMarkdown = (text) => {
  return marked(text)
}
</script>

<template>
  <li :key="index" @mouseover="mouseOver" @mouseout="mouseOut" class="gallery-item">
    <div class="gallery-item-top">
      <div
        class="gallery-image-bg"
        :style="{ '--bkgImage': 'url(' + item.fields.photo.fields.file.url + ')' }"
      ></div>
      <img
        :src="item.fields.photo.fields.file.url"
        :alt="item.fields.photo.fields.description"
        class="gallery-item-photo"
      />
    </div>
    <div class="gallery-item-bottom">
      <h3 v-if="item.fields.client" v-html="item.fields.client"></h3>
      <h2>{{ item.fields.title }}</h2>
      <p v-if="item.fields.description" v-html="processMarkdown(item.fields.description)"></p>
      <ul class="tags-list" v-if="item.fields.tags">
        <li v-for="(tag, index) in item.fields.tags" :key="index">
          {{ tag }}
        </li>
      </ul>
    </div>
  </li>
</template>

<style scoped>
.gallery-item {
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
  opacity: 0;
}

.gallery-item.show {
  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: backwards;
  overflow: hidden;
}
.gallery-item-top {
  padding: 0;
  margin: 0;
  display: flex;
}

.gallery-image-bg {
  background: var(--bkgImage);
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease-in-out;
  position: absolute;
  width: 101%;
  height: 101%;
  aspect-ratio: 4/5;
  overflow: hidden;
}

.gallery-item-bottom {
  background: rgba(255, 255, 255, 1);
  padding: 30px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  transform: translateY(120%);
  animation: fadeOut 0.3s linear 1s;
  animation-fill-mode: both;
  transition: transform 0.75s cubic-bezier(0.83, 0, 0.17, 1);
}

.gallery-item-photo {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  opacity: 0;
}

.tags-list {
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  display: flex;
}

.tags-list li {
  background: #efefef;
  font-size: 9px;
  padding: 3px 8px;
  margin-right: 5px;
}

p {
  font-size: 0.85em;
}

h3 {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #666;
}

li.active .gallery-item-bottom {
  transform: translateY(0);
  opacity: 1;
  animation: fadeIn 0s linear;
}

li.active .gallery-image-bg {
  transform: scale(1.1);
  filter: brightness(80%);
}
</style>
