import React from 'react'
import expositores001 from "../img/expositores001.png";
import expositores002 from "../img/expositores002.png";
import expositores03 from "../img/expositores03.png"
export  function Lecturers() {
  return (
    <section id="Conferencias" className=" lecturers ">
            <div className=" lecturers__titles">
                <h2>MIEMBROS ANACOFER</h2>
            </div>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={expositores001} alt="imagen" />
                    </div>

                </div>
            </div>
            <br/>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={expositores002} alt="imagen02" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src={expositores03} alt="imagen03" />
                    </div>
                </div>
            </div>
        </section>
  )
}
