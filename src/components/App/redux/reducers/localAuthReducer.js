import { Types } from "../actions/Types";

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
    case Types.GuestSignin:
      return { ...state, isSignedInLocal: true, userIdLocal: "Guest 1" };
    default:
      return state;
  }
};
