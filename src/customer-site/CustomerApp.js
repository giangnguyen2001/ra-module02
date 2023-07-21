import "./CustomerApp.css";

import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import CustomerLayout from "./layouts/CustomerLayout";

import CustomerNotFoundPage from "./pages/errors/CustomerNotFoundPage";
import CustomerRegisterPage from "./pages/auth/CustomerRegisterPage";
import CustomerLoginPage from "./pages/auth/CustomerLoginPage";
import CustomerHomePage from "./pages/CustomerHomePage";
import ProductSelect from "./pages/products/ProductSelect";
import TableCart from "./pages/cart/TableCart";
import CustomerTableOrder from "./pages/orders/CustomerTableOrder";

function CustomerApp() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/register" element={<CustomerRegisterPage />} />
        <Route path="/login" element={<CustomerLoginPage />} />
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<CustomerHomePage />} />
          <Route exact path="product" element={<ProductSelect />} />
          <Route path="product/cart" element={<TableCart />} />
          <Route path="*" element={<CustomerNotFoundPage />} />
          <Route exact path="order" element={<CustomerTableOrder />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default CustomerApp;
