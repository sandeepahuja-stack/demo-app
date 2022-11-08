import { combineReducers } from "redux";

import customerListReducer from "./reducers/customerList/customerList.reducer";
import userReducer from "./reducers/user/user.reducer";

const rootReducer = () => {
  return combineReducers({
    customerList: customerListReducer,
    user: userReducer,
  });
};
export default rootReducer;
