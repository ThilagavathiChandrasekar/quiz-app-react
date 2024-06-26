import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import { FaBook } from "react-icons/fa";
const Home = () => (
  <Fragment>
      <Helmet><title>Quiz App page</title></Helmet>
  <div id="home">
    <section>
      <div>
        <FaBook className="book-icon" />
        <h1 data-aos="zoom-in">Quiz Application</h1>
        <p className="start-content" data-aos="zoom-in"> Start where you are. <br /> Do what you can. <br /> "ALL THE BEST!"</p>
      </div>
      <div className="play-button-container ">
            <Link to="np/play/instruction" className="play-button">
              Play
            </Link>
      </div>
    </section>
  </div>
  </Fragment>
);

export default Home;
