import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

export default class header extends Component {
    render() {
        return (
            <>
            <Navbar bg="white" expand="sm" fixed="top">
                <Container>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <HashLink style={{color:'#311b92', padding:"10px"}} smooth to="/#start" >Home</HashLink>
                            <HashLink style={{color:'#311b92', padding:"10px"}} smooth to="/#projects" >My Projects</HashLink>
                            <HashLink style={{color:'#311b92', padding:"10px"}} smooth to="/#contacts" >Contacts</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
    }
}
