import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import Scene from "../assets/Mordhau.mp4";
import VideoPop from "react-video-pop";
const Default = (props) => {

return(
<div>
    <div>
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estamos Trabajando para brindarle un mejor servicio...
        </p>
        <a
          className="App-link"
          href="http://kimera.com/data/multimedia/multimedia.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se trabajará Incas
        </a>
         </header>
    </div>
      </div>
      );
      }
export default Default;