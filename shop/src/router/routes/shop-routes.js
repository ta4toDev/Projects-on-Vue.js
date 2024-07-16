import CreateProductPage from "@/pages/CreateProductPage.vue";

const shopRoutes = [
  {
    path: "/shop",
    component: () =>
      import(/*webpackChunkName: 'group-shop' */ "@/pages/ShopPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  // Alternative Layout-Strategie
  {
    path: "/v2/shop",
    component: () => import("@/layouts/v2/TheShopLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        component: () => import("@/pages/v2/ShopPage.vue"),
      },
/*       {
        path: "create/product",
        component: () => import("@/pages/v2/CreateProductPage.vue"),
      }, */
    ],
  },
  {
    path: "/shop/create/product",
    component: CreateProductPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shop/read/product/:id",
    name: "ReadProduct",
    component: () =>
      import(/*webpackChunkName: 'group-shop' */ "@/pages/ReadProductPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      enterTransition: "rubberBand",
    },
  },
];

export default shopRoutes;