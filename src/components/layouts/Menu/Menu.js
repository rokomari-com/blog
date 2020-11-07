import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './Menu.scss';

const Menu = () => {
    return (
        <Navbar expand="lg" className="rok-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/" className="btn-link home-btn">Home</Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Another</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gallery" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.7">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.8">Another</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.9">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Form inline>
                        <Form.Label>Search</Form.Label>
                        <FormControl type="text" placeholder="Search Here" className="mr-sm-2 d-none" />
                        <FormControl type="submit" value="→" className="submit-icon" />
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;