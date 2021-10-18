import React from 'react'
import './Morals.css';
import {Container,Row,Col} from 'reactstrap';
import Privacy from '../../assets/img/privacy.png';
import Security from '../../assets/img/security.png';
import Accountability from '../../assets/img/accountability.png';
import Particles from 'react-tsparticles';

const Morals = () => {
    return (
        <div id= "morals">
            <h4>03</h4>
            <h1> Company Morals</h1>
            <h2>WHAT WE STAND FOR</h2>
            <Container>
                <Row>
                    <Col>
                    <img src={Accountability}/>
                    <h3>Accountability</h3>
                    <p>I like to eat eat eat apples and bannaas I like to ate ate ate apples and bananas</p>
                    </Col>
                    <Col>
                    <img src={Security}/>
                    <h3>Security</h3>
                    <p>I like to eat eat eat apples and bannas I like to iat iat iat ipples and bininis</p>
                </Col>
                <Col>
                    <img src={Privacy}/>
                    <h3>Privacy</h3>
                    <p>I like to eat eat eat apples and bannas I like to eat eat eat epples and benenes</p>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Morals;
