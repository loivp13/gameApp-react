import { Types } from "./Types";
import axios from "axios";
import API_KEY from "../../apiKeys/apiKeys";

export const selectShowPage = page => {
  return {
    type: page
  };
};

export const searchTerm = term => async dispatch => {
  console.log(term);
  let response = await axios({
    url: process.env.API_URL === "dev" ? "/games" : "https://api-v3.igdb.com",
    method: "POST",
    headers: {
      ["user-key"]: API_KEY.igdb
    },
    data: `search "${term}"; limit 50; fields name, genres.name, platforms.abbreviation, popularity, rating, rating_count, cover.url, similar_games.name ;`
  });
  dispatch({
    type: Types.SearchTerm,
    payload: response.data
  });
};

export const signIn = userId => async (dispatch, getState) => {
  axios.post("/");
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
export const signInLocal = (formValue, history, toggleModal) => async (
  dispatch,
  getState
) => {
  axios.post("authLocal/signin", formValue).then(res => {
    if (res.status !== 200) {
      return;
    } else if (res.data.error) {
      dispatch({ type: Types.TiggerErrorMessage, payload: res.data.error });
      toggleModal();
    } else {
      dispatch({ type: Types.SignInLocal, payload: res.data });
      dispatch({ type: Types.TiggerErrorMessage, payload: {} });
      toggleModal();
      history.push("/userAccount");
    }
  });
};
export const signUpLocal = (formValue, history) => async (
  dispatch,
  getState
) => {
  await axios.post("/authLocal/signup", formValue).then(res => {
    console.log(res.data);
    if (res.status !== 200) {
      return;
    } else if (res.data.error) {
      dispatch({ type: Types.TiggerErrorMessage, payload: res.data.error });
    } else {
      dispatch({ type: Types.SignInLocal, payload: req.data });
      dispatch({ type: Types.TiggerErrorMessage, payload: {} });
      history.push("./userAccount");
    }
  });
};

export const signOutLocal = () => {
  return {
    type: Types.SignOutLocal
  };
};

export const ResolveErrorMessage = () => {
  return { type: Types.TiggerErrorMessage, payload: {} };
};

export const addToCart = data => {
  console.log(data);
  return {
    type: Types.AddToCart,
    payload: data
  };
};
export const removeFromCart = (data, index) => {
  return {
    type: Types.RemoveFromCart,
    payload: { data, index }
  };
};
export const removeAllFromCart = data => {
  return {
    type: Types.RemoveAllFromCart
  };
};
export const increaseItemQuantity = data => {
  return {
    type: Types.IncreaseItemQuantity,
    payload: data
  };
};
export const decreaseItemQuantity = data => {
  return {
    type: Types.DEcreaseItemQuantity,
    payload: data
  };
};
