<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <Person ref="personRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
import Person from "@/components/Person.vue"
let personRef = ref()
onMounted(() => {
  console.log("personRef", personRef.value)
})
</script>

<style scoped></style>
