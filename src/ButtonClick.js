export const updateUser = (userId) => {
  return async (dispatch, getState) => {
    console.log(
      "update User Check",
      getState()
    );
    dispatch({ type: "UPDATE_USER", payload: userId });
  };
};

export const addColor = (userId) => {
  return async (dispatch, getState) => {
    console.log("addColor checking", getState());
    dispatch({ type: "FAVORITE_USER", payload: userId });
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: "DELETE_USER", payload: userId });
  };
};
