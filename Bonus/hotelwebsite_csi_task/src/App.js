import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header'
import Footer from './components/footer'
import Home from './home.js'
import Hotel from './hotel.js'
import Features from './features.js'
import MapWithOverlay from './map.js';
 


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Hotel />
        <Features />
        <MapWithOverlay />
       
        <Footer />
       
        

      </div>
    </Router>
  )
}

export default App