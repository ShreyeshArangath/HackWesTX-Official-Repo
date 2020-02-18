import React from 'react'
import AboutUs from './AboutUs'
import Transition1 from './Transition1'
import Sponsorship from './Sponsorship'
import Transition2 from './Transition2'
import Team from './OurTeam'
import FAQ from './FAQ'
import OurSponsors from './OurSponsors'

export default function Main() {
    return (
        <main>
           <AboutUs />
           <OurSponsors />
           <Sponsorship />
            <FAQ />
            <Team />
        </main>
    )
}
