import axios from "axios";
// import SweetAlert from "react-bootstrap-sweetalert";
import swal from "sweetalert";
import { userLog } from "./logActions";

export const startPostLogin = (data, props) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/users/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(userLog());
        props.history.push("/dashboard");
        swal({
          title: "Good job!",
          text: "Successfully Logged in!",
          icon: "success",
          button: "ok",
        });
      })
      .catch((err) => {
        swal({
          title: "Error",
          text: `${err.message}`,
          icon: "warning",
          button: "ok",
        });
      });
  };
};

export const startPostRegister = (data, props) => {
  return () => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/users/register", data)
      .then((response) => {
        console.log(response);
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          swal({
            title: "Error",
            text: `${result.message}`,
            icon: "error",
            button: "ok",
          });
        } else {
          swal({
            title: "Good job!",
            text: "Registered with us",
            icon: "success",
            button: "Aww yiss!",
          });
        }
      });
  };
};
