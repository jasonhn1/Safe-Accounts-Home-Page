import React from 'react'
import './Starter.css';
import { Container, Row, Col } from 'reactstrap';
import starter from '../../assets/img/start.png'
const Starter = () => {
    return (
        <div id = 'starter'>
        
        <Container id ="full" fluid={true}>
            <Row>
                <Col id ="desktop-starter" ><img src = {starter}/></Col>
                <Col>
                    <h1>Never worry about your passwords again.</h1>
                    <p>From passwords to personal info, Safe Accounts is the simple solution for protecting all your data. Get started with your trial today.</p>
                    <span id ="wrapper"> 
                    <button id="explore">Explore</button>
                    </span>
                </Col>
            </Row>
        </Container>


        </div>
    )
}

export default Starter;