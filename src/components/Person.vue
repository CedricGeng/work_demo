<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"

let list = reactive([
  {
    name: "张三",
  },
])
</script>

<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column
      v-for="item in list"
      :key="item.name"
      label="姓名"
      width="180"
    />
  </el-table>
</template>

<style scoped></style>
