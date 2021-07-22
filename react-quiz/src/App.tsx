import React, {useState} from 'react';
import './App.css';
import FeatureCard from "./Home/FeatureCard"
import Footer from './Home/Footer';
import LandingPage from './Home/LandingPage';
import Navbar from "./Home/Navbar";
import UserForm from "./Home/Form"

function App() {
return(
  <div className="App">
    <Navbar />
    <LandingPage />
    <FeatureCard />
    <Footer />
    <UserForm />
  </div>
)}

export default App;