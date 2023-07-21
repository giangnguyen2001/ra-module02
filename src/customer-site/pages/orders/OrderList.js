import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { customerDeleteOrder } from "../../store/actions/customerCartAction";
import { useState } from "react";

function OrderList() {
  const orders = useSelector((state) => state.customerCartReducer.order);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleDeleteOrder = (id) => {
    const isDeleteOrder = window.confirm("Are you sure want to cancel it ?");
    if (isDeleteOrder) {
      dispatch(customerDeleteOrder(id));
    }
  };

  return (
    <div className="text-center" style={{ marginTop: "60px" }}>
      <div style={{ paddingBottom: "80px" }}>
        <h2 className="float-start m-1">Order Manager</h2>

        <div>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearchValue(e.target.value.toString());
            }}
          />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* fix line 55 */}
          {orders.map((item, index) => {
            return (
              item.email.toUpperCase().includes(searchValue.toLowerCase()) && (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.orderDate}</td>
                  <td>${item.total}</td>

                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteOrder(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OrderList;
