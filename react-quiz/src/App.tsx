import React, {useState} from 'react';
import './App.css';
import FeatureCard from "./components/FeatureCard"
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar"

function App() {
return(
  <div className="App">
    <Navbar />
    <LandingPage />
    <FeatureCard />
  </div>
)}

export default App;