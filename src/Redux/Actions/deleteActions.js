import axios from "axios";

export const startDelete = (data) => {
  return (dispatch) => {
    axios
      .delete(
        `http://dct-billing-app.herokuapp.com/api/customers/${data._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startProdDelete = (data) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-billing-app.herokuapp.com/api/products/${data._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startBillDelete = (data) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-billing-app.herokuapp.com/api/bills/${data._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
