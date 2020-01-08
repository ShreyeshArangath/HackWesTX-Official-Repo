import React from 'react'
import Glitch from '../css/glitch-white.css'
import Style from '../css/faq.css'

export default function FAQ() {
    return (
        <div className="faq-main" style={Style,Glitch}>
            <h2 className="subtitle glitch-white" data-text="Frequently Asked Questions">Frequently Asked Questions</h2>
            <p className="intro"></p>
            <div className="faq-cards faq-row-1">
                <div className="card">
                    <p class="questions">What's a hackathon?</p>
                    <p>Hackathons are usually software or hardware development events where many hackers and innovators 
                        come together to collaborate and have fun!</p>
                </div>
                <div className="card">
                    <p class="questions">How much does it cost?</p>
                    <p>Nothing! HackWesTX is completely free to students!</p>
                </div>
            </div>
            <div className="faq-cards faq-row-2">
                <div className="card">
                    <p class="questions">Do I need a team?</p>
                    <p>You are able to register for HackWesTX without a team, but collaborating with a 
                        few friends or new faces will definitely make the experience more enjoyable!</p>
                </div>
                <div className="card">
                    <p class="questions">Will there be free stuff?</p>
                    <p>Of course! All participants will be well fed and provided with ample amounts of swag!</p>
                </div>
            </div>
            <div className="faq-cards faq-row-3">
                <div className="card">
                    <p class="questions">Can I register in advance?</p>
                    <p>You can! Check this website in the near future for a registration form!</p>
                </div>
                <div></div>
                <div></div>
            
            </div>
        </div>
    )
}
