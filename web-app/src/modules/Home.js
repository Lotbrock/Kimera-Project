import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "../App.css";
import VideoPop from "react-video-pop";
import Scene from "../assets/VideoPrueba.mp4";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <Jumbotron>
              <h1 className="display-3">¡BIENVENIDO a Kimera!</h1>
              <p className="lead">
                El proyecto KIMERA desarrolló títulos educativos y multimedia en
                distintos formatos entre 1985 y 2006, fue retomado por la
                FUNDACIÓN KARISMA en el año 2016 buscando, como objetivo
                principal poner a disposición de los usuarios los títulos
                multimedia y el software educativo desarrollados en ese
                proyecto. Un segundo objetivo era desarrollar herramientas que
                permitan resolver problemas de acceso a la información en
                instituciones educativas sin acceso a Internet o con un acceso
                muy limitado.
              </p>
              <hr className="my-2" />
              <p>
                Es por eso que en el año 2020 para lograr este objetivo se ha
                creado una plataforma web adaptable a múltiples dispositivos y
                en esta se han dispuesto de videos y otros recursos interactivos
                disponibles tanto para visualización en línea y/o descarga y
                posterior visualización en ambientes fuera de línea que permitan
                la comprensión de las temáticas a través de estos recursos.
              </p>
              <p className="lead">
                <Button
                  href="http://kimera.com/data/multimedia/multimedia.html"
                  color="primary"
                >
                  Ve a nuestra antigua Web
                </Button>
              </p>
            </Jumbotron>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
