import React from "react";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <div
        className="d-flex"
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <div style={{ width: "40%" }}>
          <h1>Billing App</h1>
          <p style={{ textAlign: "justify" }}>
            A professional invoice stands for a brand's identity. By using this
            billing software, you can create GST bills that comply with the
            goods and service tax law of India. You can quickly create a GST
            bills in online and offline modes in a few steps. Using this billing
            software with GST, small businesses can keep their accounts and
            books updated....
          </p>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Login />
        </div>
      </div>
      <h1 style={{ marginLeft: "120px", marginTop: "20px" }}>
        Timely Notifications
      </h1>
      <p style={{ textAlign: "justify", width: "40%", marginLeft: "120px" }}>
        Not knowing whether the client has either received an invoice or still
        waiting for the same or merely have paid their invoice and you are still
        waiting to receive any alerts related to payment. Especially a
        solopreneur or entrepreneur needs this as the last thing on the mind as
        their day is filled with many other tasks. Ideally, what works best to
        receive notification is when your client not only open the invoice but
        also when the payment is made for the same via a payment gateway. This
        will free up lots of time and allows you to see more of sent, an unpaid
        and current status of all your sent invoices. This seems to have made it
        to the list of must-have good features of an invoicing app.
      </p>
    </div>
  );
};

export default Home;
