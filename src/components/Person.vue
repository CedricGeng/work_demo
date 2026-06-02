<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let show = ref("a")
</script>

<template>
  <div v-if="show == 'c'">测试Vue的v-if1</div>
  <div v-else-if="show == 'a'">测试Vue的v-if2</div>
  <div v-else="show == 'v'">测试Vue的v-if3</div>
</template>

<style scoped></style>
