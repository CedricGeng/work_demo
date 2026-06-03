<template>
  <div class="home">
    <h1>{{ storeId.count }}</h1>
    <el-button type="primary" @click="storeId.count++">+</el-button>
    <el-button type="primary" @click="storeId.count--">-</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
import useStore from "@/store/index"
const storeId = useStore()
</script>

<style scoped></style>
