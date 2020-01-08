import React, { Component } from 'react'
import Shreyesh from '../assets/shreyesh.jpg'
import Ahmed from '../assets/ahmed.jpg'
import Neil from '../assets/neil.png'
import Stephen from '../assets/stephen.jpg'
import Style from '../css/our-team.css'

export class AboutUs extends Component {
    render() {
        return (
            <div className="team-section" style={Style}>
                <h2 className="subtitle">Our Team</h2>
                <div className="team-container">
                    <div className="team-1 ">
                        <img src={Shreyesh} alt='Director' />
                        <p className="title">Shreyesh Arangath</p>
                        <p></p>
                    </div>
                
                    <div className="team-2">
                        <img src={Ahmed} alt='Logistics' />
                        <p className="title"> Ahmed Bayoumi</p>
                        <p></p>
                    </div>

                    <div className="team-3">
                        <img src={Neil} alt='Finance'/>
                        <p className="title"> Neil Maro</p>
                        <p></p>
                    </div>

                    <div className="team-4">
                        <img src={Stephen} alt='Marketing'/>
                        <p className="title"> Stephen Joel</p>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
