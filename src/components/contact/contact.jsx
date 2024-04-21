import React from 'react';
import "./contact.css";


const contact = () => {
  return (

    <section className="contact container section" id="contact">

      <h2 className="section__title">Contacto</h2>


      <div className="contact__container grid">

        <div className="contact__info">

          <h3 className="contact__title">Puedes contactar conmigo</h3>

          <p className="contact_details">Enviame un e-mail</p>

        </div>

        <form action="" className='contact__form'>

          <div className="contact__form-group">

            <div className="contact__form-div">

              <input type="text" className="contact__form-input" placeholder='Ingrese su nombre' required />

            </div>

            <div className="contact__form-div">

              <input type="email" className="contact__form-input" placeholder='Ingrese su email' required />

            </div>

            <div className="contact__form-div">

              <input type="text" className="contact__form-input" placeholder='Ingrese el asunto del mensaje' />

            </div>

            <div className="contact__form-div contact__form-area">

              <textarea name="" id="" cols="30" rows="10" 
              className='contact__form-input' placeholder='Escriba su mensaje...' required></textarea>

            </div>

            <button className='btn'>Enviar</button>

          </div>

        </form>

      </div>

    </section>

  )
}

export default contact