import axios from "axios";

export const billsData = (data) => {
  return {
    type: "CUSTOMERS_DATA",
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
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
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
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
