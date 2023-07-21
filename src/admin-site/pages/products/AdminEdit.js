import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminUpdateProduct,
  adminGetProduct,
} from "../../store/actions/adminProductActs";
import { useEffect } from "react";

function AdminEdit() {
  const products = useSelector((state) => state.adminProductReducer.products);

  const [newId, setId] = useState();
  const [newCode, setProductCode] = useState();
  const [newName, setProductName] = useState();
  const [newUnitPrice, setUnitPrice] = useState();
  const [newQuantity, setQuantity] = useState();
  const [newDescription, setDescription] = useState();
  const [newImage, setProductImg] = useState();

  const { id } = useParams();

  useEffect(() => {
    dispatch(adminGetProduct(products));
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        setProductCode(products[i].code);
        setId(products[i].id);
        setUnitPrice(products[i].unitPrice);
        setQuantity(products[i].quantity);
        setDescription(products[i].description);
        setProductImg(products[i].imageUrl);
        setProductName(products[i].nameProduct);
        break;
      }
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitUpdate = (event) => {
    event.preventDefault();

    dispatch(
      adminUpdateProduct({
        id: newId,
        code: newCode,
        nameProduct: newName,
        unitPrice: newUnitPrice,
        quantity: newQuantity,
        description: newDescription,
        imageUrl: newImage,
      })
    );
    document.getElementById("form").reset();
    navigate("/admin/product");
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Form id="form" expand="lg" className="bg-body-secondary">
        <h2 style={{ marginTop: "10px" }}>Update Product</h2>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Code</Form.Label>
          <Form.Control
            type="ID Product"
            defaultValue={newCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name Product</Form.Label>
          <Form.Control
            type="Name Product"
            defaultValue={newName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="Price"
            defaultValue={newUnitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="Quantity"
            defaultValue={newQuantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Decription</Form.Label>
          <Form.Control
            type="Description"
            defaultValue={newDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Img Product</Form.Label>
          <Form.Control
            type="Img"
            defaultValue={newImage}
            onChange={(e) => setProductImg(e.target.value)}
          />
        </Form.Group>
        <Link
          to={"/admin/product"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Back
          </Button>
        </Link>
        <Link to={"/admin/product"}>
          <Button variant="primary" type="submit" onSubmit={handleSubmitUpdate}>
            Update
          </Button>
        </Link>
      </Form>
    </div>
  );
}
export default AdminEdit;
