import React, { Component } from 'react';
import LandingPage from './components/pages/LandingPage'
import About from './components/pages/About'
import Header from './components/pages/Header'
import './components/pages/page.css'
import Works from './components/pages/Works'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
  
       <LandingPage  />
       <About   />
       <Works />
<Footer />
       
      </div>
    );
  }
}

export default App;
