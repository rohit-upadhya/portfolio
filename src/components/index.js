import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand href="/portfolio">
                    <div>
                        <h3>
                            Rohit Upadhya
                        </h3>
                        <p>
                        MSc CS <strong>@ Technical University of Munich</strong>
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
                        <Nav.Link href="/portfolio/blog"><Button variant="outline-light">BLOG</Button></Nav.Link>
                        <Nav.Link href="#pricing"><Button variant="outline-light">RESEARCH</Button></Nav.Link>
                        <Nav.Link href="#pricing"><Button variant="outline-light">ABOUT</Button></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
             </Navbar>
      </>
    );
}

export default Navigation;