import React from 'react';
import './App.css';

// Import sections
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import VideoPortfolio from './sections/VideoPortfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <VideoPortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;