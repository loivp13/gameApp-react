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
