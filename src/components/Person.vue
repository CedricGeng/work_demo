<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
let person = reactive({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  residence: {
    city: "New York",
    country: "USA"
  }
})
onMounted(() => {
  console.log("person:", person)
  console.log("Person component mounted")
})
</script>
<template>
  <h2>Person Information</h2>
  <p>Name: {{ person.name }}</p>
  <p>Age: {{ person.age }}</p>
  <p>Email: {{ person.email }}</p>
  <p>City: {{ person.residence.city }}</p>
  <p>Country: {{ person.residence.country }}</p>
  <input v-model="person.residence.city" placeholder="Enter city" />
</template>

<style scoped></style>
