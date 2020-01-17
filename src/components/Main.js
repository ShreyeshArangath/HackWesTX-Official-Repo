import React from 'react'
import AboutUs from './AboutUs'
import Transition1 from './Transition1'
import Sponsorship from './Sponsorship'
import Transition2 from './Transition2'
import Team from './OurTeam'
import FAQ from './FAQ'
import Sponsors from './Sponsors'
import LEDA from '../assets/LEDA.png'


export default function Main() {
    return (
        <main>
           <AboutUs></AboutUs>
           {/* <Sponsors name={LEDA} type="platinum"></Sponsors> */}
           <Sponsorship></Sponsorship>
            <FAQ></FAQ>
            <Team></Team>
            
        </main>
    )
}
