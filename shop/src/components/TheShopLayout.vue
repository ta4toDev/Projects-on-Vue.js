<template>
  <div>
    <TheNavbar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <slot><h1>Hauptbereich</h1></slot>
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