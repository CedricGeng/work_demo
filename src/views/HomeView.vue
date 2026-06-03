<template>
  <!-- 父组件 -->
  <div class="home">
    <h1>{{ count }}</h1>
    <el-button type="primary" @click="count++">+</el-button>
    <el-button type="primary" @click="count--">-</el-button>
    <Person :count="count" @getChildData="handleChildData" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
import Person from "@/components/Person.vue"
import useStore from "@/store/index"
import { storeToRefs } from "pinia"
const { count } = storeToRefs(useStore())
const handleChildData = (data: { name: string; age: number }) => {
  // console.log("父组件接收到的数据:", data)
  alert(`父组件接收到的数据: ${JSON.stringify(data)}`)
}
</script>

<style scoped></style>
