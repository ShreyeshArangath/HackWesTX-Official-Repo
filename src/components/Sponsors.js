import React, { Component } from 'react'
import Style from '../css/sponsor.css'

export class Sponsors extends Component {
    render() {
        return (
            <div className={this.props.type} style={Style}>
                <img src={this.props.name} alt=""/>
            </div>
        )
    }
}

export default Sponsors
