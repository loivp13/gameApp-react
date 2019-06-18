import { Types } from "../actions/types";

const INTIAL_STATE = {
  isSignedInLocal: false,
  userIdLocal: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Types.SignInLocal:
      return { ...state, isSignedInLocal: true, userIdLocal: action.payload };
    case Types.SignOutLocal:
      return { ...state, isSignedInLocal: false, userIdLocal: null };
    default:
      return state;
  }
};
