import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <Row>
                <div className="footer-contant">
                    <h2>Christmas offer!</h2>
                    <a href="" className='footer-link'>Join our discord community to get 7 days free access!</a>
                    <button className='footer-btn'>Click to jon!</button>
                </div>
            </Row>
            <Container className='footer-end-wrapper'>
                <Row>
                    <Col lg={2} md={4} sm={12}>
                        <div className="footer-end">
                            <h5 className='text-transform-uppercase'><i className="fa-solid fa-plane"></i> AutoLanding</h5>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <div className="footer-end">
                            <h5 className='text-transform-uppercase'>Links</h5>
                            <small>Faq</small>
                            <small>Help</small>
                            <small>Support</small>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <div className="footer-end">
                            <h5 className='text-transform-uppercase'>Links</h5>
                            <small>Faq</small>
                            <small>Help</small>
                            <small>Support</small>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <div className="footer-end">
                            <h5 className='text-transform-uppercase'>Links</h5>
                            <small>Faq</small>
                            <small>Help</small>
                            <small>Support</small>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <div className="footer-end">
                            <h5 className='text-transform-uppercase'>Links</h5>
                            <small>Faq</small>
                            <small>Help</small>
                            <small>Support</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer