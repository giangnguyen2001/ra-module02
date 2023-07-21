import { createReducer } from "@reduxjs/toolkit";

const defaultAdmin = {
  email: "admin@mail.com",
  psw: btoa("admin"),
  role: "admin",
};

const adminAuthReducer = createReducer(
  { isLogin: false, adLogin: null },
  {
    ADMIN_LOGIN: (state, action) => {
      const users = window.localStorage.getItem("users") || [defaultAdmin];
      const input = action.payload;

      let isLogin = false;
      let adLogin = null;

      for (const user of users) {
        if (user.email === input.email) {
          if (user.role === "admin" && atob(user.psw) === input.psw) {
            window.localStorage.setItem("adminLogin", JSON.stringify(user));
            adLogin = { ...user };
            isLogin = true;
          }
          break;
        }
      }

      return {
        ...state,
        isLogin: isLogin,
        adLogin: adLogin,
      };
    },
    ADMIN_LOGOUT: (state, action) => {
      window.localStorage.removeItem("adminLogin");
      return {
        ...state,
        adLogin: null,
        isLogin: false,
      };
    },
  }
);

export default adminAuthReducer;
