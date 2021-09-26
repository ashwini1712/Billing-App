import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { startDelete } from "../../Redux/Actions/deleteActions";
import ModalView from "./Modal/ModalView";

const Customers = () => {
  const [custModal, setCustModal] = useState(false);
  const dispatch = useDispatch();
  const customers = useSelector((state) => {
    return state.customers;
  });


  const handleDelete = (ele) => {
    const result = window.confirm("Are you sure");
    if (result) {
      dispatch(startDelete(ele._id));
    } else return;
  };

  const handleEdit = (ele) => {
    console.log(ele);
  };

  const handleAddingCust = () => {
    setCustModal(!custModal);
  };

  return (
    <div>
      <h1>Customers</h1>
      <Button onClick={handleAddingCust}>Add New Customer</Button>
      <table className="table table-striped table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Crud Operations</th>
          </tr>
        </thead>
        {customers.map((ele, i) => {
          return (
            <tbody key={ele._id}>
              <tr>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.mobile}</td>
                <td>{ele.email}</td>
                <td>
                  <div
                    style={{
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleEdit(ele);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(ele);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {custModal ? <ModalView custModal={custModal} /> : null}
    </div>
  );
};

export default Customers;
