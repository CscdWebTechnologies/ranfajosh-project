import React from 'react';
import logo from '../../Images/coinbase_logo.svg';
import './Navbar.css'
import {Nav, Navbar, Button} from 'react-bootstrap'

export default function NaviBar() {
    return (
        <div className="navbar d-flex justify-content-evenly">
            <Navbar sticky="top">
                <Navbar.Brand>
                <Nav.Link><img src={logo} width="100" height="50" className="d-inline-block align-top" alt="coinbase"/></Nav.Link>
                </Navbar.Brand>

                
                    <Nav className="navbar-links fw-bold">
                        <Nav.Link >Prices</Nav.Link>
                        <Nav.Link >Learn</Nav.Link>
                        <Nav.Link >Individuals</Nav.Link>
                        <Nav.Link >Businesses</Nav.Link>
                        <Nav.Link >Developers</Nav.Link>
                        <Nav.Link >Company</Nav.Link>
                    </Nav>
               

                <Nav className="fw-bold">
                    <Nav.Link className="d-inline-block align-top mt-2">Sign in</Nav.Link>
                   <Nav.Link> <Button size="sm">Get started</Button></Nav.Link>
                </Nav>


            </Navbar>
        </div>
    )
}
