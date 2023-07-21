import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import adminUserReducer from "./reducers/adminUserReducer";
import adminProductReducer from "./reducers/adminProductReducer";
import adminAuthReducer from "./reducers/adminAuthReducer";

const reducer = combineReducers({
  adminAuthReducer: adminAuthReducer,
  adminProductReducer: adminProductReducer,
  adminUserReducer: adminUserReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
