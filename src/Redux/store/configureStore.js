import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import billsReducers from "../Reducers/billsReducer";
import cartReducer from "../Reducers/cartReducer";
import customersReducers from "../Reducers/customerReducer";
import productsReducer from "../Reducers/productsReducer";
import userLogReducer from "../Reducers/userLogReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      bills: billsReducers,
      customers: customersReducers,
      products: productsReducer,
      logStatus: userLogReducer,
      cart: cartReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
