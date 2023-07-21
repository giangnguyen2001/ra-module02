import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import CustomerFooterComponent from "../components/partials/CustomerFooterComponent";
import CustomerHeaderComponent from "../components/partials/CustomerHeaderComponent";

function CustomerLayout() {
  return (
    <Container>
      <CustomerHeaderComponent></CustomerHeaderComponent>
      <Outlet />
      <CustomerFooterComponent></CustomerFooterComponent>
    </Container>
  );
}

export default CustomerLayout;
