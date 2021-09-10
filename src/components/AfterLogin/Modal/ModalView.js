import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FormikContainer from "./FormikContainer";

const ModalView = () => {
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <div>
      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Customer</ModalHeader>
        <ModalBody>
          <FormikContainer />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalView;
