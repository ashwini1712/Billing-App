import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import PDF from "./Pdf";

const BillsModal = ({ billCustProd }) => {
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
  };

  const customer = useSelector((state) => {
    return state.customers;
  });

  const product = useSelector((state) => {
    return state.products;
  });

  console.log(billCustProd.lineItems[0].product);

  const cusFilter = customer.filter((ele) => {
    return ele._id === billCustProd.customer;
  });

  const lineItems = billCustProd.lineItems;

  // const productFilter = product.filter((ele) => {
  //   lineItems.map((eleLine, i) => {
  //     console.log("inside line", eleLine);
  //     return ele._id === eleLine.product;
  //   });
  // });
  const productFilter = [];
  for (let i = 0; i < product.length; i++) {
    for (let j = 0; j < lineItems.length; j++) {
      if (product[i]._id === lineItems[j].product) {
        productFilter.push(product[i]);
      }
    }
  }

  console.log("filter", productFilter);

  return (
    <div>
      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Details of bill for {cusFilter[0].name}
        </ModalHeader>
        <ModalBody>
          <PDF
            billCustProd={billCustProd}
            cusFilter={cusFilter}
            productFilter={productFilter}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BillsModal;
