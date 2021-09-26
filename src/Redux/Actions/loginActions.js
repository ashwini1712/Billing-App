import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { userLog } from "./logActions";

export const startPostLogin = (data, props) => {
  return (dispatch, props) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/users/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Successfully logged in");
        dispatch(userLog());
        props.history.push("/dashboard");
      })
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        ></SweetAlert>;
      });
  };
};

export const startPostRegister = (data, props) => {
  return () => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/users/register", data)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          <SweetAlert
            title="Good job!"
            text={result.error.message}
            icon="Danger"
            button="Aww yiss!"
          ></SweetAlert>;
        } else {
          <SweetAlert
            title="Good job!"
            text="successfully Registered"
            icon="success"
            button="Aww yiss!"
          ></SweetAlert>;
        }
      })
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        ></SweetAlert>;
      });
  };
};
