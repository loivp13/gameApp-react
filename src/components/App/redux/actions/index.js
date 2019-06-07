import history from "../../../../history";
import { Types } from "./index";
import axios from "axios";

export const selectShowPage = page => {
  return {
    type: page
  };
};

export const searchTerm = (term, apiResponse) => {
  return {
    type: term,
    payload: apiResponse
  };
};

export const signIn = userId => (dispatch, getState) => {
  dispatch({
    type: "SignIn",
    payload: userId
  });
};

export const signOut = () => {
  return {
    type: "SignOut"
  };
};

export const signUpLocal = formValue => async (dispatch, getState) => {
  console.log(formValue);
  await axios.post("/authLocal", formValue).then(res => {
    console.log(res.data);
  });
};

export const signOutLocal = () => {
  return {
    type: Types.signOutLocal
  };
};
