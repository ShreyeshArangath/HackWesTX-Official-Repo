import React, { Component } from "react";
import Ahmed from "../assets/ahmed.jpg";
import Sahil from "../assets/sahil.jpg";
import Garret from "../assets/garret.png";
import Shruti from "../assets/shruti.jpeg";
import Samuel from "../assets/samuel.jpeg";
import Mary from "../assets/Mary.jpg";
import "../css/our-team.css";
import "../css/glitch.css";

export class AboutUs extends Component {
  render() {
    return (
      <div className="team-section">
        <h2 className="subtitle glitch" data-text="Our Team">
          Our Team
        </h2>
        <div className="team-container">
          <div className="team-1 ">
            <img src={Ahmed} alt="Director" />
            <p className="title glitch" data-text="Ahmed Bayoumi">
              Ahmed Bayoumi
            </p>
            <p>Lead Director</p>
          </div>

          <div className="team-2">
            <img src={Garret} alt="Logistics" />
            <p className="title glitch" data-text="Garret Carmouche">
              {" "}
              Garret Carmouche
            </p>
            <p>Head of Logistics</p>
          </div>

          <div className="team-3">
            <img src={Sahil} alt="Sponsorship" />
            <p className="title glitch" data-text="Sahil Shamdasani">
              {" "}
              Sahil Shamdasani
            </p>
            <p>Head of Sponsorship</p>
          </div>

          <div className="team-4">
            <img src={Shruti} alt="Marketing" />
            <p className="title glitch" data-text="Shruti Nagawekar">
              {" "}
              Shruti Nagawekar
            </p>
            <p>Head of Marketing</p>
          </div>
          <div></div>
          <div className="team-2">
            <img src={Samuel} alt="Finance" />
            <p className="title glitch" data-text="Samuel Adetunji">
              {" "}
              Samuel Adetunji
            </p>
            <p>Head of Finance</p>
          </div>
          <div className="team-3">
            <img src={Mary} alt="Hacker Experience" />
            <p className="title glitch" data-text="Mary Lee">
              {" "}
              Mary Lee
            </p>
            <p>Head of Hacker Experience</p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
