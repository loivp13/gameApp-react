import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import showPageReducer from "./showPageReducer";
import searchTermReducer from "./searchTermReducer";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer,
  apiSearchResponse: searchTermReducer
});
