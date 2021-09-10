import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGettingCustomers } from "../../../Redux/Actions/customersAction";
import { startGettingProducts } from "../../../Redux/Actions/productsActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const customers = useSelector((state) => {
    return state.customers;
  });

  const products = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    dispatch(startGettingCustomers());
    dispatch(startGettingProducts());
  }, []);

  return (
    <div>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", margin: 80 }}
      >
        <div
          className="card"
          style={{
            width: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="card"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            Total Customers
          </div>
          <div>
            <h1>{customers.length}</h1>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="card"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            Total Products
          </div>
          <div>
            <h1>{products.length}</h1>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="card"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            Recent Activity
          </div>
          <div>
            <h1>{customers.length}</h1>
          </div>
        </div>
      </div>
      <div
        className="d-flex"
        style={{ justifyContent: "space-around", margin: 80 }}
      >
        <div
          className="card"
          style={{
            width: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="card"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            Bills Generated
          </div>
          <div>
            <h1>{customers.length}</h1>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="card"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
            }}
          >
            Download Invoice/Bill
          </div>
          <div>
            <h1>{customers.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
