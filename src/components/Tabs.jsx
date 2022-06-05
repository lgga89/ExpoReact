import { useState } from "react";

export function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_tabs">
      <div className="program__title">
        <h2>PROGRAMA 2021</h2>
      </div>

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Miercoles 08 de diciembre
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Jueves 09 de diciembre
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          viernes 10 de diciembre
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <article id="tab1">
            <table>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Actividad</th>
                  <th>Lugar</th>
                </tr>
              </thead>

              <tr>
                <td>9:30</td>
                <td>
                  <strong>Registro</strong>
                </td>
                <td>Módulo de registro</td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>
                  <strong>Apertura del Evento</strong>
                </td>
                <td>Ex Hacienda Toxpan</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>
                  <strong>Ceremonia de Inaguración:</strong>
                  <li>
                    Mtro. Cuitláhuac García Jiménez - Gobernador Constitucional
                    del Estado de Veracruz.
                  </li>
                  <br />
                  <li>
                    Dr. Víctor Manuel Villalobos Arámbula - Secretario de
                    Agricultura y Desarrollo Rural.
                  </li>{" "}
                  <br />
                  <li>
                    Ing. Norma Rocío Nahle García - Secretaria de Energía.
                  </li>
                  <br />
                  <li>
                    Dr. Evaristo Ovando Ramírez - Titular de la Secretaría de
                    Desarrollo Agropecuario, Rural y Pesca (SEDARPA) Gobierno
                    del Estado de Veracruz.
                  </li>{" "}
                  <br />
                  <li>
                    Ing. Gabriel Duarte Picos - Presidente de ANACOFER.
                  </li>{" "}
                  <br />
                  <li>Por definir, demás miembros del Presidium</li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>
                  <strong>
                    Corte de listón y recorrido por área de exposición
                  </strong>
                </td>
                <td>Sala de Ensayos</td>
              </tr>
              <tr>
                <td>13:30</td>
                <td>
                  <strong>
                    Herramientas digitales aplicadas: Sistemas de información
                    geográfica, At Farm, YARA y Farm go.
                  </strong>
                  <li>
                    Ing. Enrique González Gerente de Farming Solutions - YARA.
                  </li>
                </td>
                <td>Sala de Ensayos</td>
              </tr>
              <tr>
                <td>14:30</td>
                <td>
                  <strong>
                    Uso eficiente de los fertilizantes con el manejo de análisis
                    de suelo, agua y la fisiología de los cultivos
                  </strong>
                  <li>Dr. Anselmo Lopez Ordaz Nitromex.</li>
                </td>
                <td>Sala de Ensayos</td>
              </tr>
            </table>
          </article>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <article id="tab2">
            <table>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Actividad</th>
                  <th>Lugar</th>
                </tr>
              </thead>

              <tr>
                <td>10:00</td>
                <td>
                  <strong>
                    Panel: "Financiamiento para el sector agroalimentario"
                  </strong>
                  <li>
                    Lic. Ignacio Gómez Trápala - Director General Adjunto de
                    Promoción de Negocios y Coordinación Regional de la FND.
                  </li>
                  <li>
                    Lic. José Antonio Cortés Barrientos - Dirección General
                    Adjunta de Promoción de Negocios de FIRA.
                  </li>
                  <li>
                    Ing. Onécimo Pérez Ochoa - Representante de la ABM Capitulo
                    Agropecuario.
                  </li>
                  <li>
                    Moderador: Mtro. Carlos Rodriguez Arana Avila - Director
                    General de Gestión de Riesgos de AGRICULTURA.
                  </li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>11:00</td>
                <td>
                  <strong>
                    La importancia de los fertilizantes de eficiencia mejorada.
                  </strong>
                  <li>Saul Wong García - Pacifex</li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>
                  <strong>
                    Comportamiento del sector agropecuario en el Estado de
                    Veracruz.
                  </strong>
                  <li>
                    Dr. Evaristo Ovando Ramírez - Titular de la Secretaría de
                    Desarrollo Agropecuario, Rural y Pesca (SEDARPA).
                  </li>
                  <br />
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>
                  <strong>
                    Tecnología satelital aplicada al cultivo y fertilización de
                    caña.
                  </strong>
                  <li>Dr. Eloy Camacho - Tepeyac.</li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>14:00</td>
                <td>
                  <strong>
                    Haifa Nutrinet: Sistema online para el manejo de la
                    nutrición.
                  </strong>
                  <li>Ing. Juan Manuel Diaz - Gerente Técnico Haifa México.</li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
            </table>
          </article>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <article id="tab3">
            <table>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Actividad</th>
                  <th>Lugar</th>
                </tr>
              </thead>

              <tr>
                <td>10:00</td>
                <td>
                  <strong>
                    Panel Intercambio de Experiencias: "Fertilizantes para el
                    Bienestar" -por definir-
                  </strong>
                  <li>
                    Aurelio Flores Solano - Presidente Municipal de Guadalupe
                    Victoria, Puebla.
                  </li>
                  <li>
                    Mtra. Katia Isabel Herrera Quevedo - Secretaria de
                    Desarrollo Agropecuario del Edo de Morelos
                  </li>
                  <li>
                    Iván Hernández Díaz - Delegado Estatal de Programas para el
                    Desarrollo en Guerrero.
                  </li>
                  <li>Beneficiario del Programa -por definir-</li>
                  <li>
                    Moderador: José Luis Arizmendi Bahena - Encargado del
                    Despacho de la Representación de la "SADER" en el Estado de
                    Morelos.
                  </li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>11:00</td>
                <td>
                  <strong>
                    Panel: Uso eficiente y adecuado de Fertilizantes.
                  </strong>
                  <li>
                    Dra. Vinisia Saynes Santillan - Colegios de Postgraduados.
                  </li>
                  <li>
                    Ing. Francisco Rodríguez Neave - Universidad Autónoma
                    Chapingo.
                  </li>
                  <li>
                    M.C. Andrés Vásquez Hernández - Instituto Nacional de
                    Investigaciones Forestales Agrícolas y Pecuarias.
                  </li>
                  <li>
                    Moderador: Ing. Oscar Javier Fernández Morales - Encargado
                    del Despacho de la Representación de la "SADER" en el Estado
                    de Veracruz.
                  </li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>
                  <strong>
                    La importancia de la regeneración de suelos para incrementar
                    la rentabilidad agrícola.
                  </strong>
                  <li>
                    Dr. Santo Morales Vidal - Consejo Mexicano de
                    Agrobiotecnología A.C. (CoMABio).
                  </li>
                  <br />
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>
                  <strong>
                    Las Ventajas de la eficiencia en el Uso de Nitrógeno.
                  </strong>
                  <li>Ing. Abelardo Devia -Isaosa.</li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
              <tr>
                <td>14:00</td>
                <td>
                  <strong>
                    Requisitos para la certificación de una biofábrica de
                    insumos orgánicos.
                  </strong>
                  <li>
                    Ing. Mauro Nieves - Presidente del Consejo Orgánico de
                    Veracruz A. C.
                  </li>
                </td>
                <td>Salón de Usos Múltiples</td>
              </tr>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
}
