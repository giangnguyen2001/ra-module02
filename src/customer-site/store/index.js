import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import customerAuthReducer from "./reducers/customerAuthReducer";
import customerProductReducer from "./reducers/customerProductReducer";
import customerCartReducer from "./reducers/customerCartReducer";

const reducer = combineReducers({
  customerAuthReducer: customerAuthReducer,
  customerProductReducer: customerProductReducer,
  customerCartReducer: customerCartReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
