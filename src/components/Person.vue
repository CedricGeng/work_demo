<script setup lang="ts" name="personComponent">
import { ref } from "vue"
let username = ref("John Doe")
let age = ref(30)
</script>

<template>
  <h1 class="person-title">{{ username }}</h1>
  <input v-model="age" placeholder="Enter name" />
  <p class="person-age">{{ age }} years old</p>
  <button @click="age++">Increase Age</button>
</template>

<style scoped>
.person-title {
  color: blue;
  font-size: 24px;
}
</style>
