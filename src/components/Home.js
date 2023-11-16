import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Home = () => (
  <Fragment>
      <Helmet><title>Quiz App page</title></Helmet>
  <div id="home">
    <section>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" className="marquee-text">
          Bharath Niketan Engineering College
        </marquee>
      </div>


      <h1>Quiz Application</h1>
      <div className="play-button-container ">
            <Link to="/play/instruction" className="play-button">
              Play
            </Link>
      </div>
      <div className="auth-container ">
        <Link to="/login" id="login-btn" className="auth-button">
          Login
        </Link>
        <Link to="/register" id="sign-btn" className="auth-button">
          Register
        </Link>
      </div>
    </section>
  </div>
  </Fragment>
);

export default Home;
