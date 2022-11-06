import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../rootReducer";
// devtools for debugging in dev environment.
const devTools =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancer = compose;

  const enhancers = composeEnhancer(applyMiddleware(...middlewares), devTools);
  const store = createStore(rootReducer(), enhancers);
  return store;
};
const store = configureStore();
export default store;
