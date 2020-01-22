import React, { Component } from 'react'
import Style from '../css/about-us.css'
import Glitch from '../css/glitch-white.css'
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
            <div style={AboutUs, Style}>
                <h2 className="subtitle glitch-white" data-text="About Us">About Us</h2>
                <p className="intro about-intro">HackWesTX II is Texas Tech University's second student-run hackathon! This year, the hackathon will start Saturday, March 7th and end Sunday, March 8th. Exact schedule times are yet to be determined. The hackathon will last 24 hours total! We are developers who encourage each other to do better. It’s not just about writing code or programming hardware, it’s about making a positive impact in our community. We want to empower the next generation of learners that will change our world 
                and hackathons are a great opportunity to do just that!</p>
                
                <div className="countdown">
                    <p></p>
                    <p className="time time-number days glitch-white" data-text={this.state.days} id="days">{this.state.days}</p>
                    <p className="time time-number hours glitch-white" data-text={this.state.hours}>{this.state.hours}</p>
                    <p className="time time-number  minutes glitch-white" data-text={this.state.minutes}>{this.state.minutes}</p>
                    <p className="time time-number seconds glitch-white" data-text={this.state.seconds}>{this.state.seconds}</p>
                    <p></p>
                    <p></p>
                    <p className="time time-text days">Days </p>
                    <p className="time time-text hours">Hours </p>
                    <p className="time time-text minutes">Minutes </p>
                    <p className="time time-text seconds">Seconds </p>
                    <p></p>
                </div>

                {/* <div className="sponsors-list" >
                    <h2 className="subtitle glitch-white" data-text="Our Sponsors">Our Sponsors</h2>
                </div> */}
            </div>
        )
    }
}

export default AboutUs
