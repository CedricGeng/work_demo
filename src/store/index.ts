import { defineStore } from "pinia"

const useStore = defineStore("storeId", {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})

export default useStore
