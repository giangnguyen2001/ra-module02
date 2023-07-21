import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CartList from "./CartList";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TableCart() {
  return (
    <Container>
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>Your Cart</h2>
      <Link to="/product" className="float-end m-1">
        <Button variant="primary" style={{ margin: "10px 0" }}>
          Back
        </Button>
      </Link>
      <CartList />
    </Container>
  );
}

export default TableCart;
