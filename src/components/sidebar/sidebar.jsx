import React from 'react';
import "./sidebar.css";

const sidebar = () => {
  return (

    <aside className='aside'>

      <a href="#home" className="nav__logo">


      </a>

      <nav className="nav">

        <div className="nav__menu">

          <ul className="nav__list">

            <li className="nav__item">

              <a href="#home" className="nav__link">

               <i class="fa-solid fa-house"></i>

              </a>

            </li>
            <li className="nav__item">

              <a href="#about" className="nav__link">


               <i class="fa-solid fa-user"></i>

              </a>

            </li>
            <li className="nav__item">

              <a href="#services" className="nav__link">

                <i class="fa-solid fa-briefcase"></i>

              </a>

            </li>
            <li className="nav__item">

              <a href="#resume" className="nav__link">

                <i class="fa-solid fa-graduation-cap"></i>

              </a>

            </li>
            <li className="nav__item">

              <a href="#work" className="nav__link">

                <i class="fa-solid fa-code"></i>

              </a>

            </li>

            <li className="nav__item">

            <a href="#contact" className="nav__link">

              <i class="fa-solid fa-comments"></i>

            </a>

            </li>

          </ul>

        </div>

      </nav>

      <div className="nav__footer">

        <span className="copyright">&copy; 2024.</span>

      </div>

    </aside>

    )
}

export default sidebar