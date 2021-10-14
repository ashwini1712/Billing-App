import React from "react";
import companyLogo from "./photo.jpg";

const About = () => {
  return (
    <div>
      <br />
      <p style={{ fontSize: 20 }}>
        <i>
          <b style={{ color: "darkblue" }}>BillingApp</b>
        </i>{" "}
        is a
        <i>
          <b style={{ color: "darkblue" }}>
            {" "}
            FREE Business Accounting Software
          </b>
        </i>{" "}
        made for Indian Small Businessmen to deal with invoicing, inventory,
        accounting needs, and much more! The goal is to make a businessman’s
        daily routine less tiring and let them focus more on growing their
        business, less on paperwork.
      </p>
      <br />
      <h1 style={{ color: "darkblue" }}>
        Adopt Right Technology for your Business:
      </h1>
      <img
        style={{ width: "50vh", height: "40vh" }}
        src={companyLogo}
        alt="made in india"
      />
      <div
        className="d-flex"
        style={{
          justifyContent: "space-evenly",
          margin: 10,
          color: "darkblue",
          fontWeight: "bold",
          marginTop: 100,
        }}
      >
        <p>Get in Touch:</p>
        <p>ashwin.kumar90frd@gmail.com</p>
        <p>+917979830915</p>
      </div>
    </div>
  );
};

export default About;
