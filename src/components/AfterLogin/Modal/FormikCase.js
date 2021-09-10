import React from "react";
import Input from "./InputComponent";

function FormikCase(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
}
export default FormikCase;
