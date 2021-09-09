import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startPostLogin } from "../../Redux/Actions/loginActions";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Register from "./Register";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUp, setPopUp] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      email,
      password,
    };
    dispatch(startPostLogin(form, props));
  };

  const toggle = () => {
    setPopUp(!popUp);
  };

  return (
    <div style={{ width: "200px" }} className="p-4">
      <h5>Login to your Account</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder="Enter Email/UserName"
          required={true}
          onChange={handleEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          required={true}
          onChange={handlePassword}
        />
        <input type="submit" value="Login" />
        <p>
          New to Billing App?<Button onClick={toggle}>SignUp</Button>
        </p>
      </form>
      {/* modal for registration */}

      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Register />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;
