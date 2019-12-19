import React, { Component } from 'react'
import Advertising from '../assets/megaphone.png'
import Recruit from '../assets/human-resources.svg'
import Test from '../assets/flask.svg'

export class Sponsorship extends Component {
    render() {
        return (
            <div>
                <h2 className="subtitle">Sponsor Us!</h2>

                <div className="sponsor-container trigger">
                    <img src={Advertising} alt='advert'></img>
                    <p>Increase brand awareness among students</p>
                </div>     

                <div className="sponsor-container-reverse">
                    <img className="flipped" src={Recruit} />
                    <p className="flipped-p">Recruit talented developers</p>
            
                 </div>


        <div className="sponsor-container">
           
                <img src={Test} />
                <p>Test your APIs and give demos</p>
               
        </div>       

            </div>
        )
    }
}

export default Sponsorship
