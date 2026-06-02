<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let url = ref("https://picsum.photos/id/237/300/200")
</script>
<template>
  <img :src="url" alt="avatar" />
</template>

<style scoped></style>
