import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import login from "../../../img/login.svg"
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col lg={6} md={6} sm={6}>
                        <h5 className='text-center'>Login</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="text" label="Enter you email" variant="standard" className='field'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Password" variant="standard" className='field'/>
                            </Form.Group>
                            <button className='login mt-2'>Login</button> <br /> <br />
                            <small>Don't have any Account? <Link to="/register" className='link'>Register</Link> </small>
                            <hr />
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={6} className='d-flex justify-content-center'>
                        <img src={login} alt="this is login img" className='img-fluid w-50 d-block' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login