import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

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
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        ></SweetAlert>;
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
        <SweetAlert
          title="Good job!"
          text="deleted"
          icon="Danger"
          button="Aww yiss!"
        >
          deleted
        </SweetAlert>;
      })
      .catch((err) => {
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        >
          deleted
        </SweetAlert>;
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
        <SweetAlert
          title="Good job!"
          text={err.message}
          icon="Danger"
          button="Aww yiss!"
        ></SweetAlert>;
      });
  };
};
