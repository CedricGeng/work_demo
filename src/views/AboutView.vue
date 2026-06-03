<template>
  <div class="about">
    <el-container>
      <el-header>
        <RouterLink :to="`/about/a?list=${JSON.stringify(list)}`"
          >Go to About A</RouterLink
        >
        <RouterLink to="/about/b">Go to About B</RouterLink>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
const list = reactive([
  {
    name: "About A",
    age: 18,
  },
  {
    name: "About B",
    age: 20,
  },
])
</script>

<style scoped></style>
