import React from "react";

import ExpoFertilizantes_logo from "../img/ExpoFertilizantes_logo.png";
import logo_Agricultura from "../img/logo_Agricultura.png";
import logo_vera from "../img/logo_vera.png";
import Anacof from "../img/Anacof.png";
export function Contact() {
  return (
    <section id="Contacto" className="contact">
      <h2>CONTACTO</h2>
      <div className="contact__container">
        <div className="contact__left">
          <div className="contact__logo">
            <img className="img__contact" src={ExpoFertilizantes_logo} alt="" />
          </div>
          <div className="contact__complement">
            <img className="img__contact" src={logo_Agricultura} alt="" />
          </div>
          <div className="contact__complement">
            <img className="img__contact" src={logo_vera} alt="" />
          </div>
          <div className="contact__complement">
            <img className="img__contact" src={Anacof} alt="" />
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__information">
            <h4>
              <i className="fas fa-check"></i>Rafael Rodriguez
            </h4>
            <p> 667 201 9805</p>
            <p>anacofer@anacofer.com.mx</p>
            <br />
            <h4>
              <i className="fas fa-check"></i>Mariana Hernandez{" "}
            </h4>
            <p>33 1116 2652</p>
            <p>gerencia@anacofer.com.mx</p>
            <br />
            <h4>
              <i className="fas fa-check"></i>Diana Lopez{" "}
            </h4>
            <p> 663 388 4333</p>
            <p>dianazevada10@gmail.com</p> <br />
            <h4>
              <i className="fas fa-check"></i>Odalis Tapia{" "}
            </h4>
            <p> 667 182 0354</p>
            <p>anacofer@anacofer.com.mx</p>
          </div>
          <div className="contact__information"></div>
        </div>
      </div>
    </section>
  );
}
