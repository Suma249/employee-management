import { Button, Form } from 'react-bootstrap'
import './PostUser.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: [value]
        })
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch("http://localhost:8080/api/employees",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            console.log("employee created: ", data);
            navigate('/')
        }
        catch (error) {
            console.log("error creating employee: " + error)
        }
    }
    return (
        <>
            <div className='center-form'>
                <h1>Post New Employee</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='name'
                            placeholder='enter employee name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='enter employee email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='phone'
                            placeholder='enter employee phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='department'
                            placeholder='enter employee department'
                            value={formData.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit' className='w-100'>Post Employee</Button>
                </Form>
            </div>
        </>
    )
}
