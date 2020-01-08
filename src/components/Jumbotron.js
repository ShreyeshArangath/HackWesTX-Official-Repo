import React, { Component } from 'react'
import Logo from '../assets/screen.svg'
import Glitch from '../css/glitch.css'
import Style from '../css/jumbotron.css'
export class Navbar extends Component {
    render() {
        return (
            <header style={Style, Glitch}>
                <img src={Logo} />
                <div className="hackwestx">
                    <h1 className="glitch" data-text="HackWesTX">HackWes<span id="texas">TX</span></h1>
                </div>
                <p>March 7th - March 8th</p>
                <p>Texas Tech - Innovation Hub</p>
                <div>
                    <button type="button"><a href="https://forms.app/hackwestx/registration">Register now!</a></button>
                </div>
            </header>
        )
    }
}

export default Navbar
