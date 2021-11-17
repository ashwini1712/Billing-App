import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { billsData, startGettingBills } from "../../Redux/Actions/billsActions";
import { Button } from "reactstrap";
import BillsModal from "./BillsModal";
import DatePicker from "react-datepicker";

const BillsView = () => {
  const [billMod, setBillMod] = useState(false);
  const [billCustProd, setBillCustProd] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [billsNew, setBillsNew] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGettingBills(billsData()));
  }, [dispatch]);

  const bills = useSelector((state) => {
    return state.bills;
  });

  useEffect(() => {
    setBillsNew(bills);
  }, []);

  const customer = useSelector((state) => {
    return state.customers;
  });

  const handleView = (ele) => {
    setBillMod(true);
    setBillCustProd(ele);
  };

  console.log("bills", bills);

  const filterBills = () => {
    const NewBills = bills.filter((ele) => {
      const newDateConverted = ele.date;
      if (
        new Date(newDateConverted) <= endDate &&
        new Date(newDateConverted) >= startDate
      ) {
        return ele;
      }
    });
    setBillsNew(NewBills);
  };

  console.log("newbills", billsNew);

  return (
    <div>
      <h1>Bills</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button type="button" onClick={filterBills}>
        Filter
      </button>
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

        {billsNew.map((ele, i) => {
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
      {billMod ? (
        <BillsModal
          billCustProd={billCustProd}
          billMod={billMod}
          setBillMod={setBillMod}
        />
      ) : null}
    </div>
  );
};

export default BillsView;
