import { Types } from "../actions/types";

const INTIAL_STATE = {
  messages: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Types.TiggerErrorMessage:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
