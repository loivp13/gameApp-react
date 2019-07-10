import { Types } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case Types.SearchSellTitle:
      return action.payload;
    default:
      return state;
  }
};
