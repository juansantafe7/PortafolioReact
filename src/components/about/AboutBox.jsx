import React from 'react'

const AboutBox = () => {
  return (

  <div className="about__boxes grid">

    <div className="about__box">

        <i className="about__icon fa-solid fa-fire"></i>

        <div>

            <h3 className="about__title">20+</h3>

            <span className="about__subtitle">Proyectos subidos a mi GitHub</span>

        </div>

    </div>
    <div className="about__box">

        <div className="about__icon fa-solid fa-file-code"></div>

        <div>

            <h3 className="about__title">2+ años</h3>

            <span className="about__subtitle">Programador Front-End</span>

        </div>

    </div>
    <div className="about__box">

        <div className="about__icon fa-brands fa-wordpress"></div>

        <div>

            <h3 className="about__title">2+ años</h3>

            <span className="about__subtitle">Desarrollador WordPress</span>

        </div>

    </div>
    <div className="about__box">

        <div className="about__icon fa-solid fa-pen-nib"></div>

        <div>

            <h3 className="about__title">2+ años</h3>

            <span className="about__subtitle">Diseñador Web</span>

        </div>

    </div>

  </div>  


)
}

export default AboutBox