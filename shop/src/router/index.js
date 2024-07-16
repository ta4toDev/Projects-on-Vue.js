import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/pages/HomePage.vue";
// import ShopPage from "@/pages/ShopPage.vue";
// import ReadProductPage from "@/pages/ReadProductPage.vue";
import routes from "./routes";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import store from "../store";

const router = createRouter({
  // Optionen
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;

// www.shop.de/auth/login
// www.shop.de/index.html/#/auth/login