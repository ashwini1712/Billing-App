import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import customersReducers from "../Reducers/customerReducer";
import productsReducer from "../Reducers/productsReducer";
import userLogReducer from "../Reducers/userLogReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      customers: customersReducers,
      products: productsReducer,
      logStatus: userLogReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
