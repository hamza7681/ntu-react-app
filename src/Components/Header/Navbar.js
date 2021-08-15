import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../Assets/logo.png'

function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#a51c30' }}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="NTU" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{marginLeft:'100px'}}>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>About Us</Nav.Link>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>Admissions</Nav.Link>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>Academics</Nav.Link>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>Researches</Nav.Link>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>Services</Nav.Link>
                            <Nav.Link href="#" className="link1" style={{ color: 'white', textTransform: 'uppercase' }}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar
