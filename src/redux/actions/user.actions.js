import actionTypes from "../types/user.types";

export const userLoggedOut = () => ({
  type: actionTypes.USER_LOGGED_OUT,
});

export const userLoggedIn = (payload) => ({
  type: actionTypes.USER_LOGGED_IN,
  payload: payload,
});
