import React, {useState} from 'react';
import './App.css';
import FeatureCard from "./components/FeatureCard"
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from "./components/Navbar"

function App() {
return(
  <div className="App">
    <Navbar />
    <LandingPage />
    <FeatureCard />
    <Footer />
  </div>
)}

export default App;