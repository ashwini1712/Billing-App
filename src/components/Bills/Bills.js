import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { billsData, startGettingBills } from "../../Redux/Actions/billsActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cart from "../AfterLogin/Cart/Cart";
import ModalView from "../AfterLogin/Modal/ModalView";
import { addToCart } from "../../Redux/Actions/cartActions";

const Bills = () => {
  const [prodModal, setProdModal] = useState(false);
  const [custModal, setCustModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [customer, setCustomer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGettingBills(billsData()));
  }, [dispatch]);

  const customers = useSelector((state) => {
    return state.customers;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });

  const products = useSelector((state) => {
    return state.products;
  });

  const productsListInCart = cart.map((ele) => {
    return {
      product: ele._id,
      quantity: 1,
    };
  });

  const addBill = {
    date: startDate,
    customer,
    lineItems: productsListInCart,
  };
  console.log(addBill);

  const handleAdd = (prod) => {
    console.log("getting prod for cart", prod);
    // cart.length > 0
    //   ? cart.map((compProduct) => {
    //       if (compProduct._id === prod._id) {
    //         return (
    //           <SweetAlert
    //             title="Good job!"
    //             text="You clicked the button!"
    //             icon="success"
    //             button="Aww yiss!"
    //           ></SweetAlert>
    //         );
    //       } else {
    //         return setProduct([prod, ...product]);
    //       }
    //     })
    //   :
    dispatch(addToCart(prod));
  };

  const handleSelect = (e) => {
    setCustomer(e.target.value);
  };

  const handleAddingCust = () => {
    setCustModal(!custModal);
  };

  const handleAddingProd = () => {
    setProdModal(!prodModal);
  };

  return (
    <div>
      <div className="card" style={{ margin: 10 }}>
        <div
          className="card"
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "ThreeDLightShadow",
            color: "white",
          }}
        >
          <Button
            style={{ backgroundColor: "goldenrod" }}
            onClick={handleAddingCust}
          >
            Add New Customer
          </Button>
          <p>---------or---------</p>

          {/* date time picker */}

          <h4>Please select date and a Customer</h4>
          <div className="card">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <select onChange={(e) => handleSelect(e)}>
            {customers.map((cust) => {
              return (
                <option value={cust._id} key={cust._id}>
                  {cust.name}
                </option>
              );
            })}
          </select>
        </div>
        {customer.length > 0 ? (
          <div
            className="card"
            style={{
              backgroundColor: "ThreeDLightShadow",
              color: "white",
              marginTop: "20px",
            }}
          >
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <Button
                style={{ backgroundColor: "goldenrod" }}
                onClick={handleAddingProd}
              >
                Add Product
              </Button>
              <p>---------or---------</p>
              <h4>Please select products </h4>
              <div
                className="row row-cols-5"
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  overflowX: "scroll",
                }}
              >
                {products.map((prod) => {
                  return (
                    <div
                      className="card"
                      key={prod._id}
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "darkgoldenrod",
                        height: "160px",
                        overflow: "hidden",
                        margin: "10px",
                      }}
                    >
                      <div>
                        <h5>{prod.name}</h5>
                        <hr />
                        <p>{prod.price}</p>
                        <Button
                          style={{ backgroundColor: "goldenrod" }}
                          onClick={() => {
                            handleAdd(prod);
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {cart.length === 0 ? (
        <div className="card">Cart is empty</div>
      ) : (
        <Cart productsData={addBill} />
      )}
      {prodModal ? <ModalView prodModal={prodModal} /> : null}
      {custModal ? <ModalView custModal={custModal} /> : null}
    </div>
  );
};

export default Bills;
