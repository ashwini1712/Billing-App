import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { deleteFromCart } from "../../../Redux/Actions/cartActions";

const Cart = ({ productsData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  const handleDeleteCart = (ele) => {
    dispatch(deleteFromCart(ele));
  };

  return (
    <div className="container-fluid" style={{ width: "50vh" }}>
      {cart.map((prod) => {
        return (
          <div className="card">
            <p key={prod._id}>{prod.name}</p>
            <div className="card-body">
              <Button style={{ backgroundColor: "red" }}>-</Button>
              Qty
              <Button style={{ backgroundColor: "green" }}>+</Button>
              <button
                onClick={() => {
                  handleDeleteCart(prod);
                }}
                className="btn"
                style={{ backgroundColor: "blue" }}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
