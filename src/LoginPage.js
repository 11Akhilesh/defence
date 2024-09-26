import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './LoginPage.css'; // Import a CSS file for custom styles
import  GOI from './images/goi1.png'
const LoginPage = () => {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application Number:', applicationNumber);
        console.log('Aadhar Number:', aadharNumber);
        console.log('Phone Number:', phoneNumber);
        // Add logic for validating or proceeding with the provided credentials
    };

    return (
        <div className="login-page">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <div className="login-card">
                            <div className="login-header">
                                <Image src={GOI} alt="MyGov Logo" className="logo" /> 
                                {/* Replace with actual logo path */}
                                <h2>Log In to your MyGov account</h2>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <h4>Log In With Application Number</h4>
                                <Form.Group controlId="formApplicationNumber">
                                    <Form.Label>Application Number</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Enter Application Number" 
                                        value={applicationNumber} 
                                        onChange={(e) => setApplicationNumber(e.target.value)} 
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="login-button">
                                    Log In with Application Number
                                </Button>
                                
                                <div className="separator">or</div>
                                
                                <h4>Log In With Aadhar Card Number or Phone Number</h4>
                                <Form.Group controlId="formAadharNumber">
                                    <Form.Label>Aadhar Card Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Aadhar Number" 
                                        value={aadharNumber} 
                                        onChange={(e) => setAadharNumber(e.target.value)} 
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Phone Number" 
                                        value={phoneNumber} 
                                        onChange={(e) => setPhoneNumber(e.target.value)} 
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="login-button">
                                    Log In with Aadhar/Phone
                                </Button>
                            </Form>
                            <a href="#" className="forgot-password">Forgot your password?</a>
                            {/* Add social login options here (Parichay, etc.) */}
                        </div>
                    </Col>
                </Row>
                <Row className="footer">
                    <Col md={12}>
                        <p className="text-center">
                            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact Us</a>
                        </p>
                        <p className="text-center">
                            © 2023 MyGov. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;