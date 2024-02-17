import { createRouter, createWebHistory } from "vue-router";
import IndexViewVue from "@/views/IndexView.vue";
import NumberViewVue from "@/views/NumberView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: NumberViewVue,
    },
    {
      path: "/number",
      name: "number",
      component: NumberViewVue,
    },
  ],
});

export default router;
