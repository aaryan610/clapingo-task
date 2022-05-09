import React from "react";

//Common Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//End Common Components

// Pages
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Profile from "../pages/Profile/index";
// End Pages

const mainComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default mainComponent;
