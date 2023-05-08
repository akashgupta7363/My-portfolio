import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9jpcayq",
        "template_iwknzdu",
        form.current,
        "rzsbjhktXduOGrUy1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Reach Out to me!</h5>
      <h2>Contact Me</h2>
      <div className="contact_container container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>akashgupta7363@gmail.com</h5>
            <a href="mailto:akashgupta7363@gmail.com" target="_blank">
              Write me <i className="bx bx-right-arrow-alt"></i>
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>ig_akash_gupta_</h5>
            <a href="https://ig.me/m/ig_akash_gupta_" target="_blank">
              Write me <i className="bx bx-right-arrow-alt"></i>
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>Akash</h5>
            <a href="https://wa.me/+917363033449" target="_blank">
              Write me <i className="bx bx-right-arrow-alt"></i>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Insert Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
