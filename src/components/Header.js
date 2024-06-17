import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom'; // Importe o hook useLocation

const Header = () => {
  const location = useLocation(); // Obtenha a localização atual

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='bg-dark'>
      <Navbar.Brand href="/">
        <img
          src="/images/logo-svg.svg" 
          alt="Logo Axadinhos"
          style={{ height: '80px' }}
          className='m-4'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className='m-4'>
        <Nav className="ml-auto">
          <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Produtos</Nav.Link>
          <Nav.Link href="/PerguntasFrequentes" className={location.pathname === '/PerguntasFrequentes' ? 'active' : ''}>Perguntas Frequentes</Nav.Link>
          {/* <Nav.Link href="#contact" className={location.pathname === '/contact' ? 'active' : ''}>Contato</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
