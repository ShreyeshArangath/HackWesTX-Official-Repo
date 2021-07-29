import React, { Component } from 'react'
import Ahmed from '../assets/ahmed.jpg'
import Oreoluwa from '../assets/oreoluwa.jpeg'
import Garret from '../assets/garret.png'
import Esteban from '../assets/esteban.jpeg'
import Leidy from '../assets/leidy.jpg'
import Style from '../css/our-team.css'
import Glitch from '../css/glitch.css'

export class AboutUs extends Component {
    render() {
        return (
            <div className="team-section" style={Style, Glitch}>
                <h2 className="subtitle glitch" data-text="Our Team">Our Team</h2>
                <div className="team-container">
                    <div className="team-1 ">
                        <img src={Ahmed} alt='Director' />
                        <p className="title glitch" data-text="Our Team">Ahmed Bayoumi</p>
                        <p>Lead Director</p>
                    </div>
                
                    <div className="team-2">
                        <img src={Garret} alt='Logistics' />
                        <p className="title glitch" data-text="Garret Carmouche"> Garret Carmouche</p>
                        <p>Head of Logistics</p>
                    </div>

                    <div className="team-3">
                        <img src={Oreoluwa} alt='Finance'/>
                        <p className="title glitch" data-text="Oreoluwa Coker"> Oreoluwa Coker</p>
                        <p>Head of Sponsorship</p>
                    </div>

                    <div className="team-4">
                        <img src={Esteban} alt='Marketing'/>
                        <p className="title glitch" data-text="Esteban Washington"> Esteban Washington</p>
                        <p>Head of Marketing</p>
                    </div>
                    <div></div>
                    <div className="team-4">
                        <img src={Leidy} alt='Marketing'/>
                        <p className="title glitch" data-text="Ryan Covington"> Ryan Covington</p>
                        <p>Head of Finance</p>
                    </div>
                    <div className="team-4">
                        <img src={Garret} alt='Marketing'/>
                        <p className="title glitch" data-text="Mary Lee"> Mary Lee</p>
                        <p>Head of Hacker Experience</p>
        .            </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default AboutUs
