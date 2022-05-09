import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <img
          src="./assets/images/logo.png"
          className="logo"
          alt="Clapingo Logo"
        />
        <div className="links">
          <a href="#">Plans & Pricing</a>
          <a href="#">Teach with us</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Kids</a>
        </div>
        <a href="/login" className="login-btn">
          <i className="fas fa-user"></i>&nbsp;&nbsp;Login
        </a>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
