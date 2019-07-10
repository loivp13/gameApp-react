import { Types } from "../actions/Types.js";
import _ from "lodash";

export default (state = [], action) => {
  switch (action.type) {
    case Types.SearchTerm:
      return action.payload;
    case Types.FilterAlphaDown:
      return [...state].sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        } else {
          return 1;
        }
      });
    case Types.FilterAlphaUp:
      return [...state].sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return 1;
        } else {
          return -1;
        }
      });
      return state;
    case Types.FilterPriceUp:
      return [...state].sort((a, b) => {
        if (a.basePrice < b.basePrice) {
          return 1;
        } else {
          return -1;
        }
      });
    case Types.FilterPriceDown:
      return [...state].sort((a, b) => {
        if (a.basePrice < b.basePrice) {
          return -1;
        } else {
          return 1;
        }
      });
    default:
      return state;
  }
};
