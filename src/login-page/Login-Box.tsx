import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

interface LoginBoxProps {
  className: string;
}

function LoginBox(props: LoginBoxProps) {
  const {className} = props;
  return (
    <Form className={'login-input-container container-flex ' + className}>
      <Form.Group
        className="login-input-container__input"
        controlId="formBasicEmail"
      >
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group
        className="login-input-container__input"
        controlId="formBasicPassword"
      >
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button
        variant="primary"
        className="login-input-container__btn"
        type="submit"
      >
        <Link to="/team-selection">Log In</Link>
      </Button>
    </Form>
  );
}

export default LoginBox;
