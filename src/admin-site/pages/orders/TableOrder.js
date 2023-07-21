import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function TableOrder() {
  const users = useSelector((state) => state.adminUserReducer.users);
  return (
      <Container style={{ margin: "10px 0" }}>
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
          {users.map((human, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{human.email}</td>
                <td>{human.orderDate}</td>
                <td>{human.total}</td>
                <td>
                  <Button
                    variant="danger"
                    // onClick={() => handleDelete(human.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/admin">
        <Button variant="primary" style={{ margin: "0 10px 0 0" }}>
          Back
        </Button>
      </Link>
    </Container>
    
  );
}

export default TableOrder;
