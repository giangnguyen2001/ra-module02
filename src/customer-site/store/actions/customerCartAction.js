import { createAction } from "@reduxjs/toolkit";

const customerAddProduct = createAction("CUSTOMER_ADD_PRODUCT");
const customerDeleteProduct = createAction("CUSTOMER_DELETE_PRODUCT");
const customerChangeQuantity = createAction("CUSTOMER_CHANGE_QUANTITY");
const customerCheckOrder = createAction("CUSTOMER_CHECK_ORDER");
const customerDeleteOrder = createAction("CUSTOMER_DELETE_ORDER");

export {
  customerAddProduct,
  customerDeleteProduct,
  customerChangeQuantity,
  customerCheckOrder,
  customerDeleteOrder,
};
