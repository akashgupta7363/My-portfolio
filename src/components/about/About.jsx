import React from "react";
import "./about.css";
import ME from "../../assets/IMG_20230506_211022_adobe_express.png";
import { FaAward } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="my pic" />
          </div>
        </div>
        <div className="about_contents">
          <div className="about_cards">
            <article className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
