import React from 'react'
import Style from '../css/footer.css'
export default function Socials() {
    return (
        <div className="footer-main" style={Style}>
            <div className="credits">
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik, DinosoftLabs, and Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            <div class="made-with-love">
                <h6> <i class="far fa-copyright"></i> HackWesTX 2022</h6>
                <h6>Made with&nbsp;<i class="fas fa-heart footer-love"></i>&nbsp;and <i
                    class="fas fa-code footer-code"></i></h6>
            </div>
        </div>
    )
}
