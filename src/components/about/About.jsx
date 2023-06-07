import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

import codingperson from "../../assets/codingPerson.json";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import Lottie from "lottie-react";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="about_container">
        <div className="about_me">
          <Fade left duration={1000}>
            <div className="about_me-image">
              <Lottie animationData={codingperson} />
            </div>
          </Fade>
        </div>
        <Fade right duration={1000}>
          <div className="container about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ Years working</small>
              </article>

              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
              <article className="about_card">
                <BiSupport className="about_icon" />
                <h5>Support</h5>
                <small>Online 24/7</small>
              </article>
            </div>
            <p className="para">
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I’m a fast learner, able to pick up new skills and
              juggle different projects and roles with relative ease. I prefer
              to keep learning, continue challenging myself, and do interesting
              things that matter.
              <br />I work to make a better web; one that is fast, easy to use,
              beautiful, accessible to all, and frustration-free. In my spare
              time I enjoy DIY, gaming and building my own projects.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
