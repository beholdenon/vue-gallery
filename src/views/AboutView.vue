<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { getEntry } from '../composables/getEntry.js';
const { data, error } = getEntry('1Fl4vdgAQLVaMBqyjQAuv7');

const renderHtml = (content) => {
  return documentToHtmlString(content);
}
</script>

<template>
  <main>
    <div class="images">
      <div class="inner" style="background-image: url('https://images.ctfassets.net/qothqkuoze2q/2nvj3ij3Hjl3zUXX2YEoJZ/f7e08ace71c07d37265e31fb201d7dc1/GUCCI_SUNGLASS.jpg')"></div>
        <div class="inner" style="background-image: url('http://images.ctfassets.net/qothqkuoze2q/6WOtUxurHGKkQyJmBjf8Bf/315a5bacbf117b0e77a8677dc5dde422/sneakers.png')"></div>
        <div class="inner" style="background-image: url('http://images.ctfassets.net/qothqkuoze2q/3gdZOnA1guRdyKG23tJwJY/a131e2f479441400dcf92705e531c8c7/IMG_4181.JPG');"></div>
      </div>
      <div class="padding-30">
        <div v-if="error">Oops! Error encountered: Unable to load data.</div>
        <div v-else-if="data">
          <div class="rte" v-html="renderHtml(data.fields.content)"></div>
        </div>
        <div v-else>Loading...</div>
      </div>
  </main>
</template>

<style scoped>
.images {
  display: flex;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 500px;
  overflow: hidden;
  margin-bottom: 45px;
}
.inner {
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
