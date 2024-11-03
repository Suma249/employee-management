import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

function Dashboard() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();
                setEmployees(data);
            }
            catch (error) {
                console.log("error fetching employyes: " + error)
            }
        }
        fetchEmployees();
    }, [])
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Employees</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.department}</td>
                                            <td>
                                                <Button variant='outline-secondary'>Update</Button>
                                                <Button variant='outline-danger'>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard