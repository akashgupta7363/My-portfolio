import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_Sign">
        &lt;<span className="footer_logo">Akash Kumar Gupta </span>&nbsp; /&gt;
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#experiences">Qualification</a>
        </li>
        <li>
          <a href="#Services">Skills & Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/akash-kumar-gupta-576337139/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/akashgupta7363?tab=overview&from=2023-05-01&to=2023-05-0 6"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a href="https://twitter.com/Akash_Gupta_7" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com/ig_akash_gupta_/" target="_blank">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; AKASH Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
