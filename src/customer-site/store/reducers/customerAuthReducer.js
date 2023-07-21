import { createReducer } from "@reduxjs/toolkit";

const customerAuthReducer = createReducer(
  {
    isLogin: false,
    customerLogin: null,
    listCustomer: [],
  },
  {
    CUSTOMER_REGISTER: (state, action) => {
      window.localStorage.removeItem("customerLogout");
      return {
        ...state,
        listCustomer: [...state.listCustomer, action.payload],
        isLogin: false,
      };
    },
    CUSTOMER_LOGIN: (state, action) => {
      window.localStorage.removeItem("customerLogout");
      return {
        ...state,
        customerLogin: action.payload,
        isLogin: false,
      };
    },
    CUSTOMER_LOGOUT: (state, action) => {
      window.localStorage.removeItem("customerLogout");
      return {
        ...state,
        userLogin: null,
        isLogin: false,
      };
    },
  }
);

export default customerAuthReducer;
