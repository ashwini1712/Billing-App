import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

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
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        ></SweetAlert>;
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
        <SweetAlert
          title="Good job!"
          text="successfully added"
          icon="Success"
          button="Aww yiss!"
        >
          Success
        </SweetAlert>;
      })
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        >
          Error
        </SweetAlert>;
      });
  };
};
