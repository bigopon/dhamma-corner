<template>
    <img width="100%" :src="src" :alt="alt" />
</template>

<script setup>
    const { src, alt } = defineProps({
        src: String,
        alt: String,
    })
</script>