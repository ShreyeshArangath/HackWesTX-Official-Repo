import React, { Component } from 'react'
import Logo from '../assets/screen.svg'

export class Navbar extends Component {
    render() {
        return (
            <header>
                <img src={Logo} />
                <h1>HackWesTX</h1>
                <p>March 7th - March 8th</p>
                <p>Texas Tech - Innovation Hub</p>
                <div>
                    <button type="button">Register now!</button>
                </div>
            </header>
        )
    }
}

export default Navbar
