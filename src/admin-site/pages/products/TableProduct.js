import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProductList from "./ProductList";
import { adminSearchProd } from "../../store/actions/adminProductActs";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TableProduct() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Container>
        <div>
          <Link to="/admin/product/add">
            <Button variant="success" style={{ margin: "10px 10px" }}>
              Add
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="primary" style={{ margin: "0 10px 0 0" }}>
              Back
            </Button>
          </Link>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Find accessory..."
              aria-label="Search"
              style={{ borderRadius: "10px" }}
              onChange={(e) => setSearchValue(e.target.value.toString())}
            />
            <Button
              color="primary"
              style={{ borderRadius: "10px", margin: "0 10px" }}
            >
              Search
            </Button>
          </form>
        </div>
      </Container>

      <Container style={{ margin: "20px 0 0 0" }}>
        <ProductList />

        {/* <Link to="/admin/product/edit/:id">
          <Button variant="success">Edit</Button>
        </Link> */}
      </Container>
    </div>
  );
}

export default TableProduct;
