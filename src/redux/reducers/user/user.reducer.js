import actionTypes from "../../types/user.types";
import initState from "./user.initState.js";

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        ...payload,
        err: null,
        isLoading: false,
      };

    case actionTypes.USER_LOGGED_OUT:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default userReducer;
