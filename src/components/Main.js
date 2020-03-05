import React from 'react'
import AboutUs from './AboutUs'
import Sponsorship from './Sponsorship'
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
