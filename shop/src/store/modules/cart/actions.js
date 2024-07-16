// context = { commit, dispatch, state, rootState, getters, rootGetters }
export const actions = {
  addItemToCart({ commit }, payload) {
    commit("addCartItem", {
      productId: payload.productId,
    });
  },
};
