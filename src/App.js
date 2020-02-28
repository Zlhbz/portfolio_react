import React from 'react';
// import logo from './logo.svg';
import NavBar from "./components/navbar"
import Slider from "./components/slider"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
