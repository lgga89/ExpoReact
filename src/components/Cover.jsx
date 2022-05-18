import React from 'react'

export function Cover() {
  return (
    <div className ="cover">
        <div className="cover__presentation">
                <div className="cover__bottom">
                    <h1>Córdoba</h1>
                    <h1>Veracruz</h1>
                    <h6>08 al 10 de Diciembre</h6>
                </div>
                <div className="cover__logo">
                <img className="cover__img" src={require("../img/logo_anacofer.png")} alt ="logo"/>
                </div>
        </div> 
        <div className="cover__day">
                <p>3 días</p>
                <p>Conferencias</p>
                <p>Proveedores directos</p>
                <p>Instituciones financieras</p>
            </div>
            <div className="cover__imagen">
            </div>
    </div>
  )
}
