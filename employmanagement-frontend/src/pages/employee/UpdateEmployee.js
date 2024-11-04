import React, { useEffect } from 'react'
import './UpdateEmployee.css'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/employee/${id}`);
                const data = await response.json();
                console.log("data fetched is: " + data);
                setFormData(data)
            }
            catch (error) {
                console.log("error fetching employee details: " + error);
            }
        }
        fetchEmployee();

    }, [id])

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/employee/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            )
            const data = await response.json();
            console.log("employee updated: " + data);
            navigate('/')
        }
        catch (error) {
            console.log("error updating employee: " + error.message)
        }
    }

    return (
        <>
            <div className='center-form'>
                <h1>Update Employee Details</h1>
                <Form onSubmit={handleUpdate}>
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
                    <Button variant='primary' type='submit' className='w-100'>Update Employee</Button>
                </Form>
            </div>
        </>
    )
}
