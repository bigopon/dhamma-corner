<template>
  <iframe
    :width="width"
    :height="height"
    :src="processedSrc"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="max-width: 100%"
  />
</template>

<script setup>
const { src, title, width, height } = defineProps({
  src: String,
  title: String,
  width: String,
  height: String,
})

// https://youtu.be/gHM5wYdjtMA
const processedSrc = src.replace(/^.*\/(.*)$/, 'https://youtube.com/embed/$1');
</script>
