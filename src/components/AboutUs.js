import React, { Component } from 'react'
import Shreyesh from '../assets/shreyesh.jpg'
import Ahmed from '../assets/ahmed.jpg'
import Neil from '../assets/neil.png'
import Stephen from '../assets/stephen.jpg'

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <h2 className="subtitle">About Us</h2>
                <p className="intro">HackWesTX II is Texas Tech University's second student-run hackathon! This year, the hackathon will start Saturday, March 7th and end Sunday, March 8th. Exact schedule times are yet to be determined. The hackathon will last 24 hours total! We are developers who encourage each other to do better. It’s not just about writing code or programming hardware, it’s about making a positive impact in our community. We want to empower the next generation of learners that will change our world 
                and hackathons are a great opportunity to do just that!</p>
            
                <div className="team-container">
                    <div className="team-1">
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
