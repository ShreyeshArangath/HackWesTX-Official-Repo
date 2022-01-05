import React from 'react'
import Style from '../css/footer.css'
export default function Footer() {
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
                    <a href="https://www.instagram.com/HWTXOfficial/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="mailto:admin@hackwestx.com" target="_blank" rel="noopener noreferrer" ><i className="far fa-paper-plane fa-2x"></i></a>
                </div>
           </div>
           <div class="made-with-love">
           <h6> <i class="far fa-copyright"></i> HackWesTX 2022</h6>
           <h6>Made with&nbsp;<i class="fas fa-heart footer-love"></i>&nbsp;and <i
        class="fas fa-code footer-code"></i></h6>
           </div>
           <div className="credits">
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik, DinosoftLabs, and Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
           </div>
        </div>
    )
}
