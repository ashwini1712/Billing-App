import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FormikContainer from "./FormikContainer";
import FormikCustEdit from "./FormikCustEdit";
import FormikProdEdit from "./FormikProdEdit";
import FormikProducts from "./FormikProduct";

const ModalView = ({
  prodModal,
  custModal,
  editModal,
  editView,
  editCust,
  editCustModal,
}) => {
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <div>
      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add </ModalHeader>
        <ModalBody>
          {custModal ? <FormikContainer /> : null}
          {prodModal ? <FormikProducts /> : null}
          {editView && editModal ? (
            <FormikProdEdit editModal={editModal} />
          ) : null}
          {editCust && editCustModal ? (
            <FormikCustEdit editModal={editCust} />
          ) : null}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalView;
