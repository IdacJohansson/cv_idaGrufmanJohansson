import React from 'react';

import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const NavBar = () => {
  return (
     <Navbar expand='lg' className='bg-black'>
      <Container className='container' style={{ maxWidth: '600px' }}>
        <Navbar.Toggle className='costum-icon-color' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link className='custom-link' href='/'>Ida</Nav.Link>
            <Nav.Link className='custom-link'  href='/experience'>Experience</Nav.Link>
            <Nav.Link className='custom-link' href='/contact'>Contact</Nav.Link>
            <Nav.Link className='custom-link'  href='https://github.com/IdacJohansson'>GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default NavBar;
