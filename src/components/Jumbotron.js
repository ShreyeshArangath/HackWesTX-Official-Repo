import React, { Component } from 'react'
import Logo from '../assets/screen.svg'

export class Navbar extends Component {
    render() {
        return (
            <header>
                <img src={Logo} />
                <h1>HackWes<span id="texas">TX</span></h1>
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
