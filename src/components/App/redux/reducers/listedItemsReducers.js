import { Types } from "../actions/Types";

export default (state = [], action) => {
  switch (action.type) {
    case Types.AddtoListed:
      action.payload.data.sellingPrice = action.payload.price;
      return [...state, action.payload.data];
    case Types.RemoveFromListed:
      return state.filter((item, index) => {
        return index !== action.payload.index;
      });
    default:
      return state;
  }
};
