import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateNew() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name: "", description: "", file: null, })

    const handleChange = (e) => {
        const { name, files, value } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        const inputData = new FormData()
        inputData.append("name", formData.name)
        inputData.append("description", formData.description)
        inputData.append("file", formData.file)

        try {
            const response = await axios.post('http://localhost:4000/api/root/addnew',
                inputData,
            );
            if (response) {
                navigate("/profile")
            }
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col lg={6} md={8} sm={6} className='mx-auto'>
                        <h3 className='text-center py-3'>Create your Service</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" name="name" type="text" label="Name" variant="standard" className='field' required onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <TextField id="standard-basic" name="description" type="text" label="Description" variant="standard" className='field' required onChange={handleChange} />
                            </Form.Group>

                            <TextField id="file" type='file' name='file' variant="standard" className='field edit-file-img' required onChange={handleChange} />

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