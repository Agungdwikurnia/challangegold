import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
const NavBar = () => {
  return (
    <div className='NavBar'>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Our Services</Nav.Link>
            <Nav.Link href="#link">Why Us</Nav.Link>
            <Nav.Link href="#link">Testimonial</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar