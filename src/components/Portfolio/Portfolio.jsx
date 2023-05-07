import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      {" "}
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1} alt="port1" />
          </div>
          <h3> portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2} alt="port1" />
          </div>
          <h3> portfolioitem title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3} alt="port1" />
          </div>
          <h3> portfolioitem title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4} alt="port1" />
          </div>
          <h3> portfolioitem title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
