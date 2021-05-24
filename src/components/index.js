import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{top: '0'}}>
                <Navbar.Brand href="#home">
                    <div>
                        <h3>
                            Rohit Upadhya
                        </h3>
                        <p>
                            Software Engineer <strong>@Lowe's</strong>
                        </p>
                    </div>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/"></Nav.Link>
                        <Nav.Link href="#pricing">WORK</Nav.Link>
                        <Nav.Link href="#pricing">RESEARCH</Nav.Link>
                        <Nav.Link href="#pricing">ABOUT</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing"><Button variant="outline-light">WORK</Button></Nav.Link>
                        <Nav.Link href="#pricing"><Button variant="outline-light">RESEARCH</Button></Nav.Link>
                        <Nav.Link href="#pricing"><Button variant="outline-light">ABOUT</Button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
             </Navbar>
      </>
    );
}

export default Navigation;