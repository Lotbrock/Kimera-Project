import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Col, Row } from "reactstrap";
import puzzle from "../assets/puzzle.png";
import memory from "../assets/memory.png";
import arrows from "../assets/arrows.png";

const Games = () => {
  return (
    <div className="container marketing">
      <Row>
        <Col>
          <Jumbotron>
            <div className="row featurette ">
              <div className="col-md-7 order-md-2">
                <Link to="puzzle">
                  {" "}
                  <h3 className="featurette-heading center links">Puzzle </h3>
                </Link>
                <p className="lead">
                  {" "}
                  Arma imagenes relacionadas con la cultura INCA y reta a tus
                  amigos.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="featurette-image img-fluid mx-auto"
                  alt="300x300"
                  src={puzzle}
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </Jumbotron>
        </Col>
        <Col>
          <Jumbotron>
            <div className="row featurette ">
              <div className="col-md-7 order-md-2">
                <Link to="/memory">
                  {" "}
                  <h3 className="featurette-heading links">Memoria Inca</h3>
                </Link>
                <p className="lead">
                  {" "}
                  Construye parejas con elementos de la cultura INCA
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="featurette-image img-fluid mx-auto"
                  alt="300x300"
                  src={memory}
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 11, offset: 1 }}>
          ¿Problemas de conectividad?, aqui podras descargar mas contenido con
          que podras interactuar si no tienes conexion!
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col sm="12" md={{ size: 9, offset: 2 }}>
          <Row>
            <Col md="6">
              <div className="row featurette ">
                <div className="col-md-8 order-md-2">
                  <Link to="/files/TRIVIAINCAS.pps" target="_blank" download>
                    {" "}
                    <h3 className="featurette-heading links">
                      Contenido Descargable 1
                    </h3>
                  </Link>
                </div>
                <div className="col-md-4 order-md-1">
                  <img
                    className="featurette-image img-fluid mx-auto img-circle redonda"
                    alt="300x300"
                    src={arrows}
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="row featurette ">
                <div className="col-md-8 order-md-2">
                  <Link to="/files/MemoriaInca.ppsx" target="_blank" download>
                    {" "}
                    <h3 className="featurette-heading links">
                      Contenido Descargable 2
                    </h3>
                  </Link>
                </div>
                <div className="col-md-4 order-md-1">
                  <img
                    className="featurette-image img-fluid mx-auto redonda"
                    alt="300x300"
                    src={arrows}
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Games;
