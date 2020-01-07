import React, { Component } from 'react'
import Advertising from '../assets/megaphone.svg'
import Test from '../assets/flask.svg'
import Recruit from '../assets/recruit.svg'

export class Sponsorship extends Component {
    render() {
        return (
            <div className="sponsorship-main">
                <h2 className="subtitle">Sponsor Us!</h2>
                <p className="intro">Sponsoring a hackathon is a really good way to get in touch with best and brightest students there are within a college community and do 
                so in a casual and convenient environment.</p>
                <button type="submit"><a href="../assets/hackwestx.pdf" download> Download the packet!</a></button>
                <div class="sponsor-benefits">
                    <div class="benefit benefit-1">
                        <img src={Advertising}></img>
                        <p>Gain Student Awareness</p>
                    </div>
                    <div class="benefit benefit-2">
                        <img src={Recruit}></img>
                        <p>Recruit student developers</p>
                    </div>
                    <div class="benefit benefit-3">
                        <img src={Test}></img>
                        <p>Test APIs</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponsorship;
