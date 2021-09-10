import axios from "axios";

export const productsData = (data) => {
  return {
    type: "PRODUCTS_DATA",
    payload: data,
  };
};

export const addingProducts = (data) => {
  return {
    type: "PRODUCTS",
    payload: data,
  };
};

export const startGettingProducts = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(productsData(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startPostingProducts = (prodData) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/products", prodData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch(addingProducts(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
