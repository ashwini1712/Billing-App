import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { billsData, startGettingBills } from "../../Redux/Actions/billsActions";
import { Button } from "reactstrap";
import BillsModal from "./BillsModal";

const BillsView = () => {
  const [billMod, setBillMod] = useState(false);
  const [billCustProd, setBillCustProd] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGettingBills(billsData()));
  }, [dispatch]);

  const bills = useSelector((state) => {
    return state.bills;
  });

  const customer = useSelector((state) => {
    return state.customers;
  });

  const handleView = (ele) => {
    setBillMod(true);
    setBillCustProd(ele);
  };

  return (
    <div>
      <h1>Bills</h1>
      {/* <Button onClick={handleAddingCust}>Add New Customer</Button> */}
      <table className="table table-striped table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Customer</th>
            <th>date</th>
            <th>Total</th>
            <th>View</th>
            <th>Crud Operations</th>
          </tr>
        </thead>
        {bills.map((ele, i) => {
          const cusName = customer.filter((cus) => {
            return cus._id === ele.customer;
          });

          return (
            <tbody key={ele._id}>
              <tr>
                <td>{i + 1}</td>
                {cusName.map((element) => {
                  return <td key={element._id}>{element.name}</td>;
                })}
                <td>{ele.date}</td>
                <td>{ele.total}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleView(ele);
                    }}
                  >
                    View
                  </Button>
                </td>
                <td>
                  <div
                    style={{
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Button
                    // onClick={() => {
                    //   handleEdit(ele);
                    // }}
                    >
                      Edit
                    </Button>
                    <Button
                    // onClick={() => {
                    //   handleDelete(ele);
                    // }}
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
      {billMod ? <BillsModal billCustProd={billCustProd} /> : null}
    </div>
  );
};

export default BillsView;
