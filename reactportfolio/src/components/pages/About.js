import React from "react";
import profilepic from "../../assets/PXL_20220614_180601661.PORTRAIT_2.jpg";
import "../../styles/About.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../assets/ResumeKierstenZug.pdf";

library.add(faLinkedin, faGithub, faEnvelope, faFilePdf);

export default function About() {
  return (
    <div>
      <section id="about-me">
        <div className="personal-logo">Kiersten Zug</div>

        <div className="flex flex-1">
          <div className="about-me-info row">
            <div className="about-me-info-container">
              <figure className="about-me-picture-mask">
                <img
                  src={profilepic}
                  className="about-me-picture"
                  alt="profile pic"
                />
              </figure>
              <h1 className="about-me-info-title">
                Hi! I'm <span className="text-bluegreen">Kiersten.</span>
              </h1>
              <p className="about-me-info-para">
                I'm a<strong className="text-bluegreen"> web developer</strong>{" "}
                excited to make a difference in the world.
              </p>

              <div className="about-me-links">
                <a
                  href="https://www.linkedin.com/in/kiersten-zug-124276b8/"
                  className="about-me-link"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <a href="https://github.com/Kzug" className="about-me-link">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a
                  href="mailto:kierstenzug@gmail.com"
                  className="about-me-link"
                >
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </a>
                <a href={resume} target="_blank" className="about-me-link">
                  <FontAwesomeIcon icon="fa-solid fa-file-pdf" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
