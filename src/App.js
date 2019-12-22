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
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
