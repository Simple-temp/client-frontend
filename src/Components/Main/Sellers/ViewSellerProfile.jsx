import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import sellerservice from "../../../img/sellerService.svg"
import female from "../../../img/female.svg"
import { Link } from 'react-router-dom'

function ViewSellerProfile() {
    return (
        <div>
            <Container>
                <Row className='my-5 py-5'>
                    <Col lg={6} md={6} sm={12} className='p-2'>
                        <div className="my-profile border p-3">
                            <img src={female} alt="this is profile" className='img-fluid d-block w-50' />
                            <div className="my-profile-info">
                                <h3 className='mt-3'> Name: Example Seller Profile</h3>
                                <p> <b>Description:</b> Type keywords relative to your project to find the illustrations you need.</p>
                            </div>
                            <div className="my-contact">
                                <small> <b>Contact: </b>+00 33 554 44</small> <br />
                                <small> <b>Location:</b> US</small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Card className='pb-4'>
                                    <Card.Img variant="top" src={sellerservice} />
                                    <Card.Body>
                                        <Card.Title>Seller Service Title</Card.Title>
                                        <Card.Text className='mb-4'>
                                            Seller Service details
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewSellerProfile