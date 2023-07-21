import { createAction } from "@reduxjs/toolkit";

const adminAddProd = createAction("ADMIN_ADD_PRODUCT");
const adminDeleteProduct = createAction("ADMIN_DELETE_PRODUCT");
const adminUpdateProduct = createAction("ADMIN_UPDATE_PRODUCT");
const adminSearchProd = createAction("ADMIN_SEARCH_PRODUCT");
const adminGetProduct = createAction("ADMIN_GET_PRODUCT");

export {
  adminAddProd,
  adminDeleteProduct,
  adminUpdateProduct,
  adminSearchProd,
  adminGetProduct,
};
