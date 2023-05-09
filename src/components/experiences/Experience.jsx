import React, { useState } from "react";
import "./experience.css";

function Experience() {
  const [toggleState, settoggleState] = useState(0);
  return (
    <section id="experiences">
      <h5>My Personal Journey</h5>
      <h2>Qualification</h2>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => settoggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => settoggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Web Developmnt</h3>
                <span className="qualification_subtitle">
                  SurendraInstitute of Engineering & Management
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2019-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="Qualification_title"> Art Director</h3>
                <span className="qualification_subtitle">
                  SurendraInstitute of Engineering & Management
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2017-2018
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> Backend</h3>
                <span className="qualification_subtitle">
                  SurendraInstitute of Engineering & Management
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2016-2018
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="Qualification_title"> Framer Motion</h3>
                <span className="qualification_subtitle">
                  SurendraInstitute of Engineering & Management
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022-2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bug Management</h3>
                <span className="qualification_subtitle">
                  Exam practice -Remote
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2019-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="Qualification_title">Content Managment</h3>
                <span className="qualification_subtitle">Exam Practice</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022-22
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
