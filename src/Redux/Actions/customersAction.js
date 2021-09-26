import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

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
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text="You clicked the button!"
          icon="success"
          button="Aww yiss!"
        ></SweetAlert>;
      });
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
        console.log(response.data);
      })
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="success"
          button="Aww yiss!"
        ></SweetAlert>;
      });
  };
};
