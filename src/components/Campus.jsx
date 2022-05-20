import React from "react";
import Toxpan from "../img/Toxpan.jfif";

export function Campus() {
  return (
    <section id="Sede" className="campus">
      <div className="campus__general">
        <div className="campus__title">
          <h3>¿DÓNDE SE LLEVARÁ A CABO?</h3>
          <h2>SEDE</h2>
        </div>
        <div className="campus__container">
          <div className="campus__description">
            <strong>DETALLES DE LA SEDE</strong>
            <p className="paragraph__campus">
              La Ex Hacienda Toxpan fue uno de los primeros ingenios azucareros
              del país, su importancia histórica para la ciudad es de gran
              relevancia, no sólo porque fue un ícono de la economía de la
              región y actualmente está siendo rescatada, pues el deterioro que
              sufrieron los vestigios al ser abandonada es grave, además de lo
              costoso, sin embargo, ya se realizan acciones para remozar el
              lugar y convertirlo en un centro cultural para los cordobeses.
            </p>
            <p className="paragraph__campus">
              Ex Hacienda, San Francisco de Toxpan nueva toxpan(Nuevo San
              Francisco), Nuevo San Francisco, 94510 Córdoba.
            </p>
          </div>
          <div className="campus__images">
            <img className="campus__img" src={Toxpan} alt="imagenLocal" />
          </div>
        </div>
      </div>
    </section>
  );
}
