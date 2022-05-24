import { useState } from "react";

export function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_tabs">
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
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
