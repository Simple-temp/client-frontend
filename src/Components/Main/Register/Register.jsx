import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import signup from "../../../img/signup.svg"
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col lg={6} md={6} sm={6}>
                        <h5 className='text-center'>Register</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="text" label="Name" variant="standard" className='field' />
                            </Form.Group>

                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Email" variant="standard" className='field' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Password" variant="standard" className='field' />
                            </Form.Group>
                            <button className='login mt-2'>Register</button> <br /> <br />
                            <small>Already have an Account? <Link to="/login" className='link'>Login</Link> </small>
                            <hr />
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={6} className='d-flex justify-content-center'>
                        <img src={signup} alt="this is login img" className='img-fluid w-50 d-block' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register