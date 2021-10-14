import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = ({ billCustProd, cusFilter, productFilter }) => {
  return (
    <>
      <div ref={ref}>
        <div
          className="card"
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>Creation Date:{cusFilter[0].createdAt}</p>
          <p>Mobile:{cusFilter[0].mobile}</p>
          <p>Email:{cusFilter[0].email}</p>
        </div>
        <div
          className="card"
          style={{
            backgroundColor: "green",
            color: "white",
          }}
        >
          <i style={{ color: "blanchedalmond" }}>
            <b>Product Details</b>
          </i>
          <div className="card" style={{ backgroundColor: "goldenrod" }}>
            {productFilter.map((elepro) => {
              return (
                <div key={elepro._id}>
                  <b>{elepro.name} : </b>
                </div>
              );
            })}
            {billCustProd.lineItems.map((ele) => {
              return (
                <div key={ele._id}>
                  <b>
                    Price:{ele.price} - Quantity:{ele.quantity} - SubTotal:
                    {ele.subTotal}
                  </b>
                </div>
              );
            })}
          </div>
          <br />
          <div
            className="card"
            style={{
              backgroundColor: "ghostwhite",
              color: "goldenrod",
            }}
          >
            Grand Total:{billCustProd.total}
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="Bill.pdf">
        {({ toPdf }) => (
          <button
            style={{
              color: "green",
              backgroundColor: "goldenrod",
            }}
            onClick={toPdf}
          >
            Download Bill
          </button>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
