import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
