import { Types } from "../actions/types";

const INTIAL_STATE = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  subtotal: 0,
  quantity: 0
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Types.AddToCart:
      if (
        state.items.some(item => {
          return item.id === action.payload.id;
        })
      ) {
        return {
          ...state,
          items: [...state.items].map(item => {
            if (item.id === action.payload.id) {
              ++item.quantity;
              return item;
            } else {
              return item;
            }
          }),
          subtotal: (state.subtotal += action.payload.basePrice),
          quantity: ++state.quantity
        };
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          items: [...state.items, action.payload],
          subtotal: (state.subtotal += action.payload.basePrice),
          quantity: (state.quantity += 1)
        };
      }

    case Types.RemoveFromCart:
      if (state.items[action.payload.index].quantity === 1) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, action.payload.index),
            ...state.items.slice(action.payload.index + 1)
          ]
        };
      } else {
        return {
          ...state,
          items: [...state.items].map((item, index) => {
            if (index === action.payload.index) {
              item.quantity -= 1;
              return item;
            } else {
              return item;
            }
          })
        };
      }
    case Types.RemoveAllFromCart:
      return { ...state, isSignedInLocal: false, userIdLocal: null };
    case Types.IncreaseItemQuantity:
      return { ...state, isSignedInLocal: false, userIdLocal: null };
    case Types.DecreaseItemQuantity:
      return { ...state, isSignedInLocal: false, userIdLocal: null };
    default:
      return state;
  }
};
