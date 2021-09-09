import axios from "axios";
import { userLog } from "./logActions";

export const startPostLogin = (data, props) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/users/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("successfully loogged in");
        dispatch(userLog());
        props.history.push("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
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
          alert(result.message);
        } else {
          alert("successfully registered");
          props.history.push("/login");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
