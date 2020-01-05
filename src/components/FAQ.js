import React from 'react'

export default function FAQ() {
    return (
        <div className="faq-main">
            <h2 className="subtitle">Frequently Asked Questions</h2>
            <p className="intro"></p>
            <div className="faq-cards faq-row">
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
            <div className="faq-cards faq-row">
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
            <div className="faq-cards faq-row">
                <div className="card">
                    <p class="questions">What should I bring?</p>
                    <p>Please bring a valid student ID in addition to anything that would help you with 
                        creating your hack or making you comfortable. A laptop, charger, mouse, keyboard, light jacket, and 
                        any hygienic products are recommended</p>
                </div>
            </div>
        </div>
    )
}
