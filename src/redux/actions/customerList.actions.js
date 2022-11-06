import actionTypes from "../types/customerList.types";

export const customerListLoadError = (err) => ({
  type: actionTypes.CUSTOMER_LIST_FAIL,
  payload: { err },
});

export const customerListStart = () => ({
  type: actionTypes.CUSTOMER_LIST_LOADING,
});

export const customerListSuccess = (payload) => ({
  type: actionTypes.CUSTOMER_LIST_SUCCESS,
  payload,
});
