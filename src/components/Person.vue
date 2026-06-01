<script setup lang="ts">
 import { ref } from 'vue'
 let message = ref('Hello, Vue 3 with TypeScript!')
</script>

<template>
  <h1 class="person-title">{{message}}</h1>
</template>

<style scoped>
.person-title {
  color: blue;
  font-size: 24px;
}
</style>
