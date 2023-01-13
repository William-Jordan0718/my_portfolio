import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
  

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/resume"}>Resume</Nav.Link>
                                
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Rent A Wreck</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    BRICKBUSTER
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">DOMIFY</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                
                        <Routes>
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/resume" element={<Resume />} />
                            <Route exact path="/projects" element={<Projects />} />
                            <Route exact path="/home" element={<Home />} />
                        </Routes>
                </Router>
            </div>
        )
    }
}