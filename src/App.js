import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Projects from './Components/projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="scroll-mt-16"><Banner /></section>
      <section id="features" className="scroll-mt-16"><Features /></section>
      <section id="projects" className="scroll-mt-16"><Projects /></section>
      <section id="resume" className="scroll-mt-16"><Resume /></section>
      <section id="contact" className="scroll-mt-16"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;




