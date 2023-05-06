import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experiences">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#portfolio">
        <AiOutlineProject />
      </a>
      <a href="#contact">
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
