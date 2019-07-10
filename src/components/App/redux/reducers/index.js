import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import showPageReducer from "./showPageReducer";
import searchTermReducer from "./searchTermReducer";
import authReducer from "./authReducer";
import purgeReducer from "./purgeReducer";
import localAuthReducer from "./localAuthReducer";
import errorMessageReducer from "./errorMessageReducer";
import cartReducer from "./cartReducer";
import searchSellTitleReducer from "./searchSellTitleReducer";
import listedItemsReducers from "./listedItemsReducers";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer,
  apiSearchResponse: searchTermReducer,
  auth: authReducer,
  purge: purgeReducer,
  localAuth: localAuthReducer,
  errorMessages: errorMessageReducer,
  cart: cartReducer,
  titleSearchResponse: searchSellTitleReducer,
  listedItems: listedItemsReducers
});
