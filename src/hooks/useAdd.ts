import { ref } from "vue"

export default function () {
  let count = ref(0)

  const add = () => {
    count.value++
  }

  return { count, add }
}
