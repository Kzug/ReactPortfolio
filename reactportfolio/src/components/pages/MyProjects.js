import React from "react";
//importing css file as a dependency
import "../../styles/MyProjects.css";
import comclo from "../../assets/comclo.png";
import bitcoin from "../../assets/bitcoin_screenshot.png";
import weatherapp from "../../assets/weatherapp2.png";

export default function MyProjects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section-title">
            Here are some of my <span className="text-purple">projects:</span>
          </h1>
          <ul className="project-list">
            <li className="project">
              <div className="project-container">
                <img
                  src={comclo}
                  className="project-img"
                  alt="community closet project"
                />
                <div className="project-description">
                  <h3 className="project-description-title">
                    Community Closet (Group Project)
                  </h3>
                  <h4 className="project-description-sub-title">
                    HTML, CSS, JavaScript, Node.JS, AWS S3, Multer, Heroku,
                    MySQL, Sequelize ORM, Handlebars
                  </h4>
                  <p className="project-description-para">
                    Community Closet is an application where users can post
                    clothing items they wish to give away. Other users who wish
                    to receive the items can comment on the listing to express
                    interest and arrange pickup. Images are stored in AWS S3
                    using Multer and the application is deployed on Heroku.
                  </p>
                  <div className="project-description-links">
                    <a
                      href="https://github.com/areitan/Community_Closet"
                      target="_blank"
                      className="project-description-link"
                    >
                      <span className="githubproj">View on Github</span>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-container">
                <img
                  src={bitcoin}
                  className="project-img"
                  alt="bitcoin project"
                />
                <div className="project-description">
                  <h3 className="project-description-title">
                    Bitcoin Tracker (Group Project)
                  </h3>
                  <h4 className="project-description-sub-title">
                    HTML, CSS, JavaScript, API, Local storage, D3
                  </h4>
                  <p className="project-description-para">
                    Bitcoin Tracker displays the bitcoin price in real time and
                    the current number of Bitcoin Core releases. The bitcoin
                    price for the last 30 days is displayed on a chart. The user
                    can switch between a line chart or candlestick chart by
                    clicking a button. This application uses an API from Github
                    and an API from CoinGecko.
                  </p>
                  <div className="project-description-links">
                    <a
                      href="https://github.com/Phoenix-Staley/cryptocurrency_tracker"
                      target="_blank"
                      className="project-description-link"
                    >
                      <span className="githubproj">View on Github</span>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-container">
                <img
                  src={weatherapp}
                  className="project-img"
                  alt="weather project"
                />
                <div className="project-description">
                  <h3 className="project-description-title">
                    Weather Dashboard (Individual Project)
                  </h3>
                  <h4 className="project-description-sub-title">
                    HTML, CSS, JavaScript, API, Local storage, Bootstrap
                  </h4>
                  <p className="project-description-para">
                    A weather dashboard that displays the current weather of a
                    city and the next five day forecast. It features dynamically
                    updated HTML and CSS and uses local storage to store
                    persistant data. It uses two third-party APIs provided by
                    OpenWeather.
                  </p>
                  <div className="project-description-links">
                    <a
                      href="https://github.com/Kzug/WeatherApp"
                      target="_blank"
                      className="project-description-link"
                    >
                      <span className="githubproj">View on Github</span>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
