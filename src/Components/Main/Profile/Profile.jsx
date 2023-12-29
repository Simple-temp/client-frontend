import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import profile from "../../../img/profile.svg"
import service from "../../../img/service.svg"
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <Container>
                <Row className='my-5 py-5'>
                    <Col lg={6} md={6} sm={12} className='p-2'>
                        <div className="my-profile border p-3">
                            <img src={profile} alt="this is profile" className='img-fluid d-block w-50' />
                            <div className="my-profile-info">
                                <h3 className='mt-3'> Name: Example My Profile</h3>
                                <p> <b>Description:</b> Type keywords relative to your project to find the illustrations you need.</p>
                            </div>
                            <div className="my-contact">
                                <small> <b>Contact: </b>+00 33 554 44</small> <br />
                                <small> <b>Location:</b> US</small>
                            </div>
                            <Link to="/editprofile" className='link'>
                                <button className='login mt-4'>Edit</button>
                            </Link>
                            <Link to="/createnew" className='link'>
                                <button className='login mt-4'>Create New Service</button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3 className='text-center py-3'>My Services</h3>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Card className='pb-4'>
                                    <Card.Img variant="top" src={service} />
                                    <Card.Body>
                                        <Card.Title>Service Title</Card.Title>
                                        <Card.Text className='mb-4'>
                                            Service details
                                        </Card.Text>
                                        <Link to="/editservice" className='link'>
                                            <Button variant="primary" className="login">Edit</Button>
                                        </Link>
                                        <Button variant="primary" className='login ms-5' >Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <Card className='pb-4'>
                                    <Card.Img variant="top" src={service} />
                                    <Card.Body>
                                        <Card.Title>Service Title</Card.Title>
                                        <Card.Text className='mb-4'>
                                            Service details
                                        </Card.Text>
                                        <Link to="/editservice" className='link'>
                                            <Button variant="primary" className="login">Edit</Button>
                                        </Link>
                                        <Button variant="primary" className='login ms-5' >Delete</Button>
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

export default Profile