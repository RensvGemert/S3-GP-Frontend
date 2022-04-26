import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNotify, useLogin, useRedirect } from 'react-admin';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const MyLoginPage = () => {

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const redirect = useRedirect();

    const LoginRequest = () => {
        axios.post('http://localhost:8080/api/users/login', {
            email,
            password
        })
            .then(function (response) {
                console.log(response);
            })
            .then(json => {
                setId(json)
            })
            .catch(error => {
                console.log(error.response)
                console.log("invalid email or password")
                notify('Invalid email or password')
                redirect("/login")
            });

        console.log("succesfull login with email:" + email)
    }

    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password'),
        );
    }

    return (
        <>
            <Container style={{paddingTop: '30vh'}}>
                <Row>
                    <Col xs></Col>
                    <Col xs={{ order: 12 }}>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={LoginRequest}>
                            Submit
                        </Button>
                    </Form>

                    </Col>
                    <Col xs={{ order: 1 }}></Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default MyLoginPage;