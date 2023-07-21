import "./AdminApp.css";

import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AdminLayout from "./layouts/AdminLayout";

import AdminNotFoundPage from "./pages/errors/AdminNotFoundPage";
import AdminLoginPage from "./pages/auth/AdminLoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminAdd from "./pages/products/AdminAdd";
import AdminEdit from "./pages/products/AdminEdit";
import TableProduct from "./pages/products/TableProduct";
import TableOrder from "./pages/orders/TableOrder";
import TableUser from "./pages/users/TableUser";

function AdminApp() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route exact path="product" element={<TableProduct />} />
          <Route path="product/add" element={<AdminAdd />} />
          <Route path="product/edit/:id" element={<AdminEdit />} />
          <Route exact path="order" element={<TableOrder />} />
          <Route exact path="user" element={<TableUser />} />
          <Route path="*" element={<AdminNotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default AdminApp;
