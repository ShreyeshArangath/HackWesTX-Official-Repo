import React from 'react'
import Style from '../css/footer.css'
export default function Socials() {
    return (
        <div className="footer-main" style={Style}>
            <div className="contact-us">
                <div class="social-media">
                    <a href="https://discord.gg/cRPCbWffQS" target="_blank" rel="noopener noreferrer" ><i className="fab fa-discord fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="https://twitter.com/HWTXOfficial" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="https://www.depts.ttu.edu/coe/undergraduate/index_old_2021.php" target="_blank" rel="noopener noreferrer" ><i className="fa fa-graduation-cap fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="mailto:contact@hackwestx.com" target="_blank" rel="noopener noreferrer" ><i className="far fa-paper-plane fa-2x"></i></a>
                </div>
            </div>
        </div>
    )
}
