import React, { Component } from 'react'
import Advertising from '../assets/megaphone.svg'
import Test from '../assets/flask.svg'
import Recruit from '../assets/recruit.svg'
import Glitch from '../css/glitch-white.css'
import Packet from '../assets/hackwestx.pdf'
import Style from '../css/sponsorship.css'
import OurSponsors from './OurSponsors'
export class Sponsorship extends Component {
    render() {
        return (
            <div className="sponsorship-main" style={Style, Glitch}>
                <h2 className="subtitle glitch container" data-text="Sponsor Us">Sponsor Us!</h2>
                <p className="intro">Sponsoring a hackathon is a really good way to get in touch with best and brightest students there are within a college community and do 
                so in a casual and convenient environment.</p>
                <button type="submit"><a href={Packet} download> Download the packet!</a></button>
                <div class="sponsor-benefits">
                    <div class="benefit benefit-1">
                        <img src={Advertising}></img>
                        <p>Gain Awareness</p>
                    </div>
                    <div class="benefit benefit-2">
                        <img src={Recruit}></img>
                        <p>Recruit Developers</p>
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
