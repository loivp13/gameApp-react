import history from "../../../../history";
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

export const authObject = object => {
  return {
    type: "AuthObject",
    payload: object
  };
};
