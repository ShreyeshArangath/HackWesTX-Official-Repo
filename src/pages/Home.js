import React from 'react'
import Main from '../components/Main'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
    <div className="home">
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <Main></Main>
        <Footer></Footer>
    </div>
        
    )
}

