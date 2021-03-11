import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";

// this combines all the reducers
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// this helps to make asynchronous calls with redux
const middleware = [thunk];

const store = createStore(
  reducer,
  //enhancer
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
