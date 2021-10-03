import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGettingAccount } from "../../Redux/Actions/loginActions";

const Account = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGettingAccount());
  }, [dispatch]);
  return <div></div>;
};

export default Account;
