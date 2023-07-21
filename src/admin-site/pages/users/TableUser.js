import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { adminDeleteUser } from "../../store/actions/adminUserAction";

function TableUser() {
  const users = useSelector((state) => state.adminUserReducer.users);
  console.log("user", users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(adminDeleteUser(id));
  };
  return (
    <Container style={{ margin: "10px 0" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((human, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{human.firstN}</td>
                <td>{human.lastN}</td>
                <td>{human.email}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(human.id)}
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

export default TableUser;
