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
        <h3 className="heading">
          ⚡I design, develop and code beautifully simple things, and I love
          what I do.⚡
        </h3>
        <div className="project pleft">
          <div className="video">
            <Videocast img={ss1} data={vid1} />
          </div>
          <div className="videoDesc">
            <h4 className="project_title">E-Wish-Mart</h4>
            <p>
              Developing a fully functional multi-vendor eCommerce website,
              integrating payment gateways such as PayPal.
              <br /> Creating an intuitive vendor dashboard, empowering sellers
              to manage their inventory, and track sales. <br />
              Chat system where buyers and sellers can communicate effectively,
              and search and filtering functionality, Product Catalog, Shopping
              Cart and Checkout, Order Processing and Inventory Management, User
              Management
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
              Developed a real-time chat web application using Utilized
              Socket.IO to establish a real-time, bidirectional communication
              channel, enabling instant messaging and updating of chat rooms.
              User Authentication and Management, Profile setup, Creating Group,
              editing members list anytime by admin Typing indicator in the
              chatbox, real-time notifications from the sender.
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
              Developed a web app for Tutor and student management module to
              smoothen the education experience for the students. Three
              entities- admin, faculty, and students. Admin has facilities like
              assigning faculty, adding students, and pushing notice. Faculties
              can keep track of students' attendance and can create tests and
              upload marks. Students can view all of this anytime.
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
              Developed a website where anyone can log in and keep their notes
              in one place safely. Login, User authentication, profile set-up.
              Users can add, edit, update, and delete the notes anytime.
              <br /> Users can categorize their notes by applying tags and
              labels, making it easier to locate specific information and create
              a structured organization system.
            </p>
            <div className="techstack">MERN stack, Redux</div>
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
