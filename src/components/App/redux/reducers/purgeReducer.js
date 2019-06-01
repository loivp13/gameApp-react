import { Types } from "../../redux/actions/Types";
import { PURGE } from "redux-persist";

export default (state = {}, action) => {
  switch (action.type) {
    case PURGE:
      return { ...state };
    default:
      return state;
  }
};
