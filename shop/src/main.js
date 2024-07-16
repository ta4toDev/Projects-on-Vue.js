import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";


if (!window.ResizeObserver) {
    window.ResizeObserver = require('resize-observer-polyfill').default;
  }

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
