import React from 'react'
import AboutUs from './AboutUs'
import Sponsorship from './Sponsorship'
import Team from './OurTeam'
import FAQ from './FAQ'
import OurSponsors from './OurSponsors'
import { StudentSlideshow } from './StudentSlideshow'

export default function Main() {
    return (
        <main>
           <AboutUs />
           <StudentSlideshow />
           <OurSponsors />
           <Sponsorship />
            <FAQ />
            <Team />
        </main>
    )
}
