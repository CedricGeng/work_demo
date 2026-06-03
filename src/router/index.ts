import { createMemoryHistory, createRouter } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"

const routes = [
  { name: "home", path: "/", component: HomeView },
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
