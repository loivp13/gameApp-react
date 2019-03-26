import { Types } from "../actions/Types";

export default (state = [], action) => {
  if (action.type === Types.test) {
    return { ...state, test: action.payload };
  }
  return state;
};
