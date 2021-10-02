import axios from "axios";
import { clearCart } from "./cartActions";
import swal from "sweetalert";

export const billsData = (data) => {
  return {
    type: "BILLS_DATA",
    payload: data,
  };
};

export const addingBills = (data) => {
  return {
    type: "ADDING_Bills",
    payload: data,
  };
};

export const startGettingBills = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/bills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(billsData(response.data));
      })
      .catch((err) => {});
  };
};

export const startPostingBills = (custData) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/bills", custData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(addingBills(response.data));
        swal({
          title: "Good job!",
          text: "Generated Bill",
          icon: "success",
          button: "ok",
        });
        dispatch(clearCart());
      })
      .catch((err) => {
        swal({
          title: "Error",
          text: `${err.message}`,
          icon: "error",
          button: "ok",
        });
      });
  };
};
