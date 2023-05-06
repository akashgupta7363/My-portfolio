import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/pic00.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Akash Kumar Gupta</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
        <HeaderSocials />
      </header>
    </>
  );
}

export default Header;
