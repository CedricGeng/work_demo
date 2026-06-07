<template>
  <!-- 子组件 -->
  子组件：{{ doubleCount }}
  <el-button type="primary" @click="sendMsg">点击向父组件传递数据</el-button>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
let props = defineProps({
  count: {
    type: Number,
    required: true,
  },
})
const doubleCount = computed(() => props.count * 2)

const emit = defineEmits(["getChildData"])
const sendMsg = () => {
  // 2. emit(事件名, 参数)
  emit("getChildData", doubleCount.value)
}
</script>

<style scoped></style>
