import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FormikContainer from "./FormikContainer";
import FormikProducts from "./FormikProduct";

const ModalView = ({ prodModal, custModal }) => {
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <div>
      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Customer</ModalHeader>
        <ModalBody>
          {custModal ? <FormikContainer /> : null}
          {prodModal ? <FormikProducts /> : null}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalView;
