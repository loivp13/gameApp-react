import { Types } from "../actions/Types";

export default (state = { currentPage: "Browse" }, action) => {
  switch (action.type) {
    case Types.Browse:
      return { ...state, currentPage: "Browse" };
    case Types.Sell:
      return { ...state, currentPage: "Sell" };
    case Types.WishList:
      return { ...state, currentPage: "Wish List" };
    case Types.Setting:
      return { ...state, currentPage: "Setting" };
    case Types.ListedItems:
      return { ...state, currentPage: "Listed Items" };
    case Types.Cart:
      return { ...state, currentPage: "Cart" };
    default:
      return state;
  }
};
