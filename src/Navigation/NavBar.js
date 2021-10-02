import React from "react";
import { Route, withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../components/LandingComponents/Home";
import About from "../components/LandingComponents/About";
import ContactUs from "../components/LandingComponents/ContactUs";
import Dashboard from "../components/AfterLogin/DashboardFolder/Dashboard";
import Bills from "../components/Bills/Bills";
import Customers from "../components/AfterLogin/Customers";
import Products from "../components/AfterLogin/Products";
import Account from "../components/AfterLogin/Account";
import { userLog } from "../Redux/Actions/logActions";
import swal from "sweetalert";
import BillsView from "../components/Bills/BillsView";

const NavBar = (props) => {
  console.log("navba", props);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userLog());
    swal({
      title: "Logout",
      text: "Successfully Logged Out!",
      icon: "success",
      button: "ok",
    });
    props.history.push("/");
  };

  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "navajowhite",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            Sarvagya
          </a>
        </div>
        {localStorage.length > 0 ? (
          <div className="nav">
            <Link to="/dashboard">DashBoard</Link>|
            <Link to="/customers">Customers</Link>|
            <Link to="/products">Products</Link>|
            <Link to="/billsview">Bills View</Link>|
            <Link to="/bills">Generate Bills</Link>|
            <Link to="/account">Account</Link>|
            <Link onClick={handleLogout} to="/logout">
              Logout
            </Link>
          </div>
        ) : (
          <div className="nav" style={{ justifyContent: "space-around" }}>
            <Link to="/">Home</Link>|<Link to="/about">About</Link>|
            <Link to="/countact"> Countact us </Link>
          </div>
        )}
      </div>
      <div className="card" style={{ height: "100vh" }}>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/bills" component={Bills} />
        <Route path="/customers" component={Customers} />
        <Route path="/billsView" component={BillsView} />
        <Route path="/products" component={Products} />
        <Route path="/account" component={Account} />
      </div>
    </div>
  );
};

export default withRouter(NavBar);
