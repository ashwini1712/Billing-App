import React, { useState } from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import ModalView from "./Modal/ModalView";
import { startProdDelete } from "../../Redux/Actions/deleteActions";

const Products = () => {
  const [prodModal, setProdModal] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products;
  });


  const handleDelete = (ele) => {
    const result = window.confirm("Are you sure");
    if (result) {
      dispatch(startProdDelete(ele._id));
    } else return;
  };

  const handleEdit = (ele) => {
    console.log(ele);
  };

  const handleAddingProd = () => {
    setProdModal(!prodModal);
  };

  return (
    <div>
      <h1>Products</h1>
      <Button onClick={handleAddingProd}>Add New Product</Button>
      <table className="table table-striped table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Crud Operations</th>
          </tr>
        </thead>
        {products.map((ele, i) => {
          return (
            <tbody key={ele._id}>
              <tr>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.createdAt}</td>
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
      {prodModal ? <ModalView prodModal={prodModal} /> : null}
    </div>
  );
};

export default Products;
