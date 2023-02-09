import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "../stores/user"

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore()
  const { currentUser } = userStore
  userStore.loadingSession = true
  const user = await currentUser()
  if (user) {
    next()
  } else {
    next("/login")
  }
  userStore.loadingSession = false
}

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: requireAuth,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
