import React from 'react'
import {Container, Col,Row, Button} from 'react-bootstrap'
import './Section3.css'
import forth from '../../Images/forth.svg'
import comp from '../../Images/comp.png'
import grt from '../../Images/grt.svg'
import stellar from '../../Images/stellar.svg'

function Section3() {
    return (
        <div className="row justify-content-evenly section3">
             <div className="col-6 mt-5">
                    <div className="me-5"><p className="earn-heading">Earn up to $25 worth of cypto</p></div>
                    <div className="discover"><p >Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p></div>
                    <div><button className="button3">Start earning</button></div>
             </div>
             <div className="col-6 col2sect3 d-flex flex-column">
                <div className="row col-links p-2 ">
                    <div className="col"><img src={forth} alt=""/></div>
                     <div  className="col-7"><h4 className="sect3col2">Ampleforth Governance Token FORTH</h4></div>
                    
                   
                    <div className="col-3"><p className="earn">Earn $3 FORTH</p></div>
                </div>

                <div className="row col-links p-2">
                    <div className="col"><img src={grt} alt=""/></div>
                     <div className="col-7"><h4>The Graph GRT</h4></div>
                     <div className="col-3"><p className="earn">Earn $3 GRT</p></div>
                </div>

                <div className="row col-links p-2">
                    <div className="col"><img src={stellar} alt=""/></div>
                     <div className="col-7"><h4>Stellar Lumens XLM</h4></div>
                     <div className="col-3"><p className="earn">Earn $10 XLM</p></div>
                </div>

                <div className="row col-links p-2">
                    <div className="col"><img width="35" height="35" src={comp} alt=""/></div>
                     <div className="col-7"><h4>Compound COMP</h4></div>
                     <div className="col-3"><p className="earn">Earn $9 COMP</p></div>
                </div>


             </div>

             <a href="" className="view-tag d-flex justify-content-center"><p>View more {'>'} </p></a>
            
        </div>
    )
}

export default Section3
