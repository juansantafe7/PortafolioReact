  import React from 'react';
  import "./about.css";
  import About from "../../assets/img/about.png"
  import AboutBox from '../about/AboutBox';

  const about = () => {

    
    

    return (

      <section className="about container section" id='about'>

        <h2 className="section__title">Sobre mi</h2>

        <div className="about__container grid">

          <img src={About} alt="JuanCruzLeal" className='about__img' />

          <div className="about__data grid">

            <div className="about__info">

              <p className="about__description">Hola!. Mi nombre es Juan Cruz Leal y soy desarrollador web. Cuento con conocimientos y experiencia en programación front-end y diseño web. Puedo hacer sitios web desde 0 con html, css, js, utilizando frameworks como Angular o React; o bien usando plataformas low-code como WordPress y Odoo.</p>


            </div>

            <div className="about__skills grid">

              <div className="skills__data">

                <div className="skills__titles">

                  <h3 className="skills__name">Programador front-end</h3>

                  <span className="skills_number">90%</span>

                </div>

                <div className="skills_bar">

                  <span className="skills__percentage development"></span>

                </div>

              </div>

  <div className="skills__data">

  <div className="skills__titles">

    <h3 className="skills__name">Desarrollador WordPress</h3>

    <span className="skills_number">90%</span>

  </div>

  <div className="skills_bar">

    <span className="skills__percentage wordpress"></span>

  </div>

  </div>
  <div className="skills__data">

  <div className="skills__titles">

    <h3 className="skills__name">Diseñador web</h3>

    <span className="skills_number">85%</span>

  </div>

  <div className="skills_bar">

    <span className="skills__percentage design"></span>

  </div>

  </div>
            </div>
                      <div className="about__skills grid">




            </div>

          </div>

        </div>

        <AboutBox />

      </section>

    )
  }

  export default about;