import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;