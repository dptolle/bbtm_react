import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginBox() {
  return (
    <Form className="login-box">
      <Form.Group className="login-box-input" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" className="btn-login" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LoginBox;
