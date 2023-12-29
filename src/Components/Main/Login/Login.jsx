import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import login from "../../../img/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../../Store';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {

    const navigate = useNavigate()
    const { search } = useLocation()
    const redirectInUrl = new URLSearchParams(search).get("redirect")
    const redirect = redirectInUrl ? redirectInUrl : "/"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { userInfo } = state

    const haldleSubmit = async (e) => {
        e.preventDefault()
        try {

            const { data } = await axios.post("http://localhost:4000/api/root/login", {
                email,
                password,
            })
            ctxDispatch({ type: "USER_LOGIN", payload: data })
            localStorage.setItem("userInfo", JSON.stringify(data))
            navigate(redirect || "/")
            console.log(data)

        } catch (err) {
            console.log(err.message)
            toast.error("Invalid email and password")
        }
    }

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo])

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col lg={6} md={6} sm={6}>
                        <h5 className='text-center'>Login</h5>
                        <Form onSubmit={haldleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="email" label="Enter you email" required onChange={(e) => setEmail(e.target.value)}  variant="standard" className='field'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Password" required onChange={(e) => setPassword(e.target.value)} variant="standard" className='field'/>
                            </Form.Group>
                            <button className='login mt-2' type='submit'>Login</button> <br /> <br />
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