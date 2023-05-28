import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { BsGithub } from "react-icons/bs";
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
          <div className="video"></div>
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
                <a href="">
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Live Demo
                  <RiSlideshowFill />
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
                <a href="">
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Live Demo
                  <RiSlideshowFill />
                </a>
              </div>
            </div>
          </div>
          <div className="video"></div>
        </div>
        <div className="project">
          <div className="video"></div>
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
                <a href="">
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Live Demo
                  <RiSlideshowFill />
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
                <a href="">
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Live Demo
                  <RiSlideshowFill />
                </a>
              </div>
            </div>
          </div>
          <div className="video"></div>
        </div>

        <div className="project">
          <div className="video"></div>
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
                <a href="">
                  code <BsGithub />
                </a>
              </div>
              <div>
                {" "}
                <a href="">
                  Live Demo
                  <RiSlideshowFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
