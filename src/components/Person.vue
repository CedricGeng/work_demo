<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let List = ref([
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 20,
  },
  {
    name: "王五",
    age: 22,
  },
])
</script>
<template>
  <div>
    <h1>人员列表</h1>
    <ul>
      <li v-for="(item, index) in List" :key="index">
        {{ item.name }} - {{ item.age }}岁
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
