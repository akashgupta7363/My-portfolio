import React from "react";
import "./services.css";
import { icons } from "./skillslist";

function Services() {
  return (
    <section id="services" className="services_section container">
      <div className="skills">
        {icons.map((icon, index) => {
          return (
            <div className="icon" key={index}>
              {icon}
            </div>
          );
        })}
      </div>

      {/* <h1 className="section_title"> Services</h1>
      <span className="section_subtitle">What I offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="" />
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Services;
