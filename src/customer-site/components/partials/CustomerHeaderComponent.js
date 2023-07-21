import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { customerLogout } from "../../store/actions/customerAuthAction";

function CustomerHeaderComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(customerLogout());
    navigate("/login");
  };
  return (
    <header>
      <Navbar expand="lg" light bgColor="white">
        <Container fluid>
          <Container className="navigate">
            <Navbar.Brand href="#customer">User</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/product" style={{ textDecoration: "none" }}>
                  Products
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/order" style={{ textDecoration: "none" }}>
                  Orders
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
          <Nav.Item>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", padding: "0 10px 0 0" }}
            >
              <Button variant="primary">Login</Button>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <Button variant="primary">Register</Button>
            </Link>
          </Nav.Item>
          <Button
            color="primary"
            style={{ margin: "0 0 0 10px", borderRadius: "10px" }}
            onClick={handleLogout}
          >
            {" "}
            Logout
          </Button>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/19/12/37/knives-1839061_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/29/13/06/caffeine-1869720_1280.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default CustomerHeaderComponent;
