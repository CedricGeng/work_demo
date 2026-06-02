<template>
  <el-table :data="props.dataList" class="person">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
  </el-table>
  <el-button type="primary" @click="handleClick">Click Me</el-button>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch, useTemplateRef } from "vue"

const props = defineProps(["name", "dataList"])

onMounted(() => {
  console.log(props.dataList)
})

const handleClick = () => {
  props.dataList[0].name = "Updated Name"
}
</script>

<style scoped>
.person {
  background-color: #e0e0e0;
}
</style>
