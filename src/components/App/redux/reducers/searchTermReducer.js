import { Types } from "../actions/Types.js";
import _ from "lodash";

export default (state = [], action) => {
  switch (action.type) {
    case Types.SearchTerm:
      return action.payload;
    default:
      return state;
  }
};
