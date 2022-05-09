import React, { useState } from "react";
import Navbar from "../../layouts/Navbar/index";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId == null || password == null)
      alert("Please fill in all the details");
    else {
      if (
        localStorage.getItem("User Id") === userId &&
        localStorage.getItem("Password") === password
      ) {
        navigate("/profile");
      } else {
        localStorage.setItem("User Id", userId);
        localStorage.setItem("Password", password);

        navigate("/");
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <section className="hero-section">
          <div className="content">
            <h1 className="heading">
              Login now to access all the{" "}
              <span className="text-primary">amazing features</span>
            </h1>
            <p className="text">
              Practice english conversation with excellent communicators across
              the country and speak like a PRO 😎.
            </p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="userId"
                  placeholder="User ID*"
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label htmlFor="userId">User ID*</label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password*"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password*</label>
              </div>
              <div className="input-group">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Login;
