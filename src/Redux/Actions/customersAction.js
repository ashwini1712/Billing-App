import axios from "axios";
import swal from "sweetalert";

export const customersData = (data) => {
  return {
    type: "CUSTOMERS_DATA",
    payload: data,
  };
};

export const addingCustomers = (data) => {
  return {
    type: "ADDING_CUSTOMERS",
    payload: data,
  };
};

export const startGettingCustomers = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/customers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(customersData(response.data));
      })
      .catch((err) => {});
  };
};

export const startPostingCustomers = (custData) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/customers", custData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(addingCustomers(response.data));
        swal({
          title: "Good job!",
          text: "Successfully Added",
          icon: "success",
          button: "ok",
        });
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
