import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  customerDeleteProduct,
  customerChangeQuantity,
  customerCheckOrder,
} from "../../store/actions/customerCartAction";

function CartList() {
  const cart = useSelector((state) => state.customerCartReducer.cart);
  //  ?? [];
  console.log(cart);
  const total = useSelector((state) => state.customerCartReducer.total);
  const order = useSelector((state) => state.customerCartReducer.order);
  // const customerLogin = useSelector(
  //   (state) => state.customerAuthReducer.customerLogin
  // );

  // const email = useSelector(
  //   (state) => state.customerAuthReducer.customerLogin.email
  // );

  // let email = "";
  // if (customerLogin == !null) {
  //   email = customerLogin.email;
  // } else {
  //   email = "";
  // }
  const dispatch = useDispatch();

  const handleChange = (e, id) => {
    const quantity = Number(e.target.value);

    if (quantity > 0) {
      dispatch(customerChangeQuantity(id, quantity));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete cart ?")) {
      dispatch(customerDeleteProduct(id));
    }
  };

  const handleCheck = () => {
    const isCheckout = window.confirm("Order this ?");
    if (isCheckout) {
      dispatch(
        customerCheckOrder({
          id: order.length ? order[order.length - 1].id + 1 : 1,
          // email: email,
          item: cart,
          total: total,
        })
      );
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.unitPrice}</td>
              <td>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleChange(e, item.id)}
                  min={1}
                />
              </td>
              <td>${item.subTotal}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>Total Items</td>
          <td>${total}</td>
          <Button class="btn btn-info" onClick={handleCheck}>
            Order
          </Button>
        </tr>
      </tfoot>
    </Table>
  );
}

export default CartList;
