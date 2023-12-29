import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function OurTemplates() {
    return (
        <div>
            <Container className='my-5 py-3 build'>
                <h2 className='text-center'>Our Templates</h2>
                <Row className='templates'>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='tem-item'>
                            <Card.Body>
                                <Card.Title>Chatbot with custom knowledge</Card.Title>
                                <Card.Text>
                                    Integrate custom knowledge trained chatbot across all social medias, websites.
                                </Card.Text>
                                <Button variant="primary" className='tem-btn'>Edit Tempalate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='tem-item'>
                            <Card.Body>
                                <Card.Title>Online Meeting summary from audio file</Card.Title>
                                <Card.Text>
                                Zoom or Google meeting recording file and get key-points in seconds without having to watch entirely
                                </Card.Text>
                                <Button variant="primary" className='tem-btn'>Edit Tempalate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='p-1'>
                        <Card className='tem-item'>
                            <Card.Body>
                                <Card.Title>Webscrap leads to send personalized messages</Card.Title>
                                <Card.Text>
                                Scrapes through client's website, Linkedin to collect details to strengthen sales pipeline.						
                                </Card.Text>
                                <Button variant="primary" className='tem-btn'>Edit Tempalate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurTemplates