import { createAction } from "@reduxjs/toolkit";
import adminAuthReducer from "../reducers/adminAuthReducer";

const adminLogout=createAction('ADMIN_LOGOUT');
const adminLogin=createAction('ADMIN_LOGIN');

export {adminLogin, adminLogout}
