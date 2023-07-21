import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogout } from "../../store/actions/adminAuthAction";

function AdminHeaderComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(adminLogout());
    navigate("/admin/login");
  };
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navigate">
          <Navbar.Brand href="#administrator">Administrator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/admin/user" style={{ textDecoration: "none" }}>
                  Users
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/admin/product" style={{ textDecoration: "none" }}>
                  Products
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/admin/order" style={{ textDecoration: "none" }}>
                  Orders
                </NavLink>
              </Nav.Link>
            </Nav>
            <Button
              color="primary"
              style={{ margin: "0 0 0 10px", borderRadius: "10px" }}
              onClick={handleLogout}
            >
              {" "}
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/fashion-flat-lay-composition-with-place-your-text_628068-119.jpg?w=2000')",
          height: "300px",
          margin: "20px 0 0 0",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Accessories Shop</h1>
              <h4 className="mb-3">A lot of accessories are here</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeaderComponent;
