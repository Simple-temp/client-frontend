import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function CreateNew() {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col lg={6} md={8} sm={6} className='mx-auto'>
                        <h3 className='text-center py-3'>Create your Service</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="text" label="Name" variant="standard" className='field' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="email" label="Description" variant="standard" className='field' />
                            </Form.Group>

                            <TextField id="file" type='file' variant="standard" className='field edit-file-img' />

                            <label htmlFor="file" className='camera'><i className="fa-solid fa-camera"></i></label> <br /> <br />

                            <button className='login mt-2'>Create New Service</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateNew