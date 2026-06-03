import { createMemoryHistory, createRouter } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"

const routes = [
  { name: "home", path: "/", component: HomeView },
  {
    name: "about",
    path: "/about",
    component: AboutView,
    children: [
      {
        name: "about-a",
        path: "a",
        component: () => import("@/views/AboutViewA.vue"),
      },
      {
        name: "about-b",
        path: "b",
        component: () => import("@/views/AboutViewB.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
