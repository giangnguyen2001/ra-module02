import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminAddProd } from "../../store/actions/adminProductActs";

function AdminAdd() {
  const [imageUrl, setImgUrl] = useState("");
  const [name, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (event) => {
    event.preventDefault();

    dispatch(
      adminAddProd({
        imageUrl: imageUrl,
        name: name,
        description: description,
        unitPrice: unitPrice,
        quantity: quantity,
      })
    );
    navigate("/admin/product");
  };

  return (
    <div style={{ margin: "50px" }}>
      <Form expand="lg" className="bg-body-secondary">
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Product Imagine</Form.Label>
          <Form.Control
            type="text"
            multiple
            onChange={(event) => setImgUrl(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            multiple
            placeholder="Enter product"
            onChange={(event) => setProductName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            multiple
            onChange={(event) => setUnitPrice(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            multiple
            onChange={(event) => setQuantity(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            multiple
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Button style={{ margin: "0 10px 0 0" }} onClick={handleAdd}>
          Add
        </Button>
        <Link to="/admin/product">
          <Button variant="primary">Back</Button>
        </Link>
      </Form>
    </div>
  );
}

export default AdminAdd;
