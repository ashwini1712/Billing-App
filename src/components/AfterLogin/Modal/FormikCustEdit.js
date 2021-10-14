import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikCase from "./FormikCase";
import { useDispatch } from "react-redux";
import { startPostingCustomers } from "../../../Redux/Actions/customersAction";

function FormikCustEdit({ editModal }) {
  const dispatch = useDispatch();
  const initialValues = {
    name: editModal.name,
    email: editModal.email,
    mobile: editModal.mobile,
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(5).required("Required"),
    email: Yup.string().email().required("Required"),
    mobile: Yup.number().max(10).required("Required"),
  });
  const onSubmit = (value) => {
    dispatch(startPostingCustomers(value));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikCase control="input" type="email" label="Email" name="email" />
          <FormikCase control="input" type="name" label="Name" name="name" />
          <FormikCase
            control="input"
            type="mobile"
            label="Mobile"
            name="mobile"
          />
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikCustEdit;
