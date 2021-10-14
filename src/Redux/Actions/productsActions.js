import axios from "axios";
import swal from "sweetalert";
export const productsData = (data) => {
  return {
    type: "PRODUCTS_DATA",
    payload: data,
  };
};

export const addingProducts = (data) => {
  return {
    type: "ADDING_PRODUCTS",
    payload: data,
  };
};

export const updatingProducts = (data) => {
  return {
    type: "UPDATING_PRODUCTS",
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
        swal({
          title: "Error",
          text: `${err.message}`,
          icon: "error",
          button: "ok",
        });
      });
  };
};

export const startPostingProducts = (prodData) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/products", prodData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(addingProducts(response.data));
        swal({
          title: "Good job!",
          text: "Successfully added",
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

export const startUpdatingProducts = (prodData) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/products", prodData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(updatingProducts(response.data));
        swal({
          title: "Good job!",
          text: "Successfully added",
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
