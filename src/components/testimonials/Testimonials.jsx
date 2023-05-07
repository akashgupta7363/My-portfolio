import React from "react";
import "./testimonials.css";
import av1 from "../../assets/avatar1.jpg";
import av2 from "../../assets/avatar2.jpg";
import av3 from "../../assets/avatar3.jpg";
import av4 from "../../assets/avatar4.jpg";

function Testimonials() {
  return (
    <section id="tesimonials">
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={av1} alt="avatar" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab
            aspernatur cupiditate, sapiente culpa quos aut veritatis
            voluptatibus vitae dolore ipsam a inventore?
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={av2} alt="avatar" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab
            aspernatur cupiditate, sapiente culpa quos aut veritatis
            voluptatibus vitae dolore ipsam a inventore?
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={av3} alt="avatar" />
          </div>{" "}
          <h5>Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab
            aspernatur cupiditate, sapiente culpa quos aut veritatis
            voluptatibus vitae dolore ipsam a inventore?
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={av4} alt="avatar" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab
            aspernatur cupiditate, sapiente culpa quos aut veritatis
            voluptatibus vitae dolore ipsam a inventore?
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
