import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PDF from "./Pdf";
import { clearCart } from "../../Redux/Actions/cartActions";

const BillsModal = ({ billCustProd }) => {
  const dispatch = useDispatch();
  console.log("billscustprod", billCustProd);
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
    dispatch(clearCart());
  };

  const customer = useSelector((state) => {
    return state.customers;
  });

  const product = useSelector((state) => {
    return state.products;
  });

  const cusFilter = customer.filter((ele) => {
    return ele._id === billCustProd.customer;
  });

  const lineItems = billCustProd.lineItems;

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
