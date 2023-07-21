import { createAction } from "@reduxjs/toolkit";
import customerAuthReducer from "../reducers/customerAuthReducer";

const customerLogout = createAction("CUSTOMER_LOGOUT");
const customerLogin = createAction("CUSTOMER_LOGIN");
const customerRegister = createAction("CUSTOMER_REGISTER");

export { customerLogin, customerRegister, customerLogout };
