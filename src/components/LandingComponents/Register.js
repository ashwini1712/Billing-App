import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startPostRegister } from "../../Redux/Actions/loginActions";

const Register = (props) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [businessName, setBusinessName] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleBusinessName = (e) => {
    setBusinessName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const regData = {
      username: userName,
      email,
      password,
      businessName,
      address,
    };
    dispatch(startPostRegister(regData, props));
  };

  return (
    <div
      className="card"
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "honeydew",
      }}
    >
      <h1>Register with us</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={handleName}
          value={userName}
          required={true}
        />
        <br />
        <input
          type="text"
          placeholder="Enter email"
          onChange={handleEmail}
          value={email}
          required={true}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={handlePassword}
          value={password}
          required={true}
        />
        <br />
        <input
          type="text"
          placeholder="Enter businessName"
          onChange={handleBusinessName}
          value={businessName}
          required={true}
        />
        <br />
        <textarea
          type="text"
          placeholder="Enter address"
          onChange={handleAddress}
          value={address}
        ></textarea>
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
