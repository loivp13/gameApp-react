import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import showPageReducer from "./showPageReducer";
import searchTermReducer from "./searchTermReducer";
import authReducer from "./authReducer";
import purgeReducer from "./purgeReducer";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer,
  apiSearchResponse: searchTermReducer,
  auth: authReducer,
  purge: purgeReducer
});
