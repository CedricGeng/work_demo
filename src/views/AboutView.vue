<template>
  <h1>{{ doubleCount }}</h1>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue"
import useStore from "@/store/index"
import { storeToRefs } from "pinia"
const { doubleCount } = storeToRefs(useStore())
</script>

<style scoped></style>
