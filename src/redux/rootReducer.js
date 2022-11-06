import { combineReducers } from "redux";

import customerListReducer from "./reducers/customerList/customerList.reducer";

const rootReducer = () => {
  return combineReducers({
    customerList: customerListReducer,
  });
};
export default rootReducer;
