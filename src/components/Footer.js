import React from 'react'
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
  NavbarText,
} from 'reactstrap';

const Footer = () => {
  return (
    <div> 
  
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="Calico logo"
        src="/logo.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Calico-IP-ZP
    </NavbarBrand>
  </Navbar></div>
  )
}

export default Footer