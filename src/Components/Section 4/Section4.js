import React from "react"
import "./Section4.css"
import {Container, Row, Col} from "react-bootstrap"
import image from "../../Images/userInterface.jpg"
function Section4(){
    return(
        <Container>
            <Row>
                <Col md={{span:4}}>
                </Col>
                <Col sm={{span:8}} >
                    <img src={image} alt="user interface" className="imageUI"/>
                </Col>
            </Row>
        </Container>
    )
}  
export default Section4
