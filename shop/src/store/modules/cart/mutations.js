import * as types from "./mutation-types";
export const mutations = {
  [types.ADD_CART_ITEM](state, payload) {
    state.cartItems.push(payload);
  },
};
