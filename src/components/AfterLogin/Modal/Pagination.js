import React, { useEffect, useState } from "react";

const PaginationCompo = ({ showPerPage, onPaginationChange, cust }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const btnClick = (type) => {
    if (type === "prev") {
      if (counter === 1) alert("pagination reached to minimum");
      else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(cust.length / showPerPage) === counter) {
        setCounter(counter);
        alert("pagination reached to maximum");
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => btnClick("prev")}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => btnClick("next")}>
        Next
      </button>
    </div>
  );
};

export default PaginationCompo;
