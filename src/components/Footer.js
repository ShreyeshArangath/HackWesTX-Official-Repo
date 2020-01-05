import React from 'react'

export default function Footer() {
    return (
        <div className="footer-main">
           <div className="contact-us">
               <div className="social-media">
                    <a href="#" ><i className="fab fa-facebook-f fa-2x"></i></a>
               </div>
               <div class="social-media">
                    <a href="#" ><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="#" ><i className="fab fa-slack fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="#" ><i className="far fa-paper-plane fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="#" ><i className="fab fa-instagram fa-2x"></i></a>
                </div>
           </div>
           <div class="made-with-love">
           <h6> <i class="far fa-copyright"></i> HackWesTX 2020</h6>
           <h6>Made with&nbsp;<i class="fas fa-heart footer-love"></i>&nbsp;and <i
        class="fas fa-code footer-code"></i></h6>
           </div>
           <div className="credits">
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik, DinosoftLabs, Good Ware, and Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
           </div>
        </div>
    )
}
