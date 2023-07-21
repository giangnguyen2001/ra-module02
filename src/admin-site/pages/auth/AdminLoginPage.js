import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../store/actions/adminAuthAction";

function AdminLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [psw, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const isLogin = useSelector((state) => state.adminAuthReducer.isLogin);

  if (isLogin) {
    navigate("/admin");
  }

  const handleSubmit = (event) => {
    if (email.length === 0 || psw.length === 0) {
      return;
    }
    event.preventDefault();

    const formInput = {
      email: email,
      psw: psw,
    };
    dispatch(adminLogin(formInput));
    setErrorMsg("Your email or password was wrong, please check it again !!");
  };

  return (
    <Form>
      <p className="text-danger">{errorMsg}</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={psw}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}

export default AdminLoginPage;
