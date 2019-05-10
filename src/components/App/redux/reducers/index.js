import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import showPageReducer from "./showPageReducer";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer
});
