import React, { useState } from "react";
import "./services.css";
import { icons } from "./skillslist";
import { motion } from "framer-motion";

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="services" className="services_section container">
      <h5>What I do</h5>
      <h2>Skills & Services</h2>
      <div className="headingskills">
        <h2>
          ⚡CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK ⚡
        </h2>
      </div>

      <div className="skills">
        {icons.map((icon, index) => {
          return (
            <motion.div
              className="skills_box"
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255 255 255)",
                color: "rgb(77, 181, 255)",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
            >
              <div className="icon" key={index}>
                {icon.logo}
              </div>
              <div className="skills_title">{icon.name}</div>
            </motion.div>
          );
        })}
      </div>

      {/* services part */}

      <div className="servicesPart">
        <div className="headingskills">
          <h2>⚡What do I offer ⚡</h2>
        </div>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon" />
              <h3 className="services_title">
                Front-end <br /> Development
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  className="uil uil-times services_modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services_modal-title"> Front-end Development</h3>
                <p className="services_modal-description">
                  Services with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Web Page development.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Design and mockups of product for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon" />
              <h3 className="services_title">
                Full Stack <br /> Development
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"
                ></i>
                <h3 className="services_modal-title">Full Stack Development</h3>
                <p className="services_modal-description">
                  Services with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Web Page development.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Design and mockups of product for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon" />
              <h3 className="services_title">
                Back-end <br /> Development
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  className="uil uil-times services_modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services_modal-title">Back-end Development</h3>
                <p className="services_modal-description">
                  Services with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Web Page development.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Design and mockups of product for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
