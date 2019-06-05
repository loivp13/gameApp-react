import { Types } from "../actions/Types";

export default (state, action) => {
  switch (action.type) {
    case Types.SignInLocal:
      return state;
    default:
      return state;
  }
};
