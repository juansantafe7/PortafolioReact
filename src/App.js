import React from 'react';
import './index.css';
import "./App.css";
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Resume from './components/resume/resume';
import Portfolio from './components/porftfolio/portfolio';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <>
    <Sidebar />
      <main className='main'>

        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />

      </main>
    </>
  )
}

export default App