import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import WhatGPT3 from './containers/skillRevive/WhatGPT3';
import Features from './containers/features/Features';
import Possibility from './containers/possibility/Possibility';
import CTA from './components/cta/CTA';



const App = () => {
    return (
      <div className="App">
          <div className="gradient__bg">
              <Navbar/>
              <Header/>
          </div >
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <CTA/>
          
          
          
      </div>
    )
  }
  
  export default App