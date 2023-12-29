import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroimg from "../../img/hero.svg"

function Header() {
    return (
        <div className='header-top'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                        <div className="hero-wrapper">
                            <div className="hero">
                                <h1>Ai Automations made <br /> easy!</h1>
                                <p className='mt-4'>Create Ai Automation Workflow for your Business!</p>
                                <button>Get Started!</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} >
                        <img src={heroimg} alt="this hero image" className='w-100 h-auto d-block img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header