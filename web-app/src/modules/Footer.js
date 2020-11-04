import React from 'react';
import "./Footer.css";
import karisma from"../assets/karisma.png"
const Footer = (props) =>{
return(
<>
<footer className="footer">
     <div className="main-footer">
        <div className="container-fluid col-md-11">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>Kimera</h4>
              <h6 className="list-unstyled">
                <li>Es un proyecto de:</li>
                <li><img src={karisma} width="130" alt="" className="d-inline-block align-middle mr-2">
                                                                                      </img></li>
              </h6>
            </div>
            {/* Column3 */}
            <div className="col text-right">
              <h5>Contacto</h5>
              <ui className="list-unstyled">
                <li>124124</li>
                <li>Cll 2352</li>
                <li>asdad@Safasfa.com</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row ">
          <div className="col">
            <p className="text-center">
              Todos los derechos reservados &copy;{new Date().getFullYear()}. |
              Terms Of Service | Privacy
            </p>
          </div>
          </div>
        </div>
      </div>
</footer>
</>
)
}
export default Footer;
