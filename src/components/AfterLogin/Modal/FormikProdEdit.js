import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikCase from "./FormikCase";
import { useDispatch } from "react-redux";
import { startPostingProducts } from "../../../Redux/Actions/productsActions";

function FormikProdEdit({ editModal }) {
  console.log(editModal);
  const dispatch = useDispatch();
  const initialValues = {
    name: editModal.name,
    price: editModal.price,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
  });
  const onSubmit = (value) => {
    dispatch(startPostingProducts(value));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikCase control="input" type="name" label="Name" name="name" />
          <FormikCase control="input" type="price" label="price" name="price" />
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikProdEdit;
