import React from 'react'
import '../App.css';
import logo from '../logo.svg';
const Default = (props) => {

return(
<>
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En esta pag se desarrollara el contenido para kimera...
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
      </>
      );
      }
export default Default;