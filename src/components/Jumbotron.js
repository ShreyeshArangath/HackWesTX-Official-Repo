import React, { Component } from "react";
import Logo from "../assets/screen.svg";
import Glitch from "../css/glitch.css";
import Style from "../css/jumbotron.css";
export class Navbar extends Component {
  render() {
    return (
      <header
        style={(Style, Glitch)}
        id="jumbo"
        className="jumbo"
        ref={this.vantaRef}
      >
        <img src={Logo} alt="HackWesTX Logo" />
        <div className="hackwestx">
          <h1 className="glitch" data-text="HackWesTX">
            HackWes<span id="texas">TX</span>
          </h1>
        </div>
        <p>February 25th - February 26th</p>
        <p>Innovation Hub, Lubbock</p>
        <div>
          <button type="button">
            <a
              href="https://my.forms.app/hackwestxforms/hackwestx-registration-spring23"
              target="blank"
            >
              Register now!
            </a>
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
