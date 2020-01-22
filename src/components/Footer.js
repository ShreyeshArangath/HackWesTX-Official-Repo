import React from 'react'
import Style from '../css/footer.css'
export default function Footer() {
    return (
        <div className="footer-main" style={Style}>
           <div className="contact-us">
               <div className="social-media">
                    <a href="https://www.facebook.com/hackwestx/" ><i className="fab fa-facebook-f fa-2x"></i></a>
               </div>
               <div class="social-media">
                    <a href="https://www.linkedin.com/company/hackwestx/" ><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="https://join.slack.com/t/hackwestx2020/shared_invite/enQtOTA3MzU1Nzc0MDE3LWYyZTM2ZjMzNjhkMTBlNjdhYmQzMzA5Yzk5NGQ1YjMyYmIyODUwNjMyYmFmNDY5ZTgwM2NlYWZjYTlmYzQ5NGY" ><i className="fab fa-slack fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="hackwestx2019@gmail.com" ><i className="far fa-paper-plane fa-2x"></i></a>
                </div>
                <div class="social-media">
                    <a href="https://www.instagram.com/hackwestx" ><i className="fab fa-instagram fa-2x"></i></a>
                </div>
           </div>
           <div class="made-with-love">
           <h6> <i class="far fa-copyright"></i> HackWesTX 2020</h6>
           <h6>Made with&nbsp;<i class="fas fa-heart footer-love"></i>&nbsp;and <i
        class="fas fa-code footer-code"></i></h6>
           </div>
           <div className="credits">
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik, DinosoftLabs, and Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
           </div>
        </div>
    )
}
