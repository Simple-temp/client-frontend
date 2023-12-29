import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import build from "../../../img/build.svg"
import world from "../../../img/world.svg"

function Buil() {
    return (
        <Container className='my-5 py-3 build'>
            <Row>
                <h2 className='text-center'>Build and sell!</h2>
            </Row>
            <Row className='mt-5'>
                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                    <div className="build-body">
                        <h3>Build by simply drag and drop</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                        <a href="https://undraw.co/">undraw.com</a>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <img src={build} alt="this is build img" className='img-fluid w-100 d-block' />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={6} md={6} sm={12} className='d-flex'>
                    <img src={world} alt="this is build img" className='img-fluid w-100 d-block' />
                </Col>
                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                    <div className="build-body">
                        <h3>Sell!</h3>
                        <p>Trusted by companies and brands all across the world.</p>
                        <a href="https://undraw.co/">undraw.com</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Buil