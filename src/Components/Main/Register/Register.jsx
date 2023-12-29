import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import signup from "../../../img/signup.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../../Store';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {

    const navigate = useNavigate()
    const { search } = useLocation()
    const redirectInUrl = new URLSearchParams(search).get("redirect")
    const redirect = redirectInUrl ? redirectInUrl : "/"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")

    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { userInfo } = state

    const haldleSubmit = async (e) => {
        e.preventDefault()
        if(password !== conPassword){
            toast.error(" password do not match")
            return;
        }
        try {

            const { data } = await axios.post("http://localhost:4000/api/root/register", {
                name,
                email,
                password
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
                        <h5 className='text-center'>Register</h5>
                        <Form onSubmit={haldleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" type="text" label="Name" required onChange={(e) => setName(e.target.value)} variant="standard" className='field' />
                            </Form.Group>

                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='email' label="Email" required onChange={(e) => setEmail(e.target.value)} variant="standard" className='field' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Password" required onChange={(e) => setPassword(e.target.value)} variant="standard" className='field' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <TextField id="standard-basic" type='password' label="Re-type Password" required onChange={(e) => setConPassword(e.target.value)} variant="standard" className='field' />
                            </Form.Group>
                            <button className='login mt-2' type="submit" >Register</button> <br /> <br />
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