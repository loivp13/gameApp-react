import { Types } from "../actions/types";
import { log } from "util";

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Types.SignIn:
      return { ...state, isSignedIn: true, userId: action.payload };
    case Types.SignOut:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
