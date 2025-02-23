import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants";

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        return state.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, action.payload];
      }

    case REMOVE_FROM_CART:
      return state
        .map((item) =>
          item.product.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cartItems;
