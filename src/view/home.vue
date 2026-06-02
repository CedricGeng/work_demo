<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <Person name="John Doe" :dataList="dataList" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
import Person from "@/components/Person.vue"
const dataList = reactive([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
])
</script>

<style scoped>
.home {
  background-color: #f0f0f0;
}
</style>
