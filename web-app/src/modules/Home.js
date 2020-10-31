import React from 'react'
import {Jumbotron, Button,Row, Col} from 'reactstrap'
import '../App.css';
import VideoPop from "react-video-pop";
import Scene from '../assets/VideoPrueba.mp4';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <React.Fragment>
                <div className="Wrapper">
                        <VideoPop duration={5} Src={Scene} mute={true} autoplay={false} root="video-root" ratio={{w: 16, h: 9}}/>
                </div>
                <div className="container">
                    <Jumbotron>
                        <h1 className="display-3">¡BIENVENIDO a Kimera!</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit, torquent orci nam eu
                            duis cursus, iaculis ullamcorper feugiat massa quisque malesuada. Lectus velit est habitant
                            interdum
                            fermentum id molestie nunc iaculis, penatibus primis faucibus natoque fringilla magnis risus
                            erat,
                            cras vitae ut tristique justo rhoncus ac varius. Neque fringilla taciti egestas nullam ut ad
                            potenti,
                            libero tempor parturient lacus vitae iaculis..</p>
                        <hr className="my-2"/>
                        <p>Odio torquent bibendum commodo natoque tellus at mollis magna lacus sodales conubia varius
                            cursus,
                            mattis sociis felis suspendisse cubilia inceptos justo curae primis pulvinar vivamus..</p>
                        <p className="lead">
                            <Button href="http://kimera.com/data/multimedia/multimedia.html" color="primary">Ve a
                                nuestra antigua Web</Button>
                        </p>
                    </Jumbotron><Jumbotron>
                    <h1 className="display-3">¡BIENVENIDO a Kimera!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit, torquent orci nam eu
                        duis cursus, iaculis ullamcorper feugiat massa quisque malesuada. Lectus velit est habitant
                        interdum
                        fermentum id molestie nunc iaculis, penatibus primis faucibus natoque fringilla magnis risus
                        erat,
                        cras vitae ut tristique justo rhoncus ac varius. Neque fringilla taciti egestas nullam ut ad
                        potenti,
                        libero tempor parturient lacus vitae iaculis..</p>
                    <hr className="my-2"/>
                    <p>Odio torquent bibendum commodo natoque tellus at mollis magna lacus sodales conubia varius
                        cursus,
                        mattis sociis felis suspendisse cubilia inceptos justo curae primis pulvinar vivamus..</p>
                    <p className="lead">
                        <Button href="http://kimera.com/data/multimedia/multimedia.html" color="primary">Ve a
                            nuestra antigua Web</Button>
                    </p>
                </Jumbotron><Jumbotron>
                    <h1 className="display-3">¡BIENVENIDO a Kimera!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit, torquent orci nam eu
                        duis cursus, iaculis ullamcorper feugiat massa quisque malesuada. Lectus velit est habitant
                        interdum
                        fermentum id molestie nunc iaculis, penatibus primis faucibus natoque fringilla magnis risus
                        erat,
                        cras vitae ut tristique justo rhoncus ac varius. Neque fringilla taciti egestas nullam ut ad
                        potenti,
                        libero tempor parturient lacus vitae iaculis..</p>
                    <hr className="my-2"/>
                    <p>Odio torquent bibendum commodo natoque tellus at mollis magna lacus sodales conubia varius
                        cursus,
                        mattis sociis felis suspendisse cubilia inceptos justo curae primis pulvinar vivamus..</p>
                    <p className="lead">
                        <Button href="http://kimera.com/data/multimedia/multimedia.html" color="primary">Ve a
                            nuestra antigua Web</Button>
                    </p>
                </Jumbotron><Jumbotron>
                    <h1 className="display-3">¡BIENVENIDO a Kimera!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipiscing elit, torquent orci nam eu
                        duis cursus, iaculis ullamcorper feugiat massa quisque malesuada. Lectus velit est habitant
                        interdum
                        fermentum id molestie nunc iaculis, penatibus primis faucibus natoque fringilla magnis risus
                        erat,
                        cras vitae ut tristique justo rhoncus ac varius. Neque fringilla taciti egestas nullam ut ad
                        potenti,
                        libero tempor parturient lacus vitae iaculis..</p>
                    <hr className="my-2"/>
                    <p>Odio torquent bibendum commodo natoque tellus at mollis magna lacus sodales conubia varius
                        cursus,
                        mattis sociis felis suspendisse cubilia inceptos justo curae primis pulvinar vivamus..</p>
                    <p className="lead">
                        <Button href="http://kimera.com/data/multimedia/multimedia.html" color="primary">Ve a
                            nuestra antigua Web</Button>
                    </p>
                </Jumbotron>
                </div>
                </React.Fragment>

            </div>
        )
    }

}
