import store from "../../store";
const appRoutes = [
  {
    path: "/",
    alias: "/home",
    component: () =>
      import(
        /*webpackChunkName: 'component-homepage' */ "@/pages/HomePage.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next("/shop");
      } else {
        next();
      }
    },
  },
];

export default appRoutes;