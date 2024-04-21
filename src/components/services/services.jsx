import React from 'react';
import "./services.css";
import Image1 from "../../assets/img/servicio-diseño.png";
import Image2 from "../../assets/img/servicio-programación.png";
import Image3 from "../../assets/img/servicio-wordpress.png";

const data = [

  {

    id: 1,
    image: Image1,
    title: "Diseño web",
    description: "Ofrezco servicio de diseño web mediante la implementación de código o utilizando plataformas low code como WordPress, Odoo. Puedo diseñar sitios web modernos o adaptarlos según la necesidad del cliente",

  },
  {

    id: 2,
    image: Image2,
    title: "Programación Front-end",
    description: "Cuento con conocimientos de programación, mayormente orientado al front-end. Utilizo html, css, js, bootstrap y frameworks como Angular y React",

  },
  {

    id: 3,
    image: Image3,
    title: "Desarrollador WordPress",
    description: "Tengo experiencia desarrollando con WordPress. Puedo hacer sitios según la necesidad del cliente utilizando elementor pro, woocommerce, mailchimp, y una correcta selección de plugins",

  },

];

const services = () => {
  
  return  <section className="services container section" id='services'>

    <h2 className="section__title">Servicios</h2>

    <div className="services__container grid">

      {data.map(({id,image,title,description}) => {

        return (

          <div className="services__card" key={id}>

            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>

          </div>

        )

      })}

    </div>

  </section>

}

export default services