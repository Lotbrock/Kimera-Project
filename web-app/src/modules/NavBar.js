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

const NavBar = (props) =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

return(
 <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kimera-Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/default">Creditos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contenido Didactico
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Rompecabezas">
                  Rompecabezas
                </DropdownItem>
                <DropdownItem href="/pintura">
                  Pintura
                </DropdownItem>
                <DropdownItem divider  />
                <DropdownItem href="/historia">
                  Historia
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
                <NavLink href="https://github.com/Lotbrock">GitHub</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
)
}
export default NavBar;