import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  const handle = (targ) => {
    setActiveNav(targ);
  };
  return (
    <nav>
      <a
        href="#"
        onClick={() => handle("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handle("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        onClick={() => handle("#experiences")}
        className={activeNav === "#experiences" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handle("services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => handle("portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        onClick={() => handle("contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
