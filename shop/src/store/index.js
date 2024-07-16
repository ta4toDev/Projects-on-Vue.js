import { createStore } from "vuex";

import authModule from "./modules/auth";
import shopModule from "./modules/shop";
import cartModule from "./modules/cart";

const store = createStore({
  modules: {
    auth: authModule,
    shop: shopModule,
    cart: cartModule,
  },
});

export default store;