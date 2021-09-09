import axios from "axios";

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
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
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
        alert(err.message);
      });
  };
};
