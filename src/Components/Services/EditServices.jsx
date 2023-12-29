import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import service from "../../img/service.svg"
import { Link } from 'react-router-dom';


function EditServices() {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <h3 className='text-center'>Update your Service</h3>
                    <Col lg={6} md={6} sm={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="text" label="Title" variant="standard" className='field' />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Description" variant="standard" className='field' />
                            </Form.Group>

                            <TextField id="file" type='file' variant="standard" className='field edit-file-img' />

                            <label htmlFor="file" className='camera'><i className="fa-solid fa-camera"></i></label> <br /> <br />

                            <button className='login mt-2'>Update your service</button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={6} className='d-flex justify-content-center'>
                        <img src={service} alt="this is login img" className='img-fluid w-50 d-block' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EditServices