import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MyNavbar() {
  return (
    <div className='container-fluid'>
      <Navbar bg="" variant="dark" expand="md" className='Navbar'>
        <Navbar.Brand className='text-dark' href="/">Swat's Anime Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"   style={{
          backgroundColor: '#f1356d',
        }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='home' href="/">Home</Nav.Link>
            <Nav.Link href="/create" className='new'>Create a blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
