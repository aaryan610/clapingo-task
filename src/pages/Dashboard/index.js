import React from "react";
import Navbar from "../../layouts/Navbar/index";
import "./dashboard.css";

const dashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <section className="hero-section">
          <div className="content">
            <h1 className="heading">
              Hone your english speaking skills over{" "}
              <span className="text-primary">one-on-one</span> video call
            </h1>
            <p className="text">
              Practice english conversation with excellent communicators across
              the country and speak like a PRO 😎.
            </p>
            <div className="buttons">
              <a href="#" className="btn-primary">
                Book a trial
              </a>
              <a href="#" className="btn-secondary">
                Download our app
              </a>
            </div>
          </div>
          <div className="image">
            <div className="box"></div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats">
            <div className="stats-cards">
              <div className="top">
                <div className="single-card">
                  <div className="number">
                    50K<span className="text-primary">+</span>
                  </div>
                  <div className="title">Mobile Downloads</div>
                </div>
                <div className="single-card">
                  <div className="number">
                    80K<span className="text-primary">+</span>
                  </div>
                  <div className="title">Happy Learners</div>
                </div>
              </div>
              <div className="bottom">
                <div className="single-card">
                  <div className="number">
                    53K<span className="text-primary">+</span>
                  </div>
                  <div className="title">Sessions per month</div>
                </div>
                <div className="single-card">
                  <div className="number">
                    200<span className="text-primary">+</span>
                  </div>
                  <div className="title">Speakers around the globe</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h4 className="subheading text-primary">Book a trial</h4>
            <h2 className="heading">
              Start your English speaking journey today!
            </h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
              repellendus neque explicabo, natus cupiditate? Dolorem dolores
              eveniet facilis deserunt?
            </p>
            <div className="buttons">
              <a href="#" className="btn-primary">
                Book a trial
              </a>
            </div>
          </div>
        </section>
        <section className="offer-section">
          <h2 className="heading">What we offer?</h2>
          <div className="cards">
            <div className="single-card">
              <img src="./assets/images/offer-1.png" alt="Offer 1" />
              <div className="content">
                <h3 className="title">Customised Curriculum</h3>
                <p className="text">
                  Customised sessions and module for Basic, Intermediate and
                  Advanced learners.
                </p>
              </div>
            </div>
            <div className="single-card">
              <img src="./assets/images/offer-2.png" alt="Offer 2" />
              <div className="content">
                <h3 className="title">Experimental Learning</h3>
                <p className="text">
                  Do not study English, rather consume and use it.
                </p>
              </div>
            </div>
            <div className="single-card">
              <img src="./assets/images/offer-3.png" alt="Offer 3" />
              <div className="content">
                <h3 className="title">Shadowing Method</h3>
                <p className="text">
                  Think and speak in English rather than translating it from
                  mother tongue.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-section">
          <h2 className="heading">How it works?</h2>
          <div className="grid">
            <div className="cards">
              <div className="single-card">
                <h3 className="title">1. Create Account</h3>
                <p className="text">
                  Create your account using phone number or email and take a
                  free trial at ₹1.
                </p>
              </div>
              <div className="single-card">
                <h3 className="title">3. Select time slot</h3>
                <p className="text">
                  Subscribe & select any time slot between 10 AM to 12 midnight.
                </p>
              </div>
            </div>
            <div className="mobile">
              <img src="./assets/images/mobile.png" alt="Mobile" />
              <div className="ellipse"></div>
            </div>
            <div className="cards">
              <div className="single-card">
                <h3 className="title">2. Subscribe</h3>
                <p className="text">
                  Choose your preferred duration and select subscription package
                  for your sessions.
                </p>
              </div>
              <div className="single-card">
                <h3 className="title">4. You are done</h3>
                <p className="text">
                  That's it! Start practicing and reach your learning goal in
                  speaking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default dashboard;
