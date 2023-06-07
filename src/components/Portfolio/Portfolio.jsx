import Videocast from "./Videocast";
import React from "react";
import "./portfolio.css";
import ss1 from "../../assets/videos/ss1.png";
import ss2 from "../../assets/videos/ss2.png";
import ss3 from "../../assets/videos/ss3.png";
import ss4 from "../../assets/videos/ss4.png";
import vid1 from "../../assets/videos/ewishmart.mp4";
import vid2 from "../../assets/videos/social.mp4";
import vid3 from "../../assets/videos/Tutor_s.mp4";
import vid4 from "../../assets/videos/notezip.mp4";
import { BsGithub } from "react-icons/bs";
import { RiSlideshowFill } from "react-icons/ri";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containerPortfolio">
        <div className="project pleft">
          <div className="video">
            <Videocast img={ss1} data={vid1} />
          </div>
          <div className="videoDesc">
            <h4 className="project_title">E-Wish-Mart</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">
              MERN stack, Tailwind css, Redux, socket.io
            </div>
            <div className="live">
              <div>
                <a
                  href="https://github.com/akashgupta7363/E-Wish-Mart"
                  target="_blank"
                >
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a target="_blank" href="https://e-wish-mart.onrender.com/">
                  Live Demo
                  <RiSlideshowFill style={{ marginLeft: "6px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project pright">
          <div className="videoDesc">
            <h4 className="project_title">Social-Chit-Chat</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">MERN stack, socket.io</div>
            <div className="live">
              <div>
                <a
                  href="https://github.com/akashgupta7363/Web-Chat-App"
                  target="_blank"
                >
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a target="_blank" href="https://socialchitchat.onrender.com/">
                  Live Demo
                  <RiSlideshowFill style={{ marginLeft: "6px" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="video">
            <Videocast img={ss2} data={vid2} />
          </div>
        </div>
        <div className="project pleft">
          <div className="video">
            <Videocast img={ss3} data={vid3} />
          </div>
          <div className="videoDesc">
            <h4 className="project_title">Tutor's Den</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">MERN stack, Tailwind CSS, Redux</div>
            <div className="live">
              <div>
                <a
                  href="https://github.com/akashgupta7363/College-Project"
                  target="_blank"
                >
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a target="_blank" href="https://tutors-den.onrender.com/">
                  Live Demo
                  <RiSlideshowFill style={{ marginLeft: "6px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project pright">
          <div className="videoDesc">
            <h4 className="project_title">Notes Ziper</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">MERN stack</div>
            <div className="live">
              <div>
                <a
                  href="https://github.com/akashgupta7363/note-zipper"
                  target="_blank"
                >
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a
                  target="_blank"
                  href="https://notes-zipper-app.onrender.com/"
                >
                  Live Demo
                  <RiSlideshowFill style={{ marginLeft: "6px" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="video">
            <Videocast img={ss4} data={vid4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
