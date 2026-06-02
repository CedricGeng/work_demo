<template>
  <input v-model="name" />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"

let name = ref("Jack")
watch(
  name,
  (newValue, oldValue) => {
    console.log(`Name changed from ${oldValue} to ${newValue}`)
  },
  { immediate: true },
)
</script>

<style scoped></style>
