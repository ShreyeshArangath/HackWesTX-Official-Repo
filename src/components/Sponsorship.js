import React, { Component } from 'react'
import Advertising from '../assets/advertising.svg'
import Recruit from '../assets/human-resources.svg'
import Test from '../assets/flask.svg'

export class Sponsorship extends Component {
    render() {
        return (
            <div>
                <h2 className="subtitle">Sponsor Us!</h2>
                <div className="floats-container trigger">
                    <img src={Advertising} alt='advert'></img>
                    <p>Increase brand awareness among students</p>
                </div>     

                <div className="floats-container-reverse">
                    <img className="flipped" src={Recruit} />
                    <p className="flipped-p">Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>
            
                 </div>


        <div className="floats-container">
           
                <img src={Test} />
                <p>Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>
               
        </div>       

            </div>
        )
    }
}

export default Sponsorship
