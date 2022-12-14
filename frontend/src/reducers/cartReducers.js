import {
  CART_REMOVE_ITEM,
  CART_ADD_ITEM,
  CartConstants,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CartConstants.Shipping.Address.SAVE:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CartConstants.Payment.Method.SAVE:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
