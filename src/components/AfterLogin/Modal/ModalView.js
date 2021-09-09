import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Form } from "formik";

const ModalView = ({ name, mobile, email }) => {
  const [popUp, setPopUp] = useState(true);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <div
      className="card"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Modal isOpen={popUp} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Customer</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              mobile: "",
              email: "",
            }}
          >
            {(formik) => (
              <div>
                <Form>
                  <label>name</label>
                  <input type="text" />
                  <br />
                  <label>email</label>
                  <input type="email" />
                  <br />
                  <label>mobile</label>
                  <input type="text" />
                  <br />
                  <button className="btn btn-danger mt-3 ml-3" type="submit">
                    Register
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalView;
