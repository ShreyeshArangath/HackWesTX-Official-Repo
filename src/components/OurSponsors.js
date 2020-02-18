import React, { Component } from 'react'
import Sponsor from './Sponsors.js'
import LEDA from '../assets/LEDA.png'
import StickerMule from '../assets/sticker-mule-logo-light-bg.svg'
import ParkEast from '../assets/park_east.png'
import TylerTech from '../assets/tyler-tech.png'
import SmoothFusion from '../assets/smooth-fusion.png'
import Cognizant from '../assets/cognizant-no-bg.png'

export class OurSponsors extends Component {
    render() {
        return (
            <div className="grid">
                <Sponsor type="platinum" name= {Cognizant} website="https://www.cognizant.com/"></Sponsor>
                <Sponsor type= "platinum" name={LEDA} website="https://lubbockeda.org/"></Sponsor>
                <Sponsor type="platinum" name= {SmoothFusion} website="https://smoothfusion.com/"></Sponsor>
                <Sponsor type="tyler" name= {TylerTech} website="https://www.tylertech.com/"></Sponsor>
                <Sponsor type="platinum" name= {ParkEast} website="https://www.parkeastliving.com"></Sponsor>
                <Sponsor type= "platinum" name={StickerMule} website="http://hackp.ac/mlh-stickermule-hackathons"></Sponsor>
            </div>
        )
    }
}

export default OurSponsors
