import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Scene from "../assets/VideoPrueba.mp4";
import VideoPop from "react-video-pop";

const Video = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="Wrapper">
          <>
            <VideoPop
              duration={5}
              Src={Scene}
              autoplay={false}
              root="video-root"
              ratio={{ w: 16, h: 9 }}
            />
          </>
        </div>
        <hr className="my-2" />
        <div className="app-container">
          <Jumbotron>
            <h1 className="display-2">¿Quiénes fueron los Incas?</h1>
            <hr className="my-2" />
            <p className="historia">
              Fueron llamados el pueblo del Sol y se dice que su imperio fue el
              más grande del nuevo mundo, en una canción de Les Luthiers los
              incas hablaban de sí mismos (Les Luthiers. Cantata del adelantado
              Don Rodrigo Diaz de Carreras). Pero realmente, ¿quiénes fueron los
              incas? cuando se encontraron con los españoles a pesar de ser una
              civilización joven que inició su expansión en 1438 el imperio
              tenía 12 millones de habitantes y cubría casi dos millones de
              kilómetros cuadrados incluyendo territorios de lo que ahora son
              Perú, Ecuador, Bolivia, Chile y Argentina. No tenían el concepto
              de imperio y le llamaban a su estado Tawantisuyu, las 4 regiones
              la capital era Cuzco y su gobernante era llamado el Inca a quién
              se consideraba descendiente directo de Inti, Dios del Sol la
              leyenda cuenta que el sol mismo mandó a su hijo Sapa Inca y a su
              esposa a fundar Cuzco, eran un pueblo muy organizado del Inca
              dependían los sacerdotes y los gobernantes de cada región había
              una clase noble y la mayor parte del pueblo estaba formada por
              grupos de familias llamados aillu que tenían bajo su custodia
              extensiones de tierra y oficios especializados se sabe que los
              productos del trabajo se entregaban al gobierno, quien después lo
              repartía a todo el pueblo, por eso aunque los nobles vivían con
              más lujos en el imperio no existía el comercio, ni el dinero, ni
              el desempleo, cuando un joven llegaba a la edad adulta debía
              servir en el ejército así se creó un ejército formidable la
              organización social era tan buena que lograron convencer de forma
              pacífica a varios reinos vecinos de unirse al imperio a cambio de
              enseñarles cómo aplicar el sistema en sus territorios, y a quienes
              no convencían. Bueno para eso estaba su ejército los incas
              practicaban el cultivo por terrazas de papa, maíz y calabaza la
              crianza de alpacas y llamas. (como la antorcha humana de los 4
              fantásticos llamas a mí no verdad), y aunque no trabajaban ni el
              acero y el hierro eran expertos en los textiles que usaban para
              tejer ropa, armaduras, barcas y cuentas, el oro lo usaban para
              adornar sus templos y realizar maravillosas artesanías lástima que
              los españoles fundieran muchos de estos trabajos para hacer
              monedas. Para los incas la muerte no era más que un pasaje a la
              siguiente vida, en la que todos aquellos que se adhirieran al
              código moral Inca no robes, no mientas y no seas flojo llegarían a
              vivir en un paraíso bajo el calor del sol. Conservaban las momias
              de sus gobernantes fallecidos y sus sucesores tenían gran respeto
              y hasta les pedían consejo. Practicaban la modificación corporal
              era común colgarse objetos en los lóbulos de las orejas haciendo
              llegar estos hasta los hombros por eso los españoles en un
              principio le llamaron orejones, además sujetaban el cráneo de los
              niños para lograr que se les alargara. Aparentemente no tenían
              escritura por lo que todo su conocimiento era transmitido por
              tradición oral, lo que sí tenían era Quipús, un complejo sistema
              de cuerdas anudadas con las que llevaban cuentas y registros
              también puede ser que sirviera para contar historias, pero nadie
              sabe con certeza ¿cómo?, lo cierto es que los mensajeros llamados
              chasquis las llevaban cómo se llevan cartas. Los incas eran
              increíbles constructores hicieron excelentes caminos para unir su
              imperio como el camino real que unía las ciudades de Cuzco con
              Quito, como había constantes terremotos sus edificios estaban
              hechos por piedras labradas que encajaban perfectamente, por lo
              que no puedes meter un cuchillo entre dos, otra ciudad importante
              fue Machu Picchu, tan aislada que no se descubrió sino hasta
              principios de 1900, se cree que era donde el Inca se iba de
              vacaciones. Cuando el conquistador Francisco Pizarro se topó con
              este maravilloso pueblo por 1526 fue a pedirle permiso a la reina
              para conquistarlo (Les Luthiers. Cantata del adelantado Don
              Rodrigo Diaz de Carreras). De regreso en 1532, se encontró con un
              pueblo dividido por la guerra civil entre los sucesores del Inca
              los hermanos Huáscar y Atahualpa, aliándose con los pueblos
              conquistados y gracias a la viruela la tierra del oro cayó bajo el
              dominio de Pizarro. Además de su arquitectura, los incas nos
              dejaron en su idioma el quechua, palabras que usamos hasta ahora
              como lancha, choclo, cancha, carpa, papa y puma. Su historia está
              llena de caudillos, como el último gobernante Inca Túpac Amaru, de
              quien tomó su nombre un revolucionario peruano, que a su vez
              inspiró el nombre del célebre rapero Tupac Shakur.
            </p>
          </Jumbotron>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Video;
