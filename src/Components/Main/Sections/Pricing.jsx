import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Pricing() {
    return (
        <div>
            <Container className='my-5 py-3 build'>
                <h2 className='text-center'>Pricing</h2>
                <Row className='pricing'>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='pricing-item'>
                            <Card.Body>
                                <Card.Title className='price-title'>Free</Card.Title>
                                <ul>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                </ul>
                                <Card.Text className='price'>
                                    £x.99 / per user
                                </Card.Text>
                                <Button variant="primary" className='tem-btn mb-5 mx-auto d-block'>Join</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='pricing-item'>
                            <Card.Body>
                                <Card.Title className='price-title'>Basic</Card.Title>
                                <ul>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                </ul>
                                <Card.Text className='price'>
                                    £x.99 / per user
                                </Card.Text>
                                <Button variant="primary" className='tem-btn mb-5 mx-auto d-block'>Signup!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='pricing-item'>
                            <Card.Body>
                                <Card.Title className='price-title'>Pro</Card.Title>
                                <ul>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                    <li>Think</li>
                                </ul>
                                <Card.Text className='price'>
                                    £x.99 / per user
                                </Card.Text>
                                <Button variant="primary" className='tem-btn mb-5 mx-auto d-block'>Signup!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Pricing