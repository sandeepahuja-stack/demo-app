import actionTypes from "../../types/customerList.types";
import initState from "./customerList.initState.js";

const customerListReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        ...payload,
        err: null,
        isLoading: false,
      };

    case actionTypes.CUSTOMER_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case actionTypes.CUSTOMER_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        err: payload.err,
      };

    case actionTypes.CUSTOMER_LIST_EMPTY:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default customerListReducer;
