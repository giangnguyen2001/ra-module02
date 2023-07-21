import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import {
  adminAddProd,
  adminDeleteProduct,
} from "../../store/actions/adminProductActs";

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  // const handleChangeQuantity = (e) => {
  //   const value = Number(e.target.value);

  //   if (value > 0) {
  //     setQuantity(value);
  //   }
  // };

  // const handleAdd = () => {
  //   dispatch(adminAddProd({ ...product, quantity: quantity }));
  // };

  const handleDelete = (id) => {
    if (window.confirm("Delete product?")) {
      dispatch(adminDeleteProduct({ id: id }));
    }
  };

  return (
    <Card>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Badge bg="secondary">${product.unitPrice}</Badge>
        <Card.Text>{product.description}</Card.Text>
        <Stack direction="horizontal" gap={3}>
          {/* <Form.Control
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            min={0}
          /> */}
          {/* <Button variant="primary" onClick={handleAdd}>
            Add
          </Button> */}
          <Link to={"/admin/product/edit/" + product.id}>
            <Button variant="success">Edit</Button>
          </Link>
          <Button variant="success" onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
export default ProductDetail;
