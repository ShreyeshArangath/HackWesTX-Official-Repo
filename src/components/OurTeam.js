import React, { Component } from 'react'
import Shreyesh from '../assets/shreyesh.jpg'
import Ahmed from '../assets/ahmed.jpg'
import Neil from '../assets/neil.png'
import Stephen from '../assets/stephen.jpg'
import Style from '../css/our-team.css'
import Glitch from '../css/glitch.css'

export class AboutUs extends Component {
    render() {
        return (
            <div className="team-section" style={Style, Glitch}>
                <h2 className="subtitle glitch" data-text="Our Team">Our Team</h2>
                <div className="team-container">
                    <div className="team-1 ">
                        <img src={Shreyesh} alt='Director' />
                        <p className="title glitch" data-text="Our Team">Shreyesh Arangath</p>
                        <p>Lead Director</p>
                    </div>
                
                    <div className="team-2">
                        <img src={Ahmed} alt='Logistics' />
                        <p className="title glitch" data-text="Ahmed Bayoumi"> Ahmed Bayoumi</p>
                        <p>Head of Logisitics</p>
                    </div>

                    <div className="team-3">
                        <img src={Neil} alt='Finance'/>
                        <p className="title glitch" data-text="Neil Maro"> Neil Maro</p>
                        <p>Head of Finance</p>
                    </div>

                    <div className="team-4">
                        <img src={Stephen} alt='Marketing'/>
                        <p className="title glitch" data-text="Stephen Joel"> Stephen Joel</p>
                        <p>Head of Marketing</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
