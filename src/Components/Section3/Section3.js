import React from 'react'
import {Container, Col,Row, Button} from 'react-bootstrap'


function Section3() {
    return (
        <div>
            <Container className="d-flex justify-content-evenly">
                <Col xs={6}>
                  <Row><p>Earn up to $25 worth of crypto</p></Row>
                  <Row><p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                  <p><Button>Start earning</Button></p></Row>
                  
                </Col>

                <Col xs={6}>
                <Row>
                    <Col><img src="" alt=""/></Col>
                    <Col><span>Ampleforth Governance Token</span></Col>
                    <Col><span>FORTH</span></Col>
                    <div className="earn"><Col>Earn $3 FORTH</Col></div>
                </Row>
                <Row>
                <Col><img src="" alt=""/></Col>
                    <Col><h5>The Graph <span> GRT </span></h5></Col>
                    
                    <div className="earn"><Col>Earn $3 GRT</Col></div>
                </Row>
                <Row>
                <Col><img src="" alt=""/></Col>
                    <Col><h5>Stellar Lumens <span> XLM </span></h5></Col>
                    
                    <div className="earn"><Col>Earn $10 XLM</Col></div>
                </Row>
                <Row>
                <Col><img src="" alt=""/></Col>
                    <Col><h5> Compound <span> COMP </span></h5></Col>
                    
                    <div className="earn"><Col>Earn $9 COMP</Col></div>


                </Row>

                <a href="#"> <p> View more </p> </a>
                </Col>

            
                
            </Container>
        </div>
    )
}

export default Section3
