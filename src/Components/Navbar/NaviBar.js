import React from 'react';
import logo from '../../Images/coinbase_logo.svg';
import './Navbar.css'
import {Nav, Navbar, Button, NavDropdown, Container, Row, Col} from 'react-bootstrap'

export default function NaviBar() {
    return (
        <Navbar className="navbar d-flex justify-content-evenly">
            {/* <Navbar sticky="top"> */}
                <Navbar.Brand>
                <Nav.Link><img src={logo} width="100" height="50" className="d-inline-block align-top" alt="coinbase"/></Nav.Link>
                </Navbar.Brand>

                
                    <Nav className="navbar-links fw-bold">
                        <Nav.Link >Prices</Nav.Link>
<<<<<<< HEAD
                        <Nav.Link>Learn</Nav.Link>
                            
                       
=======
                        <Nav.Link className="learnlink1">Learn</Nav.Link>
                        <section className="dropdown-section">
                            <div className="dropdown-container">
                                <div className="dropdownRow1">
                                    <a className="dropdown-link">
                                       <span>
                                         <svg className="svg12" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path></svg>
                                         <div className="link-container">
                                         <h4 className="linkname">Tips {'&'} Tutorials</h4>
                                         </div>
                                       </span>
                                    </a>

                                    <a>
                                    <span>
                                    <svg class="svg12" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path></svg>
                                         <div className="link-container">
                                         <h4 className="linkname">Crypto basics</h4>
                                         </div>
                                       </span>
                                    </a>

                                    <a>
                                    <span>
                                    <svg class="sc-fzqzlV gMJRj" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path></svg>
                                         <div className="link-container">
                                         <h4 className="linkname">Market updates</h4>
                                         </div>
                                       </span>

                                    </a>
                                </div>
                                <div className="dropdownRow2">
                                    <h4 className="cryto-head">Crypto questions, answered</h4>
                                    <p className="crypto-sub">Guides and explainers for crypto questions</p>
                                    <a className="learn-article learn-link">
                                        <h4 className="see-head">See all articles</h4>
                                    </a>
                                </div>
                            </div>
                        </section>
>>>>>>> 1ee88c08c324ff861f600978975ac36e1da27913
                        <Nav.Link >Individuals</Nav.Link>
                        <Nav.Link >Businesses</Nav.Link>
                        <Nav.Link >Developers</Nav.Link>
                        <Nav.Link >Company</Nav.Link>
                    </Nav>
               

                <Nav className="fw-bold">
                    <Nav.Link className="  signin d-inline-block align-top mt-2">Sign in</Nav.Link>
                   <Nav.Link> <Button className="button3" size="sm">Get started</Button></Nav.Link>
                </Nav>


            {/* </Navbar> */}
        </Navbar>
    )
}
