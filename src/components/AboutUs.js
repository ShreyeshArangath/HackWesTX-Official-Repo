import React, { Component } from 'react'
import Shreyesh from '../assets/shreyesh.jpg'
import Ahmed from '../assets/ahmed.jpg'
import Neil from '../assets/neil.png'
import Stephen from '../assets/stephen.jpg'

export class AboutUs extends Component {
    state = {
        days: "",
        hours:"",
        minutes:"",
        seconds:""
    }
    eventTime = new Date("March 7, 2020 08:00:00").getTime()
    update = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = this.eventTime-now;
        const days = Math.floor(timeDifference/(1000*60*60*24));
        const hours = Math.floor(timeDifference%(1000*60*60*24)/(1000*60*60));
        const minutes = Math.floor(timeDifference%(1000*60*60)/(1000*60));
        const seconds = Math.floor(timeDifference%(1000*60)/1000);
        this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
        if (timeDifference<0){
            clearInterval(this.update);
        }

    }, 1000);
    render() {
        return (
            <div>
                <h2 className="subtitle">About Us</h2>
                <p className="intro">HackWesTX II is Texas Tech University's second student-run hackathon! This year, the hackathon will start Saturday, March 7th and end Sunday, March 8th. Exact schedule times are yet to be determined. The hackathon will last 24 hours total! We are developers who encourage each other to do better. It’s not just about writing code or programming hardware, it’s about making a positive impact in our community. We want to empower the next generation of learners that will change our world 
                and hackathons are a great opportunity to do just that!</p>

                <div className="countdown">
                    <p></p>
                    <p className="time time-number days" id="days">{this.state.days}</p>
                    <p className="time time-number hours">{this.state.hours}</p>
                    <p className="time time-number  minutes">{this.state.minutes}</p>
                    <p className="time time-number seconds">{this.state.seconds}</p>
                    <p></p>
                    <p></p>
                    <p className="time days">Days </p>
                    <p className="time hours">Hours </p>
                    <p className="time minutes">Minutes </p>
                    <p className="time seconds">Seconds </p>
                    <p></p>
                </div>
            
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
