<template>
  <div class="home">
    <h1>This is a AboutA page</h1>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="age" label="Age" width="180" />
    </el-table>
    <el-button type="primary" @click="list.push({ name: 'About C', age: 22 })">
      Add About C
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
const list = route.query.list ? JSON.parse(route.query.list as string) : []
</script>

<style scoped></style>
