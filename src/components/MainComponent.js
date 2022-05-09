import React from "react";

//Common Components
import { BrowserRouter as Router, Route } from "react-router-dom";
//End Common Components

// Pages
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Profile from "../pages/Profile/index";
// End Pages

const mainComponent = () => {
  return (
    <React.Fragment>
      <Dashboard />
      {/* <Login /> */}
      {/* <Profile /> */}
    </React.Fragment>
  );
};

export default mainComponent;
