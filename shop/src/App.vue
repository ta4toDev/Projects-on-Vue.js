<template>
<!--   <router-view v-slot="{ Component }">
    <transition
      :enter-active-class="`animate__animated animate__${$route.meta.enterTransition}`"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view> -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  created() {
    this.$store.dispatch("autoSignin");
    console.log(this.$store);
  },
  watch: {
    token: {
      handler() {
        if (this.token) {
          this.$store.dispatch("fetchProducts");
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.bg-vue {
  background-color: rgb(52, 73, 94);
  color: white;
}
.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: white;
}
.text-vue {
  color: rgb(52, 73, 94);
}
.text-vue2 {
  color: rgb(65, 184, 131);
}
</style>