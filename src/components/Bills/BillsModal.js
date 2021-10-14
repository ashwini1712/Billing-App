import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PDF from "./Pdf";
import { clearCart } from "../../Redux/Actions/cartActions";

const BillsModal = (props) => {
  const billCustProd = props.billCustProd;
  const setBillMod = props.setBillMod;
  const billMod = props.billMod;
  const dispatch = useDispatch();
  console.log("billscustprod", billCustProd);
  const toggle = () => {
    setBillMod(!billMod);
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
      <Modal isOpen={billMod} toggle={toggle}>
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
