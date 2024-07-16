export const getters = {
  cartItems: (state) => state.cartItems,
  // (state, getters, rootState, rootGetters)
  cartTotal: (_, getters, ___, rootGetters) => {
    const cartItems = getters.cartItems;
    return cartItems.reduce((sum, cartItem) => {
      const product = rootGetters.product(cartItem.productId);
      return sum + product.price;
    }, 0);
  },
};
