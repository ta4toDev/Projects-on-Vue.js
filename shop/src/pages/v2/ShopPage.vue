<template>
  <div class="row">
    <div class="col-3 m-3" v-for="product in products" :key="product.id">
      <ProductListItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductListItem from "@/components/shop/ProductListItem";

export default {
  name: "ShopPage",
  components: {
    ProductListItem,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
</style>