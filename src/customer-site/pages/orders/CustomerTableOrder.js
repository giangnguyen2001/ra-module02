import OrderList from "./OrderList";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function CustomerTableOrder() {
  return (
    <Container style={{ margin: "10px 0" }}>
      <OrderList />
      <Link to="/">
        <Button variant="primary" style={{ margin: "0 10px 0 0" }}>
          Back
        </Button>
      </Link>
    </Container>
  );
}

export default CustomerTableOrder;
