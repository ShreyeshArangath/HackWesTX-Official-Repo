import React, { Component, Fragment } from 'react'
import Sponsor from './Sponsors.js'
import LEDA from '../assets/LEDA.png'
import StickerMule from '../assets/sticker-mule-logo-light-bg.svg'
import ParkEast from '../assets/park_east.png'
import TylerTech from '../assets/tyler-tech.png'
import SmoothFusion from '../assets/smooth-fusion.png'
import Cognizant from '../assets/cognizant-no-bg.png'
import GroupNIRE from '../assets/GroupNire__4C_Reg.jpg'
import RISA from '../assets/risa.png'

export class OurSponsors extends Component {
    render() {
        return (
         <Fragment>{/* TODO - Past by business here */}
             <div className="grid-2">
                <Sponsor type="platinum" name= {Cognizant} website="https://www.cognizant.com/"></Sponsor>
                <Sponsor type="platinum" name= {GroupNIRE} website="https://groupnire.com/"></Sponsor>
                <Sponsor type= "platinum" name={LEDA} website="https://lubbockeda.org/"></Sponsor>
            </div>
            <div className="grid">
                <Sponsor type="gold" name= {SmoothFusion} website="https://smoothfusion.com/"></Sponsor>
                <Sponsor type="tyler" name= {TylerTech} website="https://www.tylertech.com/"></Sponsor>
                <Sponsor type="gold" name= {ParkEast} website="https://www.parkeastliving.com"></Sponsor>
                <Sponsor type= "gold" name={StickerMule} website="http://hackp.ac/mlh-stickermule-hackathons"></Sponsor>
                <Sponsor type= "risa" name={RISA} website="https://www.thisisrisa.org/"></Sponsor>
            </div>
         </Fragment>   
            
        )
    }
}

export default OurSponsors
