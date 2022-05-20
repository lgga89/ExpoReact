import React from "react";
import gallery01 from "../img/Galeria/gallery01.jpeg";
import gallery02 from "../img/Galeria/gallery02.jpeg";
import gallery03 from "../img/Galeria/gallery03.jpeg";
import gallery04 from "../img/Galeria/gallery04.jpeg";
import gallery05 from "../img/Galeria/gallery05.jpeg";
import gallery06 from "../img/Galeria/gallery06.jpeg";
import gallery07 from "../img/Galeria/gallery07.jpeg";
import gallery08 from "../img/Galeria/gallery08.jpeg";
import gallery09 from "../img/Galeria/gallery09.jpeg";
import gallery10 from "../img/Galeria/gallery10.jpeg";
import gallery11 from "../img/Galeria/gallery11.jpeg";
import gallery12 from "../img/Galeria/gallery12.jpeg";
export function Gallery() {
  return (
    <section id="Galeria" className="gallery">
      <div className="gallery__title">
        <h2>GALERÍA 2021</h2>
      </div>
      <div className="gallery__container">
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery01} alt="" />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery02} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery03} alt="" />

            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery04} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery05} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery06} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery07} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery08} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery09} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery10} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery11} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={gallery12} alt="" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <script src="../js/gallery.js"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="../js/main.js"></script>
    </section>
  );
}
