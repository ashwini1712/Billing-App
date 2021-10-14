import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import ComboBox from "react-responsive-combo-box";
import { startDelete } from "../../Redux/Actions/deleteActions";
import ModalView from "./Modal/ModalView";
import { startGettingCustomers } from "../../Redux/Actions/customersAction";
import PaginationCompo from "./Modal/Pagination";

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGettingCustomers());
  }, [dispatch]);

  const [custModal, setCustModal] = useState(false);
  const [search, setSearch] = useState("");
  const [combo, setCombo] = useState("");
  const [editCust, setEditCust] = useState([]);
  const [editCustModal, setEditCustModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [showPerPage, setShowPerPage] = useState(9);
  const [page, setPage] = useState({
    start: 0,
    end: showPerPage,
  });

  const customer = useSelector((state) => {
    return state.customers;
  });

  const handleDelete = (ele) => {
    const result = window.confirm("Are you sure");
    if (result) {
      dispatch(startDelete(ele._id));
    } else return;
  };

  const handleEdit = (ele) => {
    setEditCust(ele);
    setEditCustModal(!editCustModal);
  };

  const handleAddingCust = () => {
    setCustModal(!custModal);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchCust = customer.filter((ele) => {
      if (ele.name.includes(search)) {
        return ele;
      } else return;
    });
    setCustomers(searchCust);
  };

  const options = ["a-z", "z-a"];

  const handleSelect = (option) => {
    setCombo(option);

    setCustomers(
      customer.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
      })
    );
  };

  const onPaginationChange = (start, end) => {
    setPage({ start, end });
  };

  return (
    <div>
      <h1>Customers</h1>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <Button onClick={handleAddingCust}>Add New Customer</Button>
        <div style={{ fontSize: 20 }}></div>
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
          optionsListMaxHeight={300}
          style={{
            width: "200px",
            backgroundColor: "ivory",
          }}
          focusColor="#20C374"
          renderOptions={(option) => (
            <div className="comboBoxOption">{option}</div>
          )}
          onSelect={(option) => {
            handleSelect(option);
          }}
          enableAutocomplete
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
        {customers.length > 0
          ? customers.slice(page.start, page.end).map((ele, i) => {
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
            })
          : customer.slice(page.start, page.end).map((ele, i) => {
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
      {editCust && editCustModal ? (
        <ModalView
          editCust={editCust}
          editCustModal={editCustModal}
          custModal={custModal}
        />
      ) : null}
      <PaginationCompo
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        cust={customer}
      />
    </div>
  );
};

export default Customers;
