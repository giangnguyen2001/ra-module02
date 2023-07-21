import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CustomerProductList from "./CustomerProductList";
import { useDispatch, useSelector } from "react-redux";
import { customerSearchProduct } from "../../store/actions/customerProductAction";

function ProductSelect() {
  const numberOfItem = useSelector(
    (state) => state.customerCartReducer.numberOfItem
  );
  const name = useSelector(
    (state) => state.customerProductReducer.products
  );
  const dispatch = useDispatch();

  const handleSearch = (name) => {
    dispatch(customerSearchProduct(name));
  };

  return (
    <div>
      <Container style={{ margin: "10px 10px" }}>
        <Link to="/admin" style={{ margin: "10px 10px" }}>
          <Button variant="primary">Trang quản trị viên</Button>
        </Link>
        <Link to="/product/cart">
          <Button variant="primary">
            Cart<Badge>{numberOfItem}</Badge>
          </Button>
        </Link>
        <div style={{ margin: "10px 10px" }}>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Find accessory..."
              aria-label="Search"
              style={{ borderRadius: "10px" }}
              
              onChange={handleSearch}
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
        <CustomerProductList />

        {/* <Link to="/admin/product/edit/:id">
          <Button variant="success">Edit</Button>
        </Link> */}
      </Container>
    </div>
  );
}

export default ProductSelect;
