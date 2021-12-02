import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function headerApp() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          {/*  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#">menu1</Nav.Link>
                    </Nav> */}
          <Nav>
            <Nav.Link href="#" className="active">หน้าแทงหวย</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}
