import React, { Component, Fragment } from "react";
import Sponsor from "./Sponsors.js";
import RedManta from "../assets/sponsors/redmanta.png";
import Agrisompo from "../assets/sponsors/agrisompo.jpg";
import LEDA from "../assets/sponsors/LEDA.png";
import CipherTech from "../assets/sponsors/ciphertech.png";
import Electrical from "../assets/sponsors/ece.jpg";

export class OurSponsors extends Component {
  render() {
    return (
      <Fragment>
        <div className="sponsors-list">
          {/* Add more recent sponsors */}
          <h2 className="subtitle glitch-white" data-text="Our Sponsors">
            Our Sponsors
          </h2>
        </div>
        <div className="grid-2">
          <Sponsor
            type="platinum"
            name={RedManta}
            website="https://www.redmanta.games/"
          ></Sponsor>
          <Sponsor
            type="platinum"
            name={Agrisompo}
            website="https://www.agrisompo.com/"
          ></Sponsor>
        </div>
        <div className="grid">
          <Sponsor
            type="gold"
            name={LEDA}
            website="https://lubbockeda.org/"
          ></Sponsor>
          <Sponsor
            type="gold"
            name={CipherTech}
            website="https://www.ciphertechsolutions.com/"
          ></Sponsor>
          <Sponsor
            type="gold"
            name={Electrical}
            website="https://www.depts.ttu.edu/ece/"
          ></Sponsor>
        </div>
      </Fragment>
    );
  }
}

export default OurSponsors;
