import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap' 
import './Table.css'
import {TableContent} from './TableContent'

function TableSect() {
    return (
        
        <div className='table'>
            <Container>
                          
            <Row className="border">
                               <Col xs={{span:1}}> </Col>
                              <Col xs={1}  className="p-3">#</Col>
                              
                              <Col xs={3}  className="p-3">Name</Col>
                              <Col xs={2}  className="p-3 ">Price</Col>
                              <Col xs={1}  className="p-3">Change</Col>
                              <Col xs={2}  className="p-3">Chart</Col>
                              <Col xs={1}  className="p-3">Trade</Col>
                              <Col xs={1}  className="p-3"> </Col>
            </Row>
            {
               TableContent.map((items, index) =>{
                  <li>{items}</li>

                  return(
                      

                          <Row className="border-start border-end border-bottom">
                              <Col xs={1}  className="p-2"> </Col>
                              <Col xs={1}  className="p-2">{items.Number}</Col>
                              <Col xs={3}  className="p-2"><img width="30px" height="30px" src={items.Image}/> {items.Name}<span className="abb">{items.abb}</span></Col>
                              <Col xs={2}  className="p-2">{items.Price}</Col>
                              <Col xs={1}  className="p-2"><span className="change">{items.Change}</span></Col>
                              <Col xs={2}  className="p-2">{items.Chart}</Col>
                              <Col xs={1}  className="p-2"><Button variant="success">{items.Trade}</Button></Col>
                              <Col xs={1}  className="p-2"> </Col>
                          </Row>

                     
                  )
               })
            }
             </Container>
        </div>
    )
}

export default TableSect
