import React, { useState } from 'react';
import { ArgentInput } from "./index";
import { Col, Row, Form } from "react-bootstrap";


export default { title: 'ArgentInput' };

export const inputSize = () => (
    <div className="container">
        <h2 style={{marginTop: '2rem'}}>Input sizing</h2>
        <div style={{marginBottom: '1rem'}}>
            <ArgentInput type="text"  size="lg" placeholder="Large text" />
        </div>
        <div style={{marginBottom: '1rem'}}>
            <ArgentInput type="text" placeholder="Normal text" />
        </div>
        <div style={{marginBottom: '1rem'}}>
            <ArgentInput type="text"  size="sm" placeholder="Small text" />
        </div>
    </div>
);

export const inputWithLabel = () => (
    <div className="container">
        <h2 style={{marginTop: '2rem'}}>Input with Label</h2>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <ArgentInput type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <ArgentInput type="password" placeholder="Password" />
        </Form.Group>
    </div>
);

export const inputWithPlaintext = () => (
    <div className="container">
        <h2 style={{marginTop: '2rem'}}>Input with Plain text</h2>
        <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
                Email
            </Form.Label>
            <Col sm="10">
                <ArgentInput plaintext readOnly value="email@example.com" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                Password
            </Form.Label>
            <Col sm="10">
                <ArgentInput type="password" />
            </Col>
        </Form.Group>
    </div>
);

export const inputState = () => (
    <div className="container">
        <h2 style={{marginTop: '2rem'}}>Input State</h2>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Disabled State</Form.Label>
            <ArgentInput type="email" disabled />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Read only State</Form.Label>
            <ArgentInput type="email" value="name@example.com" readOnly />
        </Form.Group>
    </div>
);

export const OnChangeInput = () => {
    const [name, setName] = useState('');
    console.log(name);

    return (
        <div className="container">
            <h2 style={{marginTop: '2rem'}}>OnChange Input</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <ArgentInput
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            </Form.Group>
        </div>
    )
};

