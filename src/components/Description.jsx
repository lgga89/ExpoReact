import React from 'react'
import Anacof from "../img/Anacof.png"
import logo_Agricultura from "../img/logo_Agricultura.png"
import images_description01 from "../img/images_description01.jpeg"
import images_description from "../img/images_description.jpeg"
export  function Description() {
  return (
    <section className="description">
            <div className="description__event">
                <div class="description__container">
                    <h3>¿POR QUÉ DEBES ASISTIR?</h3>
                    <h2>Del 08 al 10 de Diciembre</h2>
                    <p className="paragraph__description">La Secretaria de Agricultura y Desarrollo Rural (SADER) a travéz
                        de su representación en
                        el Estado de Veracruz, el Gobierno del Estado de Veracruz, la Secretaria de Desarrollo
                        Agropecuario, Rural y Pesca (SEDARPA) y la Asociación Nacional de Productores
                        y Comercializadores de Fertilizantes (ANACOFER) te invitan a la EXPO FERTILIZANTES.</p>
                    <div className="logos__description">
                        <img className="img__description" src={Anacof} alt=""/>
                        <img className="img__description" src={logo_Agricultura} alt=""/>
                    </div>
            </div>
                <div className="images__description">
                    <img className="img__images" src={images_description01} alt=""/>
                    <img className="img__images1" src={images_description} alt=""/>
                </div>
            </div>
        </section>
  )
}
