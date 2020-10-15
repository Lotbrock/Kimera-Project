import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import choza from "../assets/choza.png";
import control from"../assets/control.png"
import inca from "../assets/inca.png"
import orientar from "../assets/orientar.png"
import logo from "../assets/logo.png"
const NavBar = (props) =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

return(
 <div>
      <Navbar color="danger" light expand="md">
        <NavbarBrand href="/"><img src={logo} width="150" alt="" className="d-inline-block align-middle mr-2">
         </img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto"  navbar>
            <NavItem className="col-6">
              <NavLink className="text-white" href="/home"><img src={choza} width="38" alt="" className="d-inline-block align-middle mr-2">
                                                  </img>Inicio</NavLink>
            </NavItem>
            <NavItem className="col-6">
              <NavLink className="text-white" href="/historia"><img src={inca} width="38" alt="" className="d-inline-block align-middle mr-2">
                                                                                         </img>Historia</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                <img src={control} width="38" alt="" className="d-inline-block align-middle mr-2">
                                                                  </img>Aprende y Diviértete
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem href="/puzzle">
                  Puzzle
                </DropdownItem>
                <DropdownItem href="/memoria">
                  Memoria
                </DropdownItem>
                <DropdownItem divider  />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>
                <NavLink href="/manual" className="text-white"><img src={orientar} width="38" alt="" className="d-inline-block align-middle mr-2">
                                                                                                                                 </img>Ayuda</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
)
}
export default NavBar;