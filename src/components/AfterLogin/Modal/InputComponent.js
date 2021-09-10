import React from "react";
import { Field, ErrorMessage } from "formik";

function InputComponent(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="card">
      <label htmlFor={name}> {label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage className="bg-warning text-dark" name={name} />
    </div>
  );
}
export default InputComponent;