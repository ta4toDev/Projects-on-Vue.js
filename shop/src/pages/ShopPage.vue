<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-3 m-3" v-for="product in products" :key="product.id">
          <ProductListItem :product="product" />
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout";
import ProductListItem from "@/components/shop/ProductListItem";

export default {
  name: "ShopPage",
  components: {
    TheShopLayout,
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