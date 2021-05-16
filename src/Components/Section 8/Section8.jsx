import React from "react";
import "./Section8.css"
import { Container, Row, Col, Button } from "react-bootstrap";
import earth from "../../Images/earth_astro.jpg"
function Section8 () {
    
    return (
        
        <Container fluid className="section8Col">
      <Row >
        <Col sm={{span:3, offset: 1}} xs="2" >
          <div className="earnText">
            <h2 >
              Earn up to $28 worth of crypto
            </h2>
            <p>
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
            <Button variant="primary" size="md"  className="section8Button">
              Start earning
            </Button>
          </div>
        </Col>
        <Col sm="2" xs="3">
            <img src={earth} alt="earthlogo"/>
        </Col>
      </Row>
</Container>
       
        
        
        )
}
export default Section8;