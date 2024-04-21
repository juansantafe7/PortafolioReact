import React from 'react';
import "./home.css";
import Me from "../../assets/img/me.png";
import Shapes from './Shapes';
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';


const home = () => {
  return (
    
    <section className="home container" id="home">

      <div className="intro">

        <img src={Me} alt="foto_de_Juan_Cruz" className="home__img" />

        <h1 className="home__name">Juan Cruz Leal</h1>
        <span className="home__education">Desarrollador Web</span>

        <HeaderSocials />

        <Scrolldown />

      </div>

      <Shapes />

    </section>

  )
}

export default home