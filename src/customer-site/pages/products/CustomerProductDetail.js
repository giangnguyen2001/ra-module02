import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerAddProduct } from "../../store/actions/customerCartAction";

function CustomerProductDetail({ product }) {
  const dispatch = useDispatch();
  // const [valueIndex, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e) => {
    const value = Number(e.target.value);

    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAdd = () => {
    dispatch(customerAddProduct({ ...product, quantity: quantity }));
  };
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Badge bg="secondary">${product.unitPrice}</Badge>
          <Card.Text>{product.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleChangeQuantity}
              min={1}
            />
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomerProductDetail;
