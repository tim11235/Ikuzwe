import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";
import "./Home.css";

const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <div className="columns">
          <div className="column has-text-centered">
            <img src={profile} className="profile-image" alt="My profile" />
          </div>
          <div className="column">
            <h1 className="title is-1">I'M Ikuzwe Tim</h1>
            <h3 className="title is-3">Software Engineer - 2 Years</h3>
            <hr />

            <p className="about-me">
              A Fullstack developer who is passioned in solvings problems and building
              products.
            </p>
            <div className="columns">
              <div className="column">
                <Link
                  to="/resume"
                  className="button is-info is-large is-fullwidth"
                >
                  RESUME
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/contact"
                  className="button is-light is-large is-fullwidth"
                >
                  Contact
                </Link>
              </div>
            </div>
            <p className="social-icons">
              <a
                href="https://github.com/tim11235"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/MbagaT"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://facebook.com/tim.ikuzwe"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
