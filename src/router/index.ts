import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import LogIn from "../pages/LogIn.vue";
import Shop from "../pages/Shop.vue";
import { useUserStore } from "../stores/userStore";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: LogIn },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/shop", component: Shop, meta: { requireAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useUserStore();
  const token = store.user?.token;
  if (to.meta.requireAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
