import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { startPostingBills } from "../../../Redux/Actions/billsActions";
import { deleteFromCart } from "../../../Redux/Actions/cartActions";
import BillsModal from "../../Bills/BillsModal";

const Cart = ({ productsData }) => {
  const dispatch = useDispatch();
  const [final, setFinal] = useState([]);
  const [view, setView] = useState(false);
  const cart = useSelector((state) => {
    return state.cart;
  });

  const handleDeleteCart = (ele) => {
    dispatch(deleteFromCart(ele));
  };

  const increaseProductCount = (prod) => {
    const newQuantity = productsData.lineItems.map((ele) => {
      if (prod._id === ele.product) {
        let productCartQty = (ele.quantity += 1);
        console.log("produc", productCartQty);
        const addQuantity = {
          product: ele.product,
          quantity: productCartQty,
        };
        return addQuantity;
      } else return ele;
    });
    setFinal(newQuantity);
  };

  console.log("finalhero", final);

  const decreaseProductCount = (prod) => {
    const newQuantity = productsData.lineItems.map((ele) => {
      if (prod._id === ele.product) {
        let productCartQty = (ele.quantity -= 1);
        console.log("produc", productCartQty);
        const addQuantity = {
          product: ele.product,
          quantity: productCartQty,
        };
        return addQuantity;
      } else return ele;
    });
    setFinal(newQuantity);
  };

  const generateBill = () => {
    productsData.lineItems = final;
    console.log("final product databfjbads", productsData);
    dispatch(startPostingBills(productsData));
    setView(true);
  };

  return (
    <div className="container-fluid" style={{ width: "40vh" }}>
      <h1 style={{ color: "goldenrod" }}>Cart</h1>
      <div className="card" style={{ overflowY: "scroll", height: "500px" }}>
        {cart.map((prod) => {
          return (
            <div className="card">
              <p key={prod._id}>{prod.name}</p>
              <div className="card-body">
                <Button
                  onClick={() => {
                    decreaseProductCount(prod);
                  }}
                  style={{ backgroundColor: "red" }}
                >
                  -
                </Button>
                {final.map((ele) => {
                  if (prod._id === ele.product) {
                    return ele.quantity;
                  } else return;
                })}
                <Button
                  onClick={() => {
                    increaseProductCount(prod);
                  }}
                  style={{ backgroundColor: "green" }}
                >
                  +
                </Button>
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
      <div>
        <Button onClick={generateBill}>Generate Bill</Button>
        {view ? <BillsModal billCustProd={productsData} /> : null}
      </div>
    </div>
  );
};

export default Cart;
