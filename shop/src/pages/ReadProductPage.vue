<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Produktdetails
            <button class="btn btn-lg bg-vue float-end" @click="$router.go(-1)">
              Zurück
            </button>
          </h1>
          <div class="card mt-4" v-if="product">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://dummyimage.com/600x400/34495e/fff"
                  class="card-img"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="card-title mb-4">{{ product.title }}</h5>
                    </div>
                    <div class="col-3">
                      <div class="d-grid">
                        <button
                          class="btn bg-vue2"
                          @click="addProduct({ productId: product.id })"
                        >
                          {{ product.price }} €
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <h4>Das könnte Sie auch interessieren...</h4>
              <router-link
                :to="{
                  name: 'ReadProduct',
                  params: { id: '-MgEuw10sUAOonJ0gazr' },
                }"
                >-MgEuw10sUAOonJ0gazr</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import { mapActions } from "vuex";
import TheShopLayout from "@/layouts/TheShopLayout";
export default {
  name: "ReadProductPage",
  components: {
    TheShopLayout,
  },
  props: {
    id: String,
  },
  /*   data() {
    return {
      id: null,
    };
  }, */
  computed: {
    product() {
      return this.$store.getters.product(this.id);
    },
  },
  /*   created() {
    this.id = this.$route.params.id;
  }, */
  /*   beforeRouteUpdate(to) {
    // console.log(to);
    // console.log(from);
    this.id = to.params.id;
  }, */
  /*   methods: {
    addItemToCart() {
      this.$store.dispatch("addItemToCart", {
        productId: this.id,
      });
    },
  }, */
  methods: {
    // ...mapActions(["addItemToCart"])
    ...mapActions({ addProduct: "addItemToCart" }),
  },
};
</script>

<style scoped>
</style>