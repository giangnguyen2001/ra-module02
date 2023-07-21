import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { customerRegister } from "../../store/actions/customerAuthAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomerRegisterPage() {
  let isRegist = useSelector((state) => state.customerAuthReducer.listCustomer);
  // const [email, setEmail] = useState("");
  // const [firstN, setFirstName] = useState("");
  // const [lastN, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatPsw, setRepeatPassword] = useState("");
  const [error, setError] = useState({
    isRecentStatus: false,
    status: false,
    errorMsg: "",
  });
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPsw: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    validate(user);
  }, [user]);

  const handleRegist = async (e) => {
    e.preventDefault();
    await validate(user);

    if (error.status) {
      await setError({ ...error, isRecentStatus: true });
      return;
    } else {
    }
    let isDuplicate = false;
    isRegist.forEach((item) => {
      if (item.email === user.email) {
        isDuplicate = true;
      }
    });

    if (isDuplicate === false) {
      delete user.repeatPsw;

      user.cart = [];
      user.add = "";
      user.phone = "";

      dispatch(customerRegister(user));
      navigate("/login");
    } else {
      await setError({
        ...error,
        isRecentStatus: true,
        status: true,
        errorMsg: "Please sign with another email!!",
      });
    }
  };

  const validate = (data) => {
    let newError = { ...error };

    if (data.email == "" || data.password == "" || data.repeatPsw == "") {
      newError.status = true;
      newError.errorMsg = "Các thông tin không được để trống";
    } else if (data.password !== data.repeatPsw) {
      newError.status = true;
      newError.errorMsg = "Mật khẩu nhập lại không chính xác";
    } else if (data.password.length < 6) {
      newError.status = true;
      newError.errorMsg = "Mật khẩu không được ngắn hơn 6 ký tự";
    } else if (
      !(
        data.password.match(/[a-z]/) &&
        data.password.match(/[A-Z]/) &&
        data.password.match(/\d/)
      )
    ) {
      newError.status = true;
      newError.errorMsg =
        "Mật khẩu cần bao gồm ký tự IN HOA, chữ thường và chữ số";
    } else {
      newError = { isShowStatus: false, status: false, errorMsg: "" };
    }

    setError(newError);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password again"
            onChange={(e) => setUser({ ...user, repeatPsw: e.target.value })}
          />
        </Form.Group>
        {error.isRecentStatus == true && error.status == true && (
          <p
            id="Error"
            style={{
              color: "#a11515",
              padding: "20px",
              textAlign: "center ",
            }}
          >
            {error.errorMsg}
          </p>
        )}
        <Button variant="primary" type="submit" onClick={handleRegist}>
          Sign Up
        </Button>
        <Form.Group>
          <Link to={"/login"}>Login</Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default CustomerRegisterPage;
