import React, { Component } from 'react'
import Advertising from '../assets/megaphone.svg'
import Recruit from '../assets/human-resources.svg'
import Test from '../assets/flask.svg'

export class Sponsorship extends Component {
    render() {
        return (
            <div>
                <h2 className="subtitle">Sponsor Us!</h2>

                <div className="sponsor-container trigger">
                    <img src={Advertising} className="a" alt='advert'></img>
                    <p className="b"> Increase brand awareness among students</p>
                </div>     

                <div className="sponsor-container-reverse">
                    <img className="c" src={Recruit} />
                    <p className="d ">Recruit talented developers</p>
            
                 </div>


        <div className="sponsor-container remove-border">
           
                <img src={Test} className="a"/>
                <p className="b">Test your APIs and give demos</p>
               
        </div> 
        
        <div>
            <button type="button"><a href="../assets/hackwestx.pdf" download>Download the packet!</a></button>
        </div>

            </div>
        )
    }
}

export default Sponsorship
