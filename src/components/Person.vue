<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let onClicks = (e: Event) => {
  console.log(e)
}
</script>
<template>
  <button @click="onClicks">Click me</button>
</template>

<style scoped></style>
