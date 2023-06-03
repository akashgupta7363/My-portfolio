import Videocast from "./Videocast";
import React from "react";
import "./portfolio.css";
import vid4 from "../../assets/videos/notezip.mp4";
import ss2 from "../../assets/videos/ss2.png";
import vid2 from "../../assets/videos/social.mp4";

import { BsGithub } from "react-icons/bs";
import ss4 from "../../assets/videos/ss4.png";
import { RiSlideshowFill } from "react-icons/ri";

function Portfolio() {
  return (
    // <section id="portfolio">
    //   {" "}
    //   <h5>My Recent Work</h5>
    //   <h2>Portfolio</h2>
    //   <div className="container portfolio_container">
    //     <Fade duration={3000}>
    //       <article className="portfolio_item">
    //         <div className="portfolio_item-image">
    //           <img src={img1} alt="port1" />
    //         </div>
    //         <h3> portfolio item title</h3>
    //         <div className="portfolio_item-cta">
    //           <a href="" className="btn" target="_blank">
    //             Github
    //           </a>
    //           <a href="" className="btn btn-primary" target="_blank">
    //             Live Demo
    //           </a>
    //         </div>
    //       </article>
    //     </Fade>
    //     <Fade duration={3000}>
    //       <article className="portfolio_item">
    //         <div className="portfolio_item-image">
    //           <img src={img2} alt="port1" />
    //         </div>
    //         <h3> portfolioitem title</h3>
    //         <div className="portfolio_item-cta">
    //           <a href="" className="btn" target="_blank">
    //             Github
    //           </a>
    //           <a href="" className="btn btn-primary" target="_blank">
    //             Live Demo
    //           </a>
    //         </div>
    //       </article>
    //     </Fade>
    //     <Fade duration={3000}>
    //       <article className="portfolio_item">
    //         <div className="portfolio_item-image">
    //           <img src={img3} alt="port1" />
    //         </div>
    //         <h3> portfolioitem title</h3>
    //         <div className="portfolio_item-cta">
    //           <a href="" className="btn" target="_blank">
    //             Github
    //           </a>
    //           <a href="" className="btn btn-primary" target="_blank">
    //             Live Demo
    //           </a>
    //         </div>
    //       </article>
    //     </Fade>
    //     <Fade duration={3000}>
    //       <article className="portfolio_item">
    //         <div className="portfolio_item-image">
    //           <img src={img4} alt="port1" />
    //         </div>
    //         <h3> portfolioitem title</h3>
    //         <div className="portfolio_item-cta">
    //           <a href="" className="btn" target="_blank">
    //             Github
    //           </a>
    //           <a href="" className="btn btn-primary" target="_blank">
    //             Live Demo
    //           </a>
    //         </div>
    //       </article>
    //     </Fade>
    //   </div>
    // </section>
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containerPortfolio">
        <div className="project">
          <div className="video">
            <Videocast img={ss4} data={vid4} />
          </div>
          <div className="videoDesc">
            <h4 className="project_title">Task Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">Node.js express mongodb</div>
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
        </div>
        <div className="project">
          <div className="videoDesc">
            <h4 className="project_title">Task Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">Node.js express mongodb</div>
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
            <Videocast img={ss2} data={vid2} />
          </div>
        </div>
        <div className="project">
          <div className="video">
            <Videocast img={ss4} data={vid4} />
          </div>
          <div className="videoDesc">
            <h4 className="project_title">Task Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">Node.js express mongodb</div>
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
        </div>
        <div className="project">
          <div className="videoDesc">
            <h4 className="project_title">Task Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laudantium eius voluptatem eos officia. Magni, incidunt?
              Voluptatum dolores iste odit qui expedita eveniet laboriosam atque
              dolorem libero, corrupti, consequuntur provident!
            </p>
            <div className="techstack">Node.js express mongodb</div>
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
