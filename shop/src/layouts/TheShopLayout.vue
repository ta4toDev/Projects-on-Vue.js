<template>
  <div>
    <TheNavbar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
              mode="out-in"
              appear
              :key="$route.path"
              ><slot v-if="true"><h1>Hauptbereich</h1></slot></transition
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "TheShopLayout",
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
</style>