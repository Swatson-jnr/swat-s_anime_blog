// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function Res() {
  return (
    <div>
      <Navbar bg="" variant="dark" expand="lg" className='container-fluid'>
        <Navbar.Brand className='text-dark' href="#home">Swatson's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"   style={{
          backgroundColor: '#ff5733', // Border color of the hamburger button
        }}/>
        <Navbar.Collapse id="basic-navbar-nav" className="bg-dark">
          <Nav className="ms-auto">
            <Nav.Link className='home' href="/">Home</Nav.Link>
            <Nav.Link href="#about" className='text-dark'>About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Res;
