import axios from "axios";

const state = {
  products: [],
};
const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  addProduct(state, payload) {
    state.products.push(payload);
  },
};
const actions = {
  fetchProducts(context) {
    const token = context.rootState.auth.token;
    axios
      .get(
        `https://vue-3-shop-backend-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`
      )
      .then((response) => {
        const productsDO = [];
        for (const id in response.data) {
          productsDO.push({
            id: id,
            ...response.data[id],
          });
        }
        context.commit("setProducts", productsDO);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  storeProduct(context, payload) {
    const productItem = {
      title: payload.title,
      description: payload.description,
      price: payload.price,
    };
    const token = context.rootState.auth.token;
    axios
      .post(
        `https://vue-3-shop-backend-default-rtdb.europe-west1.firebasedatabase.app/products.json?auth=${token}`,
        productItem
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
const getters = {
  products: (state) => state.products,
  product: (state) => (id) =>
    state.products.find((product) => product.id === id),
};

const shopModule = {
  state,
  mutations,
  actions,
  getters,
};

export default shopModule;
