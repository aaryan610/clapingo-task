import React from "react";
import Navbar from "../../layouts/Navbar/index";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  const handeLogOut = () => {
    localStorage.setItem("User Id", null);
    localStorage.setItem("Password", null);

    navigate("/");
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="profile-container">
        <section className="hero-section">
          <div className="content">
            <h1 className="heading">
              You are already <span className="text-primary">logged in.</span>
            </h1>
            <div className="buttons">
              <a
                href="javascript:void(0);"
                className="btn-primary"
                onClick={handeLogOut}
              >
                Log out
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Profile;
