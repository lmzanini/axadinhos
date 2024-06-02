import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='header-bg'>
      <Navbar.Brand href="/">
        <img
          src="/images/logo-svg.svg" 
          alt="Logo Axadinhos"
          style={{ height: '80px' }}
          className='m-4'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Produtos</Nav.Link>
          <Nav.Link href="#about">Sobre</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
