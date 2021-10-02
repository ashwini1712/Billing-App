import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import ComboBox from "react-responsive-combo-box";
import { startDelete } from "../../Redux/Actions/deleteActions";
import ModalView from "./Modal/ModalView";

const Customers = () => {
  const dispatch = useDispatch();

  const [custModal, setCustModal] = useState(false);
  const [search, setSearch] = useState("");
  const [combo, setCombo] = useState("");

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const options = ["a-z", "z-a"];

  console.log("search", search);

  return (
    <div>
      <h1>Customers</h1>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <Button onClick={handleAddingCust}>Add New Customer</Button>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for names.."
          title="Type in a name"
        />
        <ComboBox
          options={options}
          placeholder="Order By"
          defaultIndex={4}
          optionsListMaxHeight={300}
          style={{
            width: "200px",
            backgroundColor: "ivory",
          }}
          focusColor="#20C374"
          renderOptions={(option) => (
            <div className="comboBoxOption">{option}</div>
          )}
          onSelect={(option) => setCombo(option)}
          // onChange={(event) => console.log(event.target.value)}
          enableAutocomplete
          // onOptionsChange={(option) => setCombo(option)}
        />
      </div>
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
