import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import CustomerProductDetail from "./CustomerProductDetail";

const getRows = (products) => {
  let rows = [];
  let row = [];

  for (const product of products) {
    row.push(product);

    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
  }

  if (row.length !== 0) {
    rows.push(row);
  }
  return rows;
};

function CustomerProductList() {
  const products = useSelector(
    (state) => state.customerProductReducer.products
  );
  const rows = getRows(products);

  return (
    <>
      {rows.map((row, index) => {
        return (
          <Row key={index}>
            {row.map((product, index) => {
              return (
                <Col key={index}>
                  <CustomerProductDetail product={product} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
}

export default CustomerProductList;
