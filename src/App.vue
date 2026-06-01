<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Hello, Vue 3 with TypeScript!')
function onceshi() {
  message.value = 'Button clicked!'
}
</script>

<template>
  <div class="web">You did it!</div>
  <div class="web">You did it!</div>
  <div class="web">{{ message }}</div>
  <button @click="onceshi">{{ message }}</button>
</template>

<style scoped>
.web {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  color: red;
  text-align: center;
  font-size: 24px;
}
</style>
