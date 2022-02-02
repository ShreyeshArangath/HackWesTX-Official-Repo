import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Jumbotron />
            <Socials />
            <Main />
            <Footer />
        </div>

    )
}

