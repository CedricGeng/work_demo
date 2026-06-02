<template>
  <div>
    <h2 ref="personTitle">子组件</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch, useTemplateRef } from "vue"
let personTitle = useTemplateRef("personTitle")
onMounted(() => {
  console.log("personTitle", personTitle.value)
})
</script>

<style scoped></style>
